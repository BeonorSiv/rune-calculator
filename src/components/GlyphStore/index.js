import React, {useMemo, useState} from 'react';
import data from './glyphs.json';
import GlyphItem from './GlyphItem';
import Row from 'antd/lib/grid/row';
import { Tabs } from 'antd';
import {uniq} from '../../utils/uniq';
import './index.css';

const GlyphStore = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [currentItems, setCurrentItems] = useState(data.glyphs);
    const defaultCategories = useMemo(() => ['все', ...uniq(data.glyphs.map((item) => item.category))], [data]);
    const options = defaultCategories.map((item, index) => ({
        key: `${index+1}`,
        label: item
    }));
    return (
        <div className="glyph-store">
           <Row>
               <Tabs type="card" activeKey={activeKey} items={options} onChange={(newKey)=>{
                   const newCategory = defaultCategories[+newKey-1];
                   setActiveKey(newKey);
                   if (newCategory === 'все') {
                       setCurrentItems(data.glyphs);
                   } else {
                       setCurrentItems(data.glyphs.filter(item => item.category === newCategory));
                   }
               }} />
           </Row>
           <Row gap="small">
               <div className="glyph-store_items">
                   {currentItems.map(item => <GlyphItem key={item.name} glyph={item}/>)}
               </div>
           </Row>
        </div>
    );
};

export default GlyphStore;