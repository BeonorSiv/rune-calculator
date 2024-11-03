import React from 'react';
import {Col, Row} from "antd";

const Header = () => {
    return (
        <Row>
            <Col span={24}>
                <h2> Калькулятор рун </h2>
            </Col>
            <Col span={24}>
                <small> Приложение рассчитано как помощь в подсчёте времени необходимого на сотворение рун </small>
            </Col>
        </Row>
    )
}

export default Header;