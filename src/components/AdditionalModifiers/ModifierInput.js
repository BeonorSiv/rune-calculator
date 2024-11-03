import React, {useContext, useMemo, useState} from 'react';
import {AppContext} from '../../contexts';
import {InputNumber} from 'antd';


const ModifierInput = ({ isPercentage, isIncrease }) => {
    const {costModifiers, setCostModifiers} = useContext(AppContext);
    const [value, setValue] = useState(0);
    const onChange = (value) => {
        setValue(value);
        let modifierValue;
        if (value === 0) {
            modifierValue = null;
        } else {
            modifierValue = value;
        }

        if(isIncrease) {
            if(isPercentage) {
                setCostModifiers({...costModifiers, inc: {...costModifiers.dec, percentageValue: modifierValue}});
            } else {
                setCostModifiers({...costModifiers, inc: {...costModifiers.dec, digitValue: modifierValue }});
            }
        } else {
            if(isPercentage) {
                setCostModifiers({...costModifiers, dec: {...costModifiers.dec, percentageValue: modifierValue}});
            } else {
                setCostModifiers({...costModifiers, dec: {...costModifiers.dec, digitValue: modifierValue }});
            }
        }


    };

    const percentageProps = {
        min: 0,
        max: 100
    };

    let props =  {};
    if(isPercentage) {
        props = {...percentageProps};
    }

    const title = useMemo(() => {
        if (!isIncrease && !isPercentage) {
            return 'Негативный ручной модификатор';
        } else if (!isIncrease && isPercentage) {
            return 'Негативный процентный модификатор';
        } else if (isIncrease && !isPercentage) {
            return 'Положительный ручной модификатор';
        }
        return 'Положительный процентный модификатор';

    }, [isPercentage, isIncrease]);
    return (
        <div className="modifier-input">
            <div>{title}</div>
            <InputNumber {...props} onChange={onChange} value={value}  />
            {isPercentage && <div>%</div>}
        </div>
    );
};

export default ModifierInput;
