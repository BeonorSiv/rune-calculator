import React from 'react';
import GlyphStore from "../GlyphStore";
import PreviewBlock from "../PreviewBlock";
import "./index.css";
import {Col, Row} from "antd";

const InfoBlock = () => {

    return (
        <Row className="info-block">
            <Col span={14}>
                <GlyphStore />
            </Col>
            <Col span={2} />
            <Col span={8}>
                <PreviewBlock />
            </Col>
        </Row>
    )
}

export default InfoBlock;