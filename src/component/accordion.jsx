import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState([]);
    const [enable, setEnable] = useState(false);

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    const handleMultiSelection = (currentId) => {
        let cpyMulti = [...multiSelection];
        const findIndexOfCurrentId = cpyMulti.indexOf(currentId);
        if (findIndexOfCurrentId === -1) cpyMulti.push(currentId);
        else cpyMulti.splice(findIndexOfCurrentId, 1);
        setMultiSelection(cpyMulti);
    };

    return (
        <div className="wrapper">
            {enable ? (
                <button onClick={() => setEnable(!enable)} className="button">
                    Disable Multi Selection
                </button>
            ) : (
                <button onClick={() => setEnable(!enable)} className="button">
                    Enable Multi Selection
                </button>
            )}

            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="item">
                            <div
                                onClick={
                                    enable
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }
                                className="title"
                            >
                                <p>{item.question}</p>
                                <span>+</span>
                            </div>
                            {selected === item.id ||
                            multiSelection.indexOf(item.id) !== -1 ? (
                                <p className="content">{item.answer}</p>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p>data not found</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
