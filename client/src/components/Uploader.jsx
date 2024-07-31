/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const Upload = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const [extractedData, setExtractedData] = useState(null);
    const [error, setError] = useState('');

    const handleExtract = async () => {
        const formData = new FormData();
        const fileInput = document.querySelector(".input-field");

        if (fileInput.files[0]) {
            formData.append('file', fileInput.files[0]);

            try {
                const uploadResponse = await fetch('http://localhost:8000/upload/', {
                    method: 'POST',
                    body: formData,
                });

                if (!uploadResponse.ok) {
                    throw new Error('Network response was not ok');
                }

                const extractResponse = await fetch('http://localhost:8000/extract/', {
                    method: 'POST',
                });

                if (!extractResponse.ok) {
                    throw new Error('Network response was not ok');
                }

                const extractData = await extractResponse.json();
                setExtractedData(extractData); // Set the extracted data to state
                setError('');
            } catch (error) {
                setError('Error uploading or extracting data: ' + error.message);
            }
        } else {
            setError('Please select a file to upload.');
        }
    };

    return (
        <div className='main'>
            <form onClick={() => document.querySelector(".input-field").click()}>
                <input
                    type="file"
                    accept='image/*,application/pdf'
                    className='input-field'
                    hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name);
                        if (files) {
                            setImage(URL.createObjectURL(files[0]));
                        }
                    }}
                />
                {image ?
                    <img src={image} width={150} height={150} alt={fileName} />
                    :
                    <>
                        <MdCloudUpload color='#6956E5' size={60} />
                        <p>Browse files to upload (PDF, JPG, JPEG, PNG)</p>
                    </>
                }
            </form>
            <section className='uploaded-row'>
                <AiFillFileImage color='#6956E5' />
                <span className='upload-content'>
                    {fileName}
                    <MdDelete
                        onClick={() => {
                            setFileName("No selected file");
                            setImage(null);
                            setExtractedData(null); // Clear extracted data on delete
                        }}
                    />
                </span>
                <button className='btn-extract' onClick={handleExtract}>Extract</button>
            </section>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {extractedData && (
                <div className='result'>
                    <h3>Extracted Data:</h3>
                    <pre>{JSON.stringify(extractedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Upload;