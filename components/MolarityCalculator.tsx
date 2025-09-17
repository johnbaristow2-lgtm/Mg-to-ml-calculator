import React, { useState, useEffect } from 'react';

const MolarityCalculator: React.FC = () => {
    const [concentration, setConcentration] = useState<string>('10');
    const [molarMass, setMolarMass] = useState<string>('58.44');
    const [molarity, setMolarity] = useState<string>('');
    const [resultText, setResultText] = useState<string>('');

    useEffect(() => {
        const conc = parseFloat(concentration);
        const mm = parseFloat(molarMass);

        if (!isNaN(conc) && !isNaN(mm) && mm > 0) {
            // Molarity (mol/L) = Concentration (g/L) / Molar Mass (g/mol)
            // Since 1 mg/ml = 1 g/L, the conversion is direct.
            const result = conc / mm;
            const molarityResult = result.toFixed(5).replace(/\.?0+$/, '');
            setMolarity(molarityResult);
            setResultText(`A concentration of ${conc} mg/ml for a substance with a molar mass of ${mm} g/mol is equal to ${molarityResult} M.`);
        } else {
            setMolarity('');
            setResultText('');
        }
    }, [concentration, molarMass]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">MG/ML to Molarity Calculator</h2>
                <p className="text-gray-600">Convert concentration to molarity.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="concentration" className="block text-sm font-medium text-gray-700 mb-1">
                        Concentration (mg/ml)
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
                    <label htmlFor="molarity" className="block text-sm font-medium text-gray-700 mb-1">
                       Resulting Molarity (M)
                    </label>
                    <input
                        type="text"
                        id="molarity"
                        value={molarity ? `${molarity} M` : ''}
                        readOnly
                        aria-label="Resulting Molarity (mol/L)"
                        className="w-full p-4 text-lg font-bold bg-light-gray border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {resultText && (
                    <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                        <p className="font-semibold text-lg">{resultText}</p>
                    </div>
                )}
                
                <div className="text-center pt-2 text-sm text-gray-500">
                    <p>Formula: <code className="font-mono bg-gray-100 p-1 rounded">Molarity = Concentration (mg/ml) / Molar Mass (g/mol)</code></p>
                </div>
            </div>
        </div>
    );
};

export default MolarityCalculator;
