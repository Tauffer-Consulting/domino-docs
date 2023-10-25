import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from 'react-router-dom';
import { useGallery } from '@site/src/utils/useGallery';

const PieceDocumentationPage = () => {
    const location = useLocation();
    const galleryPieces = useGallery();

    let params = new URLSearchParams(location.search);
    const repository = params.get('repository');
    const pieceName = params.get('piece');
    const pieceData = galleryPieces[repository]['pieces'][pieceName];

    // Extracting input properties from JSON

    // Define a CSS class for styling the table
    const tableStyle: React.CSSProperties = {
        margin: 'auto', 
        borderCollapse: 'collapse',
    };

    const thStyle: React.CSSProperties = {
        backgroundColor: '#f2f2f2',
        padding: '8px',
        textAlign: 'left',
    };

    const tdStyle: React.CSSProperties = {
        border: '1px solid #dddddd',
        padding: '8px',
        textAlign: 'left',
    };

    const inputProperties = pieceData.input_schema.properties;

    return (
        <Layout title="Piece Documentation" description="">
            <div >
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <h1>{pieceData.style?.node_label ? pieceData.style?.node_label : pieceData.name}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <h4>Input Arguments</h4>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Input Name</th>
                                <th style={thStyle}>Input Arg</th>
                                <th style={thStyle}>Data Type</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(inputProperties).map((inputArg) => (
                                <tr key={inputArg}>
                                    <td style={tdStyle}>{inputProperties[inputArg].title}</td>
                                    <td style={tdStyle}>{inputArg}</td>
                                    <td style={tdStyle}>{
                                        inputProperties[inputArg].type
                                    }</td>
                                    <td style={tdStyle}>{inputProperties[inputArg].description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default PieceDocumentationPage;
