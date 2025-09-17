import React, { useState, useEffect } from 'react';

const MlToMgMedicalCalculator: React.FC = () => {
    const [doseMg, setDoseMg] = useState<string>('');
    const [concentration, setConcentration] = useState<string>('50');
    const [volumeMl, setVolumeMl] = useState<string>('5');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const ml = parseFloat(volumeMl);
        const conc = parseFloat(concentration);

        if (!isNaN(ml) && !isNaN(conc) && conc > 0) {
            const result = ml * conc;
            const mgResult = result.toFixed(3).replace(/\.?0+$/, '');
            setDoseMg(mgResult);
            setResultText(`${ml} ml of a liquid with ${conc} mg/ml concentration contains a total dose of ${mgResult} mg.`);
        } else {
            setDoseMg('');
            setResultText('');
        }
    }, [volumeMl, concentration]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Dosage Calculator (ml to mg)</h2>
                <p className="text-gray-600">Calculate the total dose based on volume and concentration.</p>
            </div>

            <div className="space-y-6">
                 <div>
                    <label htmlFor="volumeMl" className="block text-sm font-medium text-gray-700 mb-1">
                       Volume Administered (ml)
                    </label>
                    <input
                        type="number"
                        id="volumeMl"
                        value={volumeMl}
                        onChange={(e) => setVolumeMl(e.target.value)}
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
                        placeholder="e.g., 50"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="doseMg" className="block text-sm font-medium text-gray-700 mb-1">
                        Resulting Dose (mg)
                    </label>
                    <input
                        type="number"
                        id="doseMg"
                        value={doseMg}
                        readOnly
                        aria-label="Resulting dose in mg"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">Dose (mg) = Volume (ml) * Concentration (mg/ml)</code></p>
                </div>
                
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                    <p className="font-bold">CRITICAL SAFETY WARNING:</p>
                    <p className="italic mt-1">This tool is for educational purposes ONLY. NEVER use this calculator for actual medical dosage calculations. Incorrect dosages can be fatal. Always consult a qualified healthcare professional for medical advice and dosage instructions.</p>
                </div>
            </div>
        </div>
    );
};

export default MlToMgMedicalCalculator;
