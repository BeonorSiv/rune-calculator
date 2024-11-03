import React, {useContext} from 'react';
import {AppContext} from '../../contexts';
import Row from 'antd/lib/grid/row';
import './index.css';

const PreviewBlock = () => {
    const {viewGlyph} = useContext(AppContext);

    return (
        <Row>
            <div className="preview-block ">
                <h3>
                    {viewGlyph.name}
                </h3>
                <div>
                    {  viewGlyph.isServant && <div>
                        <div>Глиф-слуга.</div>
                        {viewGlyph.description?.effect}
                    </div>}
                    {  viewGlyph.description?.effect&& <div>
                        <h4>Описание:</h4>
                        {viewGlyph.description?.effect}
                    </div>}
                    { viewGlyph.description?.requirements && <div>
                        <h4>ТРЕБУЕТ:</h4>
                        {viewGlyph.description?.requirements}
                    </div>}
                    {viewGlyph.description?.addition && <div>
                        <h4>Примечание:</h4>
                        {viewGlyph.description?.addition}
                    </div>}
                   <div>
                        <h4>Кол-во скаляций: {viewGlyph.scales}</h4>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export default PreviewBlock;