
import React, { useState, useEffect } from 'react';

const InfusionRateMinToHrCalculator: React.FC = () => {
    const [doseRateMin, setDoseRateMin] = useState<string>('5');
    const [concentration, setConcentration] = useState<string>('10');
    const [infusionRateHr, setInfusionRateHr] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const drMin = parseFloat(doseRateMin);
        const conc = parseFloat(concentration);

        if (!isNaN(drMin) && !isNaN(conc) && conc > 0) {
            // First convert mg/min to mg/hr
            const doseRateHr = drMin * 60;
            // Then convert mg/hr to ml/hr
            const result = doseRateHr / conc;
            const rateResult = result.toFixed(3).replace(/\.?0+$/, '');
            setInfusionRateHr(rateResult);
            setResultText(`A dose rate of ${drMin} mg/min with a concentration of ${conc} mg/ml requires an infusion rate of ${rateResult} ml/hr.`);
        } else {
            setInfusionRateHr('');
            setResultText('');
        }
    }, [doseRateMin, concentration]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Infusion Rate (mg/min to ml/hr)</h2>
                <p className="text-gray-600">Convert dose rate per minute to infusion rate per hour.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="doseRateMin" className="block text-sm font-medium text-gray-700 mb-1">
                        Dose Rate (mg/min)
                    </label>
                    <input
                        type="number"
                        id="doseRateMin"
                        value={doseRateMin}
                        onChange={(e) => setDoseRateMin(e.target.value)}
                        placeholder="e.g., 5"
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
                    <label htmlFor="infusionRateHr" className="block text-sm font-medium text-gray-700 mb-1">
                       Infusion Rate (ml/hr)
                    </label>
                    <input
                        type="text"
                        id="infusionRateHr"
                        value={infusionRateHr ? `${infusionRateHr} ml/hr` : ''}
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
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">Rate (ml/hr) = (Dose Rate (mg/min) × 60) / Conc. (mg/ml)</code></p>
                </div>
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                    <p className="font-bold">CRITICAL SAFETY WARNING:</p>
                    <p className="italic mt-1">This tool is for educational purposes ONLY. All IV infusion calculations must be verified by a qualified medical professional.</p>
                </div>
            </div>
        </div>
    );
};

export default InfusionRateMinToHrCalculator;
