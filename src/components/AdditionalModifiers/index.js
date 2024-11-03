import React from 'react';
import ModifierInput from './ModifierInput';
import {Col, Flex, Row} from 'antd';
import './index.css';


const AdditionalModifier = () => {

    return (
        <Row className="modifier-list">
            <Col span={12} className="modifier-block">
                <Flex>
                    <ModifierInput/>
                    <ModifierInput isPercentage/>
                </Flex>

            </Col>
            <Col span={12} className="modifier-block">
                <Flex>
                    <ModifierInput isIncrease/>
                    <ModifierInput isIncrease isPercentage/>
                </Flex>
            </Col>
        </Row>
    );
};

export default AdditionalModifier;
