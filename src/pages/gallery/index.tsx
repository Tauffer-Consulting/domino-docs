import React, { useCallback, useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import PieceCard from '@site/src/components/Gallery/PieceCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { useGallery } from '@site/src/utils/useGallery';


function Gallery() {

    const allGalleryPieces = useGallery();

    const [galleryPieces, setGalleryPieces] = useState(allGalleryPieces);

    useEffect(() => {
        setGalleryPieces(allGalleryPieces)
    }, [allGalleryPieces])

    const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        // Search over galleryPieces and return exactly the same structure but with the filtered pieces
        const searchValue = event.target.value.trim().toLowerCase();

        if (searchValue.length === 0) {
            setGalleryPieces(allGalleryPieces)
        }
        const filteredPieces = Object.keys(allGalleryPieces).reduce((acc, repositoryKey) => {
            const repository = allGalleryPieces[repositoryKey];
            const pieces = repository.pieces;
            const filteredPieces = Object.keys(pieces).reduce((acc, pieceKey) => {
                const piece = pieces[pieceKey];
                if (piece.name.toLowerCase().includes(searchValue) || piece?.style?.node_label?.toLowerCase().includes(searchValue)) {
                    acc[pieceKey] = piece;
                }
                return acc;
            }, {});
            if (Object.keys(filteredPieces).length > 0) {
                acc[repositoryKey] = {
                    ...repository,
                    pieces: filteredPieces,
                };
            }
            return acc;
        }, {});
        setGalleryPieces(filteredPieces)

    }, [allGalleryPieces])

    return (
        <Layout title="Gallery" description="">
            <div className='container'>
                <h1 style={{ marginTop: '20px' }}>Gallery</h1>
                <p>This section lists all the open source pieces repositories audited by Domino.</p>
                <div className='search-bar-div'>
                    <input 
                        placeholder='Search for pieces' 
                        className='search-bar-input'
                        onChange={handleSearch}
                    />
                </div>
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
