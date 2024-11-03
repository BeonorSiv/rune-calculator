import React from 'react';
import {FloatButton, Modal} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

import './index.css';

const config = {
    title: 'Справка',
    content: (
        <>
            <h3>Приветствую!</h3>
            <ul>
                <li className="modal-info-point">Вверхнее меню - это категории глифов. Можете как выбрать все, так и разделить по категориям для удобства.</li>
                <li className="modal-info-point">При наведении курсора на любой глиф, справа вы увидите подробную информацию о нём.</li>
                <li className="modal-info-point">При нажатии на него, вы добавите глиф в список глифов вашей руны, а также над глифом - сколько времени он заберёт.</li>
                <li className="modal-info-point">Если глиф имеет кнопку "..." это значит его максимальная скаляция выше 0. Вы можете выбрать нужную вам скаляцию.</li>
                <li className="modal-info-point">Вы всегда можете очистить список глифов вручную, нажав на X или убрать все и сразу, нажав на "Очистить X".</li>
                <li className="modal-info-point">После выбора глифов, вы можете надбавить их стоимость конкретным значением (в минутах) или в проценте. Либо сократить их стоимость.</li>
                <li className="modal-info-point">Не видите "Итого"? Прокрутите чуть-чуть вниз вашу страницу.</li>
            </ul>
        </>
    )
};

const InfoModal = () => {
    const [modal, contextHolder] = Modal.useModal();

    const handleOpen = () => modal.info(config);
    return (
        <>
            <FloatButton
                icon={<QuestionCircleOutlined/>}
                onClick={handleOpen}
            />
            {contextHolder}
        </>
    );
};

export default InfoModal;
