import React, { useState, useEffect } from 'react';

const InfusionRateCalculator: React.FC = () => {
    const [doseRate, setDoseRate] = useState<string>('200');
    const [concentration, setConcentration] = useState<string>('10');
    const [infusionRate, setInfusionRate] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const dr = parseFloat(doseRate);
        const conc = parseFloat(concentration);

        if (!isNaN(dr) && !isNaN(conc) && conc > 0) {
            const result = dr / conc;
            const rateResult = result.toFixed(3).replace(/\.?0+$/, '');
            setInfusionRate(rateResult);
            setResultText(`To achieve a dose rate of ${dr} mg/hr with a concentration of ${conc} mg/ml, the infusion rate must be ${rateResult} ml/hr.`);
        } else {
            setInfusionRate('');
            setResultText('');
        }
    }, [doseRate, concentration]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Infusion Rate Calculator (mg/hr to ml/hr)</h2>
                <p className="text-gray-600">Calculate IV drip rates accurately.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="doseRate" className="block text-sm font-medium text-gray-700 mb-1">
                        Dose Rate (mg/hr)
                    </label>
                    <input
                        type="number"
                        id="doseRate"
                        value={doseRate}
                        onChange={(e) => setDoseRate(e.target.value)}
                        placeholder="e.g., 200"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>

                <div>
                    <label htmlFor="concentration" className="block text-sm font-medium text-gray-700 mb-1">
                        Drug Concentration (mg/ml)
                    </label>
                    <input
                        type="number"
                        id="concentration"
                        value={concentration}
                        onChange={(e) => setConcentration(e.target.value)}
                        placeholder="e.g., 10"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="infusionRate" className="block text-sm font-medium text-gray-700 mb-1">
                       Infusion Rate (ml/hr)
                    </label>
                    <input
                        type="text"
                        id="infusionRate"
                        value={infusionRate ? `${infusionRate} ml/hr` : ''}
                        readOnly
                        aria-label="Resulting infusion rate in ml/hr"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">Rate (ml/hr) = Dose Rate (mg/hr) / Concentration (mg/ml)</code></p>
                </div>

                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                    <p className="font-bold">CRITICAL SAFETY WARNING:</p>
                    <p className="italic mt-1">This is an educational tool. All medical calculations for IV infusions must be performed and double-checked by qualified medical personnel. Errors can have severe consequences.</p>
                </div>
            </div>
        </div>
    );
};

export default InfusionRateCalculator;
