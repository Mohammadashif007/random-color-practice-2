import { useEffect, useState } from "react";

const RandomColor = () => {
    const [color, setColor] = useState("#000");
    const [typeOfColor, setTypeOfColor] = useState("hex");
    console.log(color)

    const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length)
    }

    const handleCreateHexColor = () => {
        const hex = [0, 1, 2, 3,4 ,5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'hex') handleCreateHexColor()
        else handleCreateRgbColor()
    },[typeOfColor])

    return (
        <div style={{ background: color, height: "100vh", width: "100vw", textAlign: 'center' }}>
            <button onClick={() => setTypeOfColor("hex")}>
                Create HEX Color
            </button>
            <button onClick={() => setTypeOfColor("rgb")}>
                Create RGB Color
            </button>
            <button onClick={typeOfColor === 'hex'? handleCreateHexColor: handleCreateRgbColor}>
                Generate Random Color
            </button>
            <div style={{fontSize: '45px', fontWeight: '700', color: '#fff'}}>
                <h1>Random {typeOfColor ==='hex'? 'HEX' : 'RGB'} Color</h1>
                <p>{color}</p>
            </div>
        </div>
    );
};
export default RandomColor;
