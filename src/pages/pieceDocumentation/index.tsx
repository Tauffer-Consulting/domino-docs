import React from 'react';
import PieceDocumentationSection from '../../components/Gallery/PieceDocumentation/pieceDocumentationSection';
import Layout from '@theme/Layout';
import { useLocation } from 'react-router-dom';
import { useGallery } from '@site/src/utils/useGallery';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import { Icon } from '@iconify/react';
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

    const repositoryData = galleryPieces[repository];
    const pieceData = repositoryData['pieces'][pieceName];
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
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>
                                {pieceData.style?.node_label ? pieceData.style?.node_label : pieceData.name} 
                            </h1>
                            <div style={{marginLeft: '15px'}}>
                                {<Icon icon={
                                    pieceData.style?.icon_class_name ? pieceData.style?.icon_class_name  :
                                    "arcticons:dominos"
                                } style={{ fontSize: '25px' }} />}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}} className='back-link-div'>
                            <Tooltip id="back-link-tooltip" />
                            <Link to="/domino-docs/gallery">
                                <button data-tooltip-id='back-link-tooltip' data-tooltip-content='Return to Gallery' data-tooltip-place="bottom">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        Version: <span style={{ fontWeight: 'bold' }}>{repositoryData.version}</span>
                    </div>
                    <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'left', flexDirection: 'column' }}>
                        <p>{pieceData?.description ? pieceData?.description : ''} </p>
                        <a href={pieceData.source_url} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> View piece code on GitHub
                            <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '30px', paddingBottom: '10px', borderBottom: '1px solid var(--ifm-color-emphasis-400)' }}>
                        <h2>Input Arguments</h2>
                    </div>
                    {
                        inputProperties ? (
                            <PieceDocumentationSection properties={inputProperties} definitions={inputDefinitions} />
                        ) : (
                            <p style={{ marginTop: '30px' }}>This piece has no inputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '30px', paddingBottom: '10px', borderBottom: '1px solid var(--ifm-color-emphasis-400)' }}>
                        <h2>Output Arguments</h2>
                    </div>
                    {
                        outputProperties ? (
                            <PieceDocumentationSection properties={outputProperties} definitions={outputDefinitions} />
                        ) : (
                            <p style={{ marginTop: '30px' }}>This piece has no outputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '30px', paddingBottom: '10px', borderBottom: '1px solid var(--ifm-color-emphasis-400)' }}>
                        <h2>Secrets Arguments</h2>
                    </div>
                    {
                        secretsProperties ? (
                            <PieceDocumentationSection properties={secretsProperties} definitions={secretsDefinitions} />
                        ) : (
                            <p style={{marginTop: '30px'}}>This piece has no secrets.</p>
                        )
                    }
                </div>
            </div>
        </Layout>
    );
};

export default PieceDocumentationPage;
