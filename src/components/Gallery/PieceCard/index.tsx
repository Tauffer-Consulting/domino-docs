import React from 'react';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

// TODO add documentation page


const PieceCard = ({ piece, repositoryVersion, repositoryName }) => {
    return (
        <div className="card">
            <h2>{piece.style?.node_label || piece.name}</h2>
            <p className='card-description'>{piece.description}</p>
            <div className="card-details">
                <p>
                    <span style={{fontWeight: 'bold'}}>Repository: </span> 
                        {repositoryName}
                    <br/>
                    <span style={{ fontWeight: 'bold' }}>Version: </span> {repositoryVersion}
                </p>
            </div>
            <div className="card-links">
                <a href={piece.source_url} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                    <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                </a>
                <a href={piece.source_url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-book"></i> View Documentation 
                </a>
            </div>
        </div>
    );
};

export default PieceCard;
