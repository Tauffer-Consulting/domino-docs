import React from 'react';
import { PieceDocumentationTable } from './pieceDocumentationTable';
import Layout from '@theme/Layout';
import { useLocation } from 'react-router-dom';
import { useGallery } from '@site/src/utils/useGallery';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './index.css'


const PieceDocumentationPage = () => {
    const location = useLocation();
    const galleryPieces = useGallery();
    
    if (Object.keys(galleryPieces).length === 0) {
        return null
    }

    let params = new URLSearchParams(location.search);
    const repository = params.get('repository');
    const pieceName = params.get('piece');
    
    const pieceData = galleryPieces[repository]['pieces'][pieceName];
    var inputProperties = pieceData?.input_schema?.properties || {};
    inputProperties = Object.keys(inputProperties).length === 0 ? null : inputProperties;
    const inputDefinitions = pieceData?.input_schema?.definitions || null;

    var outputProperties = pieceData?.output_schema?.properties || {};
    outputProperties = Object.keys(outputProperties).length === 0 ? null : outputProperties; 
    const outputDefinitions = pieceData?.output_schema?.definitions || null;

    var secretsProperties = pieceData?.secrets_schema?.properties || {};
    secretsProperties = Object.keys(secretsProperties).length === 0 ? null : secretsProperties; 
    const secretsDefinitions = pieceData?.secrets_schema?.definitions || null;
    
    return (
        <Layout title="Piece Documentation" description="">
            <div className='container'>
                <div className='piece-documentation-container'>
                    <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between'}}>
                        <h1>{pieceData.style?.node_label ? pieceData.style?.node_label : pieceData.name}</h1>
                        <div style={{display: 'flex', alignItems: 'center'}} className='back-link-div'>
                            <Tooltip id="back-link-tooltip" />
                            <Link to="/domino-docs/gallery">
                                <button data-tooltip-id='back-link-tooltip' data-tooltip-content='Return to Gallery' data-tooltip-place="bottom">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'left', flexDirection: 'column' }}>
                        <p>{pieceData?.description ? pieceData?.description : ''} </p>
                        <a href={pieceData.source_url} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> View piece code on GitHub
                            <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Input Arguments</h3>
                    </div>
                    {
                        inputProperties ? (
                            <PieceDocumentationTable properties={inputProperties} definitions={inputDefinitions} />
                        ) : (
                            <p>This piece has no inputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Output Arguments</h3>
                    </div>
                    {
                        outputProperties ? (
                            <PieceDocumentationTable properties={outputProperties} definitions={outputDefinitions} />
                        ) : (
                            <p>This piece has no outputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Secrets Arguments</h3>
                    </div>
                    {
                        secretsProperties ? (
                            <PieceDocumentationTable properties={secretsProperties} definitions={secretsDefinitions} />
                        ) : (
                            <p>This piece has no secrets.</p>
                        )
                    }
                </div>
            </div>
        </Layout>
    );
};

export default PieceDocumentationPage;
