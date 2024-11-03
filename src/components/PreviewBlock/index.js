import React, {useContext} from 'react';
import {AppContext} from "../../contexts";
import Row from "antd/lib/grid/row";
import "./index.css";

const PreviewBlock = () => {
    const {viewGlyph} = useContext(AppContext);

    return (
        <Row>
            <div className="preview-block ">
                <h3>
                    {viewGlyph.name}
                </h3>
                <div>
                    {viewGlyph.description}
                </div>
            </div>
        </Row>
    )
}

export default PreviewBlock;