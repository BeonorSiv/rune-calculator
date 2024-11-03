import React, {useContext} from 'react';
import {AppContext} from "../../contexts";
import {Button} from "antd";
import {Dropdown} from "antd";
import {message} from 'antd';
import {Tooltip} from "antd/lib";

const GlyphItem = ({glyph}) => {
    const {setChosenGlyphs, chosenGlyphs, setViewGlyph} = useContext(AppContext);
    const [messageApi, contextHolder] = message.useMessage();

    const handleAdd = async (e, scale = 0) => {
        if(glyph.isServant && !chosenGlyphs.find(item=>!item.isServant)) {
            await messageApi.open({
                type: 'error',
                content: "Ваша руна не имеет ни одного автономного глифа! Этот глиф - слуга. Добавьте сначала любой автономный глиф",
            });
            return;
        }
        if (!chosenGlyphs.find(i => i.name === glyph.name)) {
            setChosenGlyphs([...chosenGlyphs, {...glyph, chosenScale: scale}])
        } else {
            await messageApi.open({
                type: 'error',
                content: `Глиф "${glyph.name}" уже добавлен`,
            });
        }
    }

    const isScalable = glyph.scales !== 0;
    const handleMenuClick = async (e) => {
        await handleAdd(e, +e.key);
    }

    const generateMenuOptions = () => {
        const mapOptions = (_, key) => ({
            label: `${key + 1}-я скаляция`,
            key: key + 1
        })
        if (glyph.scales === "∞") {
            const tmpDefaultScales = Array.from({length: 10}, (_, i) => i + 1);
            return tmpDefaultScales.map(mapOptions);
        }
        const defaultScales = Array.from({length: glyph.scales}, (_, i) => i + 1);
        return defaultScales.map(mapOptions);
    }

    const menuOptions = isScalable && generateMenuOptions();
    return (
        <div className="glyph-store_item">
            {contextHolder}
            <Tooltip placement="top" title={`${glyph.value} минут`}>
                {isScalable ? (
                    <Dropdown.Button
                        menu={{items: menuOptions, onClick: handleMenuClick}}
                        onMouseOver={() => {
                            setViewGlyph(glyph)
                        }}
                        onClick={handleAdd}>
                        {glyph.name}
                    </Dropdown.Button>
                ) : (
                    <Button
                        onMouseOver={() => {
                            setViewGlyph(glyph)
                        }}
                        onClick={handleAdd}>
                        {glyph.name}
                    </Button>
                )}
            </Tooltip>
        </div>
    )
}

export default GlyphItem;