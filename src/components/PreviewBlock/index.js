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
                    {viewGlyph.isServant && (
                        <div>
                            <div><small>[Глиф-слуга]</small></div>
                        </div>
                    )}
                    {viewGlyph.description?.effect && (
                        <pre className="preview-block-text">
                            <h4>Описание:</h4>
                            {viewGlyph.description?.effect}
                        </pre>
                    )}
                    {viewGlyph.description?.requirements && (
                        <pre className="preview-block-text">
                            <h4>ТРЕБУЕТ:</h4>
                            {viewGlyph.description?.requirements}
                        </pre>
                    )}
                    {viewGlyph.description?.addition && (
                        <pre className="preview-block-text">
                            <h4>Примечание:</h4>
                            {viewGlyph.description?.addition}
                        </pre>
                    )}
                    {viewGlyph.scales >= 0 && (
                        <div>
                            <h4>Кол-во скаляций: {viewGlyph.scales}</h4>
                        </div>
                    )}
                </div>
            </div>
        </Row>
    );
};

export default PreviewBlock;