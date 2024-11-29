import "../../src/global.js";
import Graph from "react-graph-vis";
import { useState, useEffect } from "react";
import API from "../API";

const LABEL_FONT = { size: 25, color: "#000000" };
const options = {
    autoResize: true,
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    },
    physics: {
        enabled: false // Disable physics to prevent nodes from moving
    },
    interaction: {
        dragNodes: false, // Disable dragging of nodes
        dragView: true, // Enable dragging of the view
        zoomView: true, // Enable zooming of the view
    },
};

function randomColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}

const scaleMapping = {
    "Text": 100,
    "Concept": 200,
    "1:100,000": 300,
    "1:10,000": 400,
    "1:5,000": 500,
    "1:1,000": 600,
    "Blueprint/effects": 700,
    "default": 50, // Valore di default per testing!
};

const Diagram = () => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [state, setState] = useState({})


    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const documents = await API.getDocuments();
                setDocuments(documents);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    useEffect(() => {

        // Here I need to create the nodes with the data retrieved from the API.
        // But first I need to map the data to the format that the graph component expects.
        documents.forEach((doc: any) => {
            // Check the scale
            //TODO: the control on the scale does not work 
            if (doc.scale.toLowerCase() === "text") {
                console.log("Text");
                doc.scale = "Text";
            }
            else if (doc.scale.toLowerCase() === "concept") {
                console.log("Concept");
                doc.scale = "Concept";
            }
            else if (doc.scale.toLowerCase() === "architectural style") {
                console.log("Architectural style");
                doc.scale = "1:100,000";
            }
            else if (doc.scale.toLowerCase() === "blueprint/effects") {
                console.log("Blueprint/effects");
                doc.scale = "Blueprint/effects";
            }

            if (!doc.scale || !scaleMapping[doc.scale as keyof typeof scaleMapping]) {
                console.log("Invalid scale");
                doc.scale = "default";
            }

            // Check the year
            if (doc.date) {
                const date = new Date(doc.date);
                if (!isNaN(date.getTime())) {
                    console.log("The year is: ", date.getFullYear());
                    doc.year = date.getFullYear();
                } else {
                    console.log("Invalid date format");
                    doc.year = 2000; // Default year for testing
                }
            } else {
                console.log("No date provided");
                doc.year = 2001; // Default year for testing
            }
            console.log("New scale: ", doc.scale);
            console.log("New date: ", doc.year);

        });
        const nodes_documents = documents.map((doc: any) => ({
            id: doc.id,
            label: "No title",
            color: randomColor(),
            year: doc.year,
            scale: doc.scale,
        })).map(node => ({
            ...node,

            x: (node.year - 2000) * 1000, // Mapping the year
            y: scaleMapping[node.scale as keyof typeof scaleMapping], // Mapping the scale
        }
        ));


        nodes_documents.forEach((node, index) => {
            const overlappingNode = occupiedPositions.find((pos: any) => pos.x === node.x && pos.y === node.y);
            if (overlappingNode) {
                // TODO: decide if the offset should be only on the x axis or also on the y axis
                const offsetX = Math.floor(Math.random() * 100) + 100; // Random offset between 100 and 200
                const offsetY = Math.floor(Math.random() * 20) + 20; // Random offset between 20 and 40
                node.x += offsetX;  // Add offset to x position
                // node.y += offsetY; // Add offset to y position
            }
            // occupiedPositions.push({ x: node.x, y: node.y });   // ?? I don't think this is needed.
        });

        const allNodes = [...nodes_documents, ...label_style, ...label_year];
        allNodes.forEach((node) => {
            const overlappingNode = occupiedPositions.find((pos: any) => pos.x === node.x && pos.y === node.y);
            if (overlappingNode) {
                const offsetX = Math.floor(Math.random() * 100) + 100; // Random offset between 100 and 200
                const offsetY = Math.floor(Math.random() * 20) + 20; // Random offset between 20 and 40
                node.x += offsetX;  // Add offset to x position
                // node.y += offsetY; // Add offset to y position
            }
            occupiedPositions.push({ x: node.x, y: node.y });
        });


        setState({
            // counter: 5,
            graph: {
                nodes: allNodes,
                edges: [
                ]
            },
        })
    }, [documents]);




    const occupiedPositions = [] as any;

    const label_style = [
        { id: "label_text", label: "Text", color: "#e0df41", scale: "Text" },
        { id: "label_concept", label: "Concept", color: "#e0df41", scale: "Concept" },
        { id: "label_architectural", label: "1:100,000", color: "#e0df41", scale: "1:100,000" },
        { id: "label_architectural2", label: "1:10,000", color: "#e0df41", scale: "1:10,000" },
        { id: "label_architectural3", label: "1:5,000", color: "#e0df41", scale: "1:5,000" },
        { id: "label_architectural4", label: "1:1,000", color: "#e0df41", scale: "1:1,000" },
        { id: "label_blueprint", label: "Blueprint/effects", color: "#e0df41", scale: "Blueprint/effects" },
    ].map(node => ({
        ...node,
        x: (-0.3) * 1000, // Place the label on the left side of the graph
        y: scaleMapping[node.scale as keyof typeof scaleMapping], // Mapping the scale
        shape: "box",
        font: LABEL_FONT
    }
    ));

    const label_year = [];
    const minYear = 2000;
    const maxYear = 2040;

    for (let year = minYear; year <= maxYear; year++) {
        label_year.push({
            id: `label_${year}`,
            label: `${year}`,
            color: "#e0df41",
            year: year,
            x: (year - 2000) * 1000, // Mapping the year
            y: 50, // Place the label on the top side of the graph
            shape: "box",
            font: LABEL_FONT
        });
    }



    return (
        <>
            {state.graph && (
                <Graph graph={state.graph} options={options} style={{ height: "900px" }} />
            )}
        </>
    );

};

export default Diagram;