import React, { useEffect } from 'react';
import { Button, FloatButton, Modal, Tabs } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd/lib';
import './index.css';


const items = [{key: 1, label: 'Все', children: 'Глиф_1, Глиф_2, Глиф_3, Глиф_4, Глиф_5' }, {key: 2, label: 'Категория_1', children: 'Глиф_1, Глиф_2'}, {key: 3, label: 'Категория_2', children: 'Глиф_3, Глиф_4, Глиф_5'}];

const config = {
    title: 'Справка',
    content: (
        <>
            <h3>Приветствую!</h3>
            <ul>
                <li className="modal-info-point">Вверхнее меню - это категории глифов. Можете как выбрать все, так и разделить по категориям для удобства. <Tabs size="small" type="card" items={items} /></li>
                <li className="modal-info-point">При наведении курсора на любой <Tooltip placement="top" title="x минут"><Button>Глиф</Button></Tooltip>, справа вы увидите подробную информацию о нём.</li>
                <li className="modal-info-point">При нажатии на него, вы добавите  <span className="chosen-list_item example">Глиф | 0 <span className="chosen-list-reset example">X</span></span> в список глифов вашей руны, а также над глифом - сколько времени он заберёт.
                </li>
                <li className="modal-info-point">Если глиф имеет кнопку <Button size="small">•••</Button> это значит его
                    максимальная скаляция выше 0. Вы можете выбрать нужную вам скаляцию.
                </li>
                <li className="modal-info-point">Если у выбранного глифа есть <span className="chosen-list_item-sup">Цифра</span>, это говорит о том, что к глифу применина скаляция</li>
                <li className="modal-info-point">Вы всегда можете очистить список глифов вручную, нажав на <span className="chosen-list_item-delete example">X</span> или убрать все и сразу, нажав на <span className="chosen-list-reset example">Очистить X</span>.</li>
                <li className="modal-info-point">После выбора глифов, ниже вы можете в поле ввода надбавить к их суммарной стоимости модификатор цены: Конкретным значением (в минутах) или в проценте; Либо также сократить их стоимость.</li>
                <li className="modal-info-point">Не видите <b>"Итого"</b>? Прокрутите чуть-чуть вниз вашу страницу.</li>
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
                style={{
                    insetInlineEnd: 24,
                }}
            />
            {contextHolder}
        </>
    );
};

export default InfoModal;
