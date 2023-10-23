import React from 'react';
import Layout from '@theme/Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './gallery.css';

// @todo replace this mock with a real API call
// @todo improve styling with docusaurus guide
// @todo add search bar ?
// @todo add copy to clipboard button to copy url ?


const galleryMock = {
    "default_domino_pieces": {
        "name": "Default Domino Pieces",
        "url": "https://github.com/Tauffer-Consulting/default_domino_pieces",
        "description": "Default Domino Pieces"
    },
    "openai_domino_pieces": {
        "name": "OpenAI Domino Pieces",
        "url": "https://github.com/Tauffer-Consulting/openai_domino_pieces",
        "description": "OpenAI Domino Pieces"
    },
}

function Gallery() {
    return (
        <Layout title="Gallery" description="">
            <div className='container'>
                <h1 style={{marginTop: '20px'}}>Gallery</h1>
                <p>This section lists all the open source pieces repositories audited by Domino.</p>
                <div className="card-container">
                    {Object.keys(galleryMock).map((key) => {
                        const piece = galleryMock[key];
                        return (
                            <div className="card" key={key}>
                                <h2>{piece.name}</h2>
                                <p>{piece.description}</p>
                                <a href={piece.url} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> View on GitHub
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default Gallery;
