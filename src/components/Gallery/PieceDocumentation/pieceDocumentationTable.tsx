import React, { useCallback } from "react";
import './index.css'


const PieceDocumentationTable = ({properties, definitions}) => {

    const getTableBodyRow = useCallback((inputArg, properties, definitions) => {
        const itemSchema = properties[inputArg]
        var type = itemSchema?.format ? itemSchema.format : itemSchema.type;
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
        } else if (type === 'array' && itemSchema?.items?.$ref) {
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
    }, [properties, definitions])

    return (
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
                    {Object.keys(properties).map((arg) => (
                        getTableBodyRow(arg, properties, definitions)
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default PieceDocumentationTable;