
import React, { useState, useEffect } from 'react';

const ConcentrationCalculator: React.FC = () => {
    const [massMg, setMassMg] = useState<string>('1');
    const [volumeMl, setVolumeMl] = useState<string>('10');
    const [concentrationNgMl, setConcentrationNgMl] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const mg = parseFloat(massMg);
        const ml = parseFloat(volumeMl);

        if (!isNaN(mg) && !isNaN(ml) && ml > 0) {
            const result = (mg * 1000000) / ml;
            const ngMlResult = result.toLocaleString();
            setConcentrationNgMl(ngMlResult);
            setResultText(`A mass of ${mg.toLocaleString()} mg dissolved in ${ml.toLocaleString()} ml of volume results in a concentration of ${ngMlResult} ng/ml.`);
        } else {
            setConcentrationNgMl('');
            setResultText('');
        }
    }, [massMg, volumeMl]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Mass to Concentration Calculator</h2>
                <p className="text-gray-600">Calculate concentration (ng/ml) from mass (mg) and volume (ml).</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="massMg" className="block text-sm font-medium text-gray-700 mb-1">
                        Mass (mg)
                    </label>
                    <input
                        type="number"
                        id="massMg"
                        value={massMg}
                        onChange={(e) => setMassMg(e.target.value)}
                        placeholder="e.g., 1"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="volumeMl" className="block text-sm font-medium text-gray-700 mb-1">
                        Volume (ml)
                    </label>
                    <input
                        type="number"
                        id="volumeMl"
                        value={volumeMl}
                        onChange={(e) => setVolumeMl(e.target.value)}
                        placeholder="e.g., 10"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="concentrationNgMl" className="block text-sm font-medium text-gray-700 mb-1">
                       Resulting Concentration (ng/ml)
                    </label>
                    <input
                        type="text"
                        id="concentrationNgMl"
                        value={concentrationNgMl ? `${concentrationNgMl} ng/ml` : ''}
                        readOnly
                        aria-label="Resulting concentration in ng/ml"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">Conc. (ng/ml) = (Mass (mg) × 1,000,000) / Volume (ml)</code></p>
                </div>
            </div>
        </div>
    );
};

export default ConcentrationCalculator;
