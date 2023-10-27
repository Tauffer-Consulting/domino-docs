import { useState, useEffect } from 'react';
import { galleryPiecesMock } from './galleryPiecesMock';


const USE_MOCK = false;
const galleryJsonURL = 'https://raw.githubusercontent.com/Tauffer-Consulting/domino_pieces_gallery/main/gallery.json'

export const useGallery = () => {
    var defaultPieces = {};
    if (USE_MOCK) {
        defaultPieces = galleryPiecesMock;
    } 
    const [galleryPieces, setGalleryPieces] = useState(defaultPieces);
    useEffect(() => {
        if (USE_MOCK) {
            return
        }
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
                // Store data in local storage along with a timestamp
                setGalleryPieces(data)
                localStorage.setItem('galleryPieces', JSON.stringify(data));
                localStorage.setItem('galleryPiecesStoredTimestamp', Date.now().toString());
                return data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return galleryPieces;
}
