import React, {useContext, useMemo} from 'react';
import {AppContext} from '../../contexts';
import './index.css';

const Total = () => {
    const {chosenGlyphs, costModifiers} = useContext(AppContext);
    const calculateValue = () => {
        let total = 0;
        chosenGlyphs.length && chosenGlyphs.map((item) => {
            if (!item.value.length) {
                if (item.scales !== 0) {
                    total += (item.value * (item.chosenScale + 1));
                } else {
                    total += item.value;
                }
            } else {
                total += item.value[item.chosenScale];
            }
        });

        if (costModifiers.inc.digitValue !== null) {
            total += costModifiers.inc.digitValue;
        }
        if (costModifiers.inc.percentageValue !== null) {
            total += (total/100 * costModifiers.inc.percentageValue);
        }
        if (costModifiers.dec.digitValue !== null) {
            total -= costModifiers.dec.digitValue;
        }
        if (costModifiers.dec.percentageValue !== null) {
            total -= (total/100 * costModifiers.dec.percentageValue);
        }
        return total.toFixed(0);
    };

    const calculatedValue = useMemo(() => calculateValue(), [chosenGlyphs, costModifiers]);

    return (
        <div className="total">
            <div>Итого:</div>
            <div>{calculatedValue} минут</div>
        </div>
    );
};

export default Total;
