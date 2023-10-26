import React, { useCallback } from "react";


export const PieceDocumentationSection = ({ properties, definitions }) => {

    const getTableBodyRow = useCallback((inputArg, properties, definitions, index) => {
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
            <div key={index} style={{ marginTop: '20px', borderBottom: '1px solid var(--ifm-color-emphasis-400)', paddingBottom: '20px' }} className='item'>
                <div style={{marginTop: '10px'}}>
                    <span style={{ fontWeight: "bold" }}>
                        {inputArg}
                    </span>
                    {" "}(<i>{type}</i>):
                </div>
                <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                    {properties[inputArg].description}
                </div>
            </div>
        )
    }, [properties, definitions])

    return (
        <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'left' }}>
            <div style={{width: '100%'}}>
                {Object.keys(properties).map((arg, index) => (
                    getTableBodyRow(arg, properties, definitions, index)
                ))}   
            </div>
        </div>
    )
};