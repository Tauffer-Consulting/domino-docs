import React, { useCallback } from 'react';
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
    
    const getTableBodyRow = useCallback((inputArg, properties, definitions) => {
        const itemSchema = properties[inputArg]
        var type = itemSchema.format ? itemSchema.format : itemSchema.type;
        var name = itemSchema.title
        if ("allOf" in itemSchema || "oneOf" in itemSchema || "anyOf" in itemSchema) {
            const ofKey = "allOf" in itemSchema ? "allOf" : "oneOf" in itemSchema ? "oneOf" : "anyOf";
            const definitionName = itemSchema[ofKey][0].$ref.split("/").pop() as string;
            const definition = definitions[definitionName];
            type = `enum[${definition.type}]`;
            name = definition.title;
        }
        type = type === "number" ? "float" : (type as string);

        if (type === "array" && itemSchema?.items?.type) {
            const itemsType = itemSchema.items.type;
            type = `array[${itemsType}]`;
        }else if (type === 'array' && itemSchema?.items?.$ref) {
            type = `array[object]`
        }

        return (
            <tr key={inputArg}>
                <td>{name}</td>
                <td>{inputArg}</td>
                <td>{
                    type
                }</td>
                <td>{properties[inputArg].description}</td>
            </tr>
        )
    }, [])

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
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Input Arguments</h3>
                    </div>
                    {
                        inputProperties ? (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                    <table className='args-table'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Argument</th>
                                                <th>Data Type</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(inputProperties).map((inputArg) => (
                                                getTableBodyRow(inputArg, inputProperties, inputDefinitions)
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        ) : (
                            <p>This piece has no inputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Output Arguments</h3>
                    </div>
                    {
                        outputProperties ? (
                            <>
                            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <table className='args-table'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Argument</th>
                                            <th>Data Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(outputProperties).map((outputArg) => (
                                            getTableBodyRow(outputArg, outputProperties, outputDefinitions)
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            </>
                        ) : (
                            <p>This piece has no outputs.</p>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'center', marginTop: '20px' }}>
                        <h3>Secrets Arguments</h3>
                    </div>
                    {
                        secretsProperties ? (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                    <table className='args-table'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Argument</th>
                                                <th>Data Type</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(secretsProperties).map((secretsArg) => (
                                                getTableBodyRow(secretsArg, secretsProperties, secretsDefinitions)
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
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
