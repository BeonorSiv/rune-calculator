import React, {useContext, useEffect, useMemo,} from 'react';
import {AppContext} from "../../contexts";
import ChosenItem from "./ChosenItem";
import "./index.css";

const ChosenList = () => {
    const {chosenGlyphs, setChosenGlyphs} = useContext(AppContext);
    const handleReset = () => {
        setChosenGlyphs([]);
    }
    return (
        <>
            <div className="chosen-list">
                <div className="chosen-list_items">
                    {chosenGlyphs.map(glyph => (
                        <ChosenItem key={glyph.name} glyph={glyph}/>
                    ))}
                </div>
            </div>
            {chosenGlyphs.length ? (
                <div className="chosen-list-reset" onClick={handleReset}>
                    Очистить X
                </div>
            ) : <div className="chosen-list-reset" />}
        </>
    )
}

export default ChosenList;