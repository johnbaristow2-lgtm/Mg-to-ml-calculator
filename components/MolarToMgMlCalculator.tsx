
import React, { useState, useEffect } from 'react';

const MolarToMgMlCalculator: React.FC = () => {
    const [molarity, setMolarity] = useState<string>('0.1');
    const [molarMass, setMolarMass] = useState<string>('58.44');
    const [concentration, setConcentration] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const mol = parseFloat(molarity);
        const mm = parseFloat(molarMass);

        if (!isNaN(mol) && !isNaN(mm)) {
            // Molarity (mol/L) * Molar Mass (g/mol) = Concentration (g/L)
            // Since 1 g/L = 1 mg/ml, the result is the same value for mg/ml.
            const result = mol * mm;
            const concResult = result.toFixed(5).replace(/\.?0+$/, '');
            setConcentration(concResult);
            setResultText(`A ${mol} M solution of a substance with a molar mass of ${mm} g/mol has a concentration of ${concResult} mg/ml.`);
        } else {
            setConcentration('');
            setResultText('');
        }
    }, [molarity, molarMass]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Molar to MG/ML Calculator</h2>
                <p className="text-gray-600">Convert molarity to concentration.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="molarity" className="block text-sm font-medium text-gray-700 mb-1">
                       Molarity (M, mol/L)
                    </label>
                    <input
                        type="number"
                        id="molarity"
                        value={molarity}
                        onChange={(e) => setMolarity(e.target.value)}
                        placeholder="e.g., 0.1"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="molarMass" className="block text-sm font-medium text-gray-700 mb-1">
                        Molar Mass (g/mol)
                    </label>
                    <input
                        type="number"
                        id="molarMass"
                        value={molarMass}
                        onChange={(e) => setMolarMass(e.target.value)}
                        placeholder="e.g., 58.44 for NaCl"
                        className="w-full p-3 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="concentration" className="block text-sm font-medium text-gray-700 mb-1">
                       Resulting Concentration (mg/ml)
                    </label>
                    <input
                        type="text"
                        id="concentration"
                        value={concentration ? `${concentration} mg/ml` : ''}
                        readOnly
                        aria-label="Resulting Concentration (mg/ml)"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">mg/ml = Molarity (mol/L) × Molar Mass (g/mol)</code></p>
                </div>
            </div>
        </div>
    );
};

export default MolarToMgMlCalculator;
