import React, {useContext} from 'react';
import {AppContext} from '../../contexts';

const ChosenItem = ({glyph}) => {
    const {chosenGlyphs, setChosenGlyphs} = useContext(AppContext);

    const handleDelete = () => {
        const filteredGlyphs = chosenGlyphs.filter(item => item.name !== glyph.name);
        setChosenGlyphs(filteredGlyphs);
    };

    return (
        <div key={glyph.name} className="chosen-list_item">
            {glyph.name} | {glyph.value?.length ? glyph.value[glyph.chosenScale] : glyph.value} {glyph.chosenScale > 0 &&
        <span className="chosen-list_item-sup">[{glyph.chosenScale}]</span>}
            <div className="chosen-list_item-delete" onClick={handleDelete}>X
            </div>
        </div>
    );
};

export default ChosenItem;
