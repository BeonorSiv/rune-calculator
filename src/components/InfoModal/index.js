import React, { useEffect } from 'react';
import { Button, FloatButton, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import './index.css';
import { Tooltip } from 'antd/lib';

const config = {
    title: 'Справка',
    content: (
        <>
            <h3>Приветствую!</h3>
            <ul>
                <li className="modal-info-point">Вверхнее меню - это категории глифов. Можете как выбрать все, так и разделить по категориям для удобства.</li>
                <li className="modal-info-point">При наведении курсора на любой <Tooltip placement="top" title="x минут"><Button>Глиф</Button></Tooltip>, справа вы увидите подробную информацию о нём.</li>
                <li className="modal-info-point">При нажатии на него, вы добавите  <span className="chosen-list_item example">Глиф | 0 <span className="chosen-list-reset example">X</span></span> в список глифов вашей руны, а также над глифом - сколько времени он заберёт.
                </li>
                <li className="modal-info-point">Если глиф имеет кнопку <Button size="small">•••</Button> это значит его
                    максимальная скаляция выше 0. Вы можете выбрать нужную вам скаляцию.
                </li>
                <li className="modal-info-point">Если у выбранного глифа есть <span className="chosen-list_item-sup">Цифра</span>, это говорит о том, что к глифе применина скаляция</li>
                <li className="modal-info-point">Вы всегда можете очистить список глифов вручную, нажав на <span className="chosen-list_item-delete example">X</span> или убрать все и сразу, нажав на <span className="chosen-list-reset example">Очистить X</span>.</li>
                <li className="modal-info-point">После выбора глифов, вы можете надбавить их стоимость конкретным значением (в минутах) или в проценте. Либо сократить их стоимость.</li>
                <li className="modal-info-point">Не видите "Итого"? Прокрутите чуть-чуть вниз вашу страницу.</li>
            </ul>
        </>
    )
};

const InfoModal = () => {
    const [modal, contextHolder] = Modal.useModal();

    const handleOpen = () => modal.info(config);
    useEffect(() => {
        const isHelpMeSaved = localStorage.getItem('rune-helpme');
        if(!isHelpMeSaved) {
            modal.info(config);
            localStorage.setItem('rune-helpme', 'true');
        }
    }, []);
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
