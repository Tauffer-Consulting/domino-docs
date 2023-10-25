import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { galleryPiecesMock } from './galleryPiecesMock';
import PieceCard from '../components/Gallery/PieceCard';


// todo fetch from github

function Gallery() {

    const [galleryPieces, setGalleryPieces] = useState({});
    const galleryJsonURL = 'https://raw.githubusercontent.com/Tauffer-Consulting/domino_pieces_gallery/main/gallery.json'

    useEffect(() => {
        // Check if data exists in localStorage and if it's less than 24 hours old]
        // If it does not exist it will be fetched from github
        const storedData = localStorage.getItem('galleryPieces');
        const storedTimestamp = localStorage.getItem('galleryPiecesStoredTimestamp');

        if (storedData && storedTimestamp) {
            const currentTimestamp = Date.now();
            if (currentTimestamp - parseInt(storedTimestamp, 10) < 24 * 60 * 60 * 1000) {
                setGalleryPieces(JSON.parse(storedData));
                return;
            }
        }
        const fetchData = async () => {
            try {
                const response = await fetch(galleryJsonURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGalleryPieces(data);
                // Store data in local storage along with a timestamp
                localStorage.setItem('galleryPieces', JSON.stringify(data));
                localStorage.setItem('galleryPiecesStoredTimestamp', Date.now().toString());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


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
