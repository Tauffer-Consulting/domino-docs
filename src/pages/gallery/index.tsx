import React from 'react';
import Layout from '@theme/Layout';
import PieceCard from '@site/src/components/Gallery/PieceCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { useGallery } from '@site/src/utils/useGallery';


function Gallery() {

    const galleryPieces = useGallery();

    return (
        <Layout title="Gallery" description="">
            <div className='container'>
                <h1 style={{ marginTop: '20px' }}>Gallery</h1>
                <p>This section lists all the open source pieces repositories audited by Domino.</p>
                <div className="card-container">
                    {Object.keys(galleryPieces).map((repositoryKey) => {
                        const repository = galleryPieces[repositoryKey];
                        const pieces = repository.pieces;

                        return Object.keys(pieces).map((pieceKey) => {
                            const piece = pieces[pieceKey];
                            return (
                                <PieceCard
                                    key={pieceKey}
                                    repositoryVersion={repository.version}
                                    repositoryName={repositoryKey}
                                    repositoryUrl={repository.url}
                                    piece={piece}
                                />
                            );
                        });
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default Gallery;
