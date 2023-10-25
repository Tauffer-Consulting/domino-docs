import React from 'react';
import Layout from '@theme/Layout';
import { Link, useLocation } from 'react-router-dom';

// pieceDocumentation/{repositoryName}/{pieceName}
const DocumentationPage = () => {

    const location = useLocation()
    console.log(location)


    //const { input_schema, output_schema, secrets_schema } = piece;

    return (
        <Layout title="Piece Documentation" description="">
            <div>
                hello
            </div>
        </Layout>
    )
    // return (
    //     <div>
    //         <h1>Documentation for {piece.name}</h1>
    //         <section>
    //             <h2>Input Schemas</h2>
    //             {input_schema && (
    //                 <div>
    //                     <h3>Fields</h3>
    //                     <pre>{JSON.stringify(input_schema.properties, null, 2)}</pre>
    //                     <h3>Data Types</h3>
    //                     <pre>{JSON.stringify(input_schema.definitions, null, 2)}</pre>
    //                 </div>
    //             )}
    //         </section>

    //         <section>
    //             <h2>Output Schemas</h2>
    //             {output_schema && (
    //                 <div>
    //                     <h3>Fields</h3>
    //                     <pre>{JSON.stringify(output_schema.properties, null, 2)}</pre>
    //                     <h3>Data Types</h3>
    //                     <pre>{JSON.stringify(output_schema.definitions, null, 2)}</pre>
    //                 </div>
    //             )}
    //         </section>

    //         <section>
    //             <h2>Secrets Schemas</h2>
    //             {secrets_schema && (
    //                 <div>
    //                     <h3>Fields</h3>
    //                     <pre>{JSON.stringify(secrets_schema.properties, null, 2)}</pre>
    //                     <h3>Data Types</h3>
    //                     <pre>{JSON.stringify(secrets_schema.definitions, null, 2)}</pre>
    //                 </div>
    //             )}
    //         </section>
    //     </div>
    // );
};

export default DocumentationPage;
