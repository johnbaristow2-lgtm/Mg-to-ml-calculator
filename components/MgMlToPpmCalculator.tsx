
import React, { useState, useEffect } from 'react';

const MgMlToPpmCalculator: React.FC = () => {
    const [mgMl, setMgMl] = useState<string>('1');
    const [ppm, setPpm] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const mgMlVal = parseFloat(mgMl);

        if (!isNaN(mgMlVal)) {
            // For aqueous solutions, 1 ppm is approx 1 mg/L.
            // 1 mg/ml = 1000 mg/L, so 1 mg/ml = 1000 ppm.
            const result = mgMlVal * 1000;
            const ppmResult = result.toLocaleString();
            setPpm(ppmResult);
            setResultText(`${mgMlVal.toLocaleString()} mg/ml is equivalent to approximately ${ppmResult} ppm.`);
        } else {
            setPpm('');
            setResultText('');
        }
    }, [mgMl]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">MG/ML to PPM Calculator</h2>
                <p className="text-gray-600">Convert concentration to Parts Per Million.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="mgMl" className="block text-sm font-medium text-gray-700 mb-1">
                        Concentration (mg/ml)
                    </label>
                    <input
                        type="number"
                        id="mgMl"
                        value={mgMl}
                        onChange={(e) => setMgMl(e.target.value)}
                        placeholder="e.g., 1"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="ppm" className="block text-sm font-medium text-gray-700 mb-1">
                       Resulting Concentration (PPM)
                    </label>
                    <input
                        type="text"
                        id="ppm"
                        value={ppm ? `${ppm} PPM` : ''}
                        readOnly
                        aria-label="Resulting concentration in PPM"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">PPM = Concentration (mg/ml) × 1000</code></p>
                    <p className="mt-2 text-xs italic">This conversion assumes an aqueous solution where 1 ml ≈ 1 g.</p>
                </div>
            </div>
        </div>
    );
};

export default MgMlToPpmCalculator;
