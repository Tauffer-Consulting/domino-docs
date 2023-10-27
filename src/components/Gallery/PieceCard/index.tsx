import React, { useState } from 'react';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const PieceCard = ({ piece, repositoryVersion, repositoryName, repositoryUrl }) => {

    var icon = null;
    if (!piece.style?.icon_class_name) {
        icon = <Icon icon={"arcticons:dominos"} style={{ fontSize: '25px' }} />
    } else {
        icon = <Icon icon={piece.style?.icon_class_name} />
    }

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: '0' }}>{piece.style?.node_label || piece.name}</h3>
                {icon}
            </div>
            <p
                className='card-description'>{piece.description}
            </p>
            <div className="card-details">
                <p>
                    <Tooltip id="copy-piece-repo-tooltip" />
                    <span
                        style={{ fontWeight: 'bold' }}
                    >
                        Repository:
                        <span style={{ fontWeight: 'normal' }}>
                            {` ${repositoryName}`}
                            <Icon
                                icon="bi:copy"
                                style={{ fontSize: '15px', marginLeft: '10px', cursor: 'pointer' }}
                                data-tooltip-id='copy-piece-repo-tooltip'
                                data-tooltip-content='Copy Repository URL to Clipboard'
                                data-tooltip-place="top"
                                onClick={() => navigator.clipboard.writeText(repositoryUrl)}
                            />
                        </span>
                    </span>

                    <br />
                    <span style={{ fontWeight: 'bold' }}>Version: </span> {repositoryVersion}
                </p>
            </div>
            <div className="card-links">
                <a href={piece.source_url} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                    <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                </a>
                <Link to={`/domino-docs/pieceDocumentation?repository=${repositoryName}&piece=${piece.name}`}>
                    <i className="fas fa-book"></i> View Documentation
                </Link>
            </div>
        </div>
    );
};

export default PieceCard;
