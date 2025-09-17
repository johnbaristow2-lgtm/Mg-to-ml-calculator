
import React, { useState, useEffect, useMemo } from 'react';

type Unknown = 'c1' | 'v1' | 'c2' | 'v2';

const DilutionCalculator: React.FC = () => {
    const [c1, setC1] = useState<string>('1000');
    const [v1, setV1] = useState<string>('2');
    const [c2, setC2] = useState<string>('');
    const [v2, setV2] = useState<string>('10');
    const [unknown, setUnknown] = useState<Unknown>('c2');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const c1Val = parseFloat(c1);
        const v1Val = parseFloat(v1);
        const c2Val = parseFloat(c2);
        const v2Val = parseFloat(v2);

        let result = NaN;
        let text = '';

        try {
            switch (unknown) {
                case 'c2':
                    if (!isNaN(c1Val) && !isNaN(v1Val) && !isNaN(v2Val) && v2Val !== 0) {
                        result = (c1Val * v1Val) / v2Val;
                        setC2(result.toFixed(4).replace(/\.?0+$/, ''));
                        text = `To get a final volume of ${v2Val} with a final concentration of ${result.toFixed(4).replace(/\.?0+$/, '')}, you need to take ${v1Val} of your initial solution at ${c1Val}.`;
                    }
                    break;
                case 'v1':
                    if (!isNaN(c1Val) && !isNaN(c2Val) && !isNaN(v2Val) && c1Val !== 0) {
                        result = (c2Val * v2Val) / c1Val;
                        setV1(result.toFixed(4).replace(/\.?0+$/, ''));
                        text = `To create a solution of ${v2Val} at ${c2Val}, you need to start with ${result.toFixed(4).replace(/\.?0+$/, '')} of your initial ${c1Val} solution.`;
                    }
                    break;
                 case 'c1':
                    if (!isNaN(v1Val) && !isNaN(c2Val) && !isNaN(v2Val) && v1Val !== 0) {
                        result = (c2Val * v2Val) / v1Val;
                        setC1(result.toFixed(4).replace(/\.?0+$/, ''));
                    }
                    break;
                 case 'v2':
                    if (!isNaN(c1Val) && !isNaN(v1Val) && !isNaN(c2Val) && c2Val !== 0) {
                        result = (c1Val * v1Val) / c2Val;
                        setV2(result.toFixed(4).replace(/\.?0+$/, ''));
                    }
                    break;
            }
        } catch (e) {
            console.error(e);
        }

        setResultText(text);

    }, [c1, v1, c2, v2, unknown]);

    const handleUnknownChange = (val: Unknown) => {
        setUnknown(val);
        // Clear the field that is now the unknown
        if (val === 'c1') setC1('');
        if (val === 'v1') setV1('');
        if (val === 'c2') setC2('');
        if (val === 'v2') setV2('');
    }

    const field = (id: Unknown, label: string, value: string, setValue: (s:string)=>void) => {
        const isUnknown = unknown === id;
        return (
            <div>
                <label htmlFor={id} className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <input type="radio" name="unknown" checked={isUnknown} onChange={() => handleUnknownChange(id)} className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300"/>
                    {label}
                </label>
                <input
                    type="number"
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    readOnly={isUnknown}
                    className={`w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm ${isUnknown ? 'bg-light-gray font-bold' : ''}`}
                />
            </div>
        )
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Dilution Calculator (C₁V₁ = C₂V₂)</h2>
                <p className="text-gray-600">Calculate the missing value for a stock solution dilution.</p>
            </div>
            <p className="text-center text-sm text-gray-500 mb-4">Select the value you want to calculate.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {field('c1', 'Initial Conc. (C₁)', c1, setC1)}
                {field('v1', 'Initial Volume (V₁)', v1, setV1)}
                {field('c2', 'Final Conc. (C₂)', c2, setC2)}
                {field('v2', 'Final Volume (V₂)', v2, setV2)}
            </div>
            
            <div className="mt-6 text-center text-xs text-gray-500">
                <p>Units for concentration (e.g., mg/ml, ug/ml, M) and volume (e.g., ml, L) must be consistent.</p>
            </div>

            {resultText && (
                <div className="mt-6 text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-lg">{resultText}</p>
                </div>
            )}
            
            <div className="mt-4 text-center pt-2 text-sm text-gray-500">
                <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">C₁V₁ = C₂V₂</code></p>
                 <p className="mt-2 text-xs italic">Where C = Concentration and V = Volume.</p>
            </div>
        </div>
    );
};

export default DilutionCalculator;
