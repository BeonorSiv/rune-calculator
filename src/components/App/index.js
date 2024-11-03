import React, {useState} from 'react';
import Header from '../Header';
import {AppContext} from '../../contexts';
import InfoBlock from '../InfoBlock';
import ChosenList from '../ChosenList';
import AdditionalModifiers from '../AdditionalModifiers';
import Total from '../Total';
import InfoModal from '../InfoModal';

import './index.css';

function App() {
    const [chosenGlyphs, setChosenGlyphs] = useState([]);
    const [viewGlyph, setViewGlyph] = useState({});
    const [costModifiers, setCostModifiers] = useState({
        inc: {
            digitValue: null,
            percentageValue: null,
        },
        dec: {
            digitValue: null,
            percentageValue: null,
        }
    });
    return (
        <AppContext.Provider value={{
            chosenGlyphs,
            setChosenGlyphs,
            viewGlyph,
            setViewGlyph,
            costModifiers,
            setCostModifiers
        }}>
            <div className="app">
                <Header/>
                <InfoBlock/>
                <ChosenList/>
                <AdditionalModifiers/>
                <Total/>
                <InfoModal/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
