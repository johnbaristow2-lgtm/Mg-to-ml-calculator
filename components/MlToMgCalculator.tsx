import React, { useState, useEffect, useCallback } from 'react';
import { SUBSTANCES } from '../constants';
import type { Substance } from '../types';

const MlToMgCalculator: React.FC = () => {
  const [mg, setMg] = useState<string>('1000');
  const [ml, setMl] = useState<string>('1');
  const [substanceKey, setSubstanceKey] = useState<string>('water');
  const [customDensity, setCustomDensity] = useState<string>('1000');
  const [lastChanged, setLastChanged] = useState<'mg' | 'ml'>('ml');
  const [resultText, setResultText] = useState<string>('');

  const selectedSubstance: Substance = substanceKey === 'custom'
    ? { name: 'Custom Density', density: parseFloat(customDensity) || 0 }
    : SUBSTANCES[substanceKey];

  const updateResultText = (currentMl: string, currentMg: string, substance: Substance) => {
    const mlVal = parseFloat(currentMl);
    const mgVal = parseFloat(currentMg);
    if (!isNaN(mlVal) && !isNaN(mgVal) && substance.name) {
      setResultText(`${mlVal.toLocaleString()} ml of ${substance.name} is equal to ${mgVal.toLocaleString()} mg.`);
    } else {
      setResultText('');
    }
  };
  
  const calculateMg = useCallback(() => {
    const mlValue = parseFloat(ml);
    if (!isNaN(mlValue) && selectedSubstance.density > 0) {
      const result = mlValue * selectedSubstance.density;
      const mgResult = result.toFixed(3).replace(/\.?0+$/, '');
      setMg(mgResult);
      updateResultText(ml, mgResult, selectedSubstance);
    } else {
      setMg('');
      setResultText('');
    }
  }, [ml, selectedSubstance]);

  const calculateMl = useCallback(() => {
    const mgValue = parseFloat(mg);
    if (!isNaN(mgValue) && selectedSubstance.density > 0) {
      const result = mgValue / selectedSubstance.density;
      const mlResult = result.toFixed(3).replace(/\.?0+$/, '');
      setMl(mlResult);
      updateResultText(mlResult, mg, selectedSubstance);
    } else {
      setMl('');
      setResultText('');
    }
  }, [mg, selectedSubstance]);

  useEffect(() => {
    if (lastChanged === 'ml') {
        calculateMg();
    } else {
        calculateMl();
    }
  }, [ml, mg, substanceKey, customDensity, lastChanged, calculateMg, calculateMl]);

  const handleMlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMl(e.target.value);
    setLastChanged('ml');
  };

  const handleMgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMg(e.target.value);
    setLastChanged('mg');
  };
  
  const handleSubstanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubstanceKey(e.target.value);
  };

  const handleCustomDensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDensity(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-2">Convert Milliliters (ml) to Milligrams (mg)</h2>
        <p className="text-center text-gray-600 mb-6">Enter your values below to convert instantly.</p>
      
        <div className="space-y-6">
            <div>
              <label htmlFor="substance" className="block text-sm font-medium text-gray-700 mb-1">Select Substance</label>
              <select 
                id="substance"
                value={substanceKey}
                onChange={handleSubstanceChange}
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm"
              >
                {Object.keys(SUBSTANCES).map(key => (
                  <option key={key} value={key}>{SUBSTANCES[key].name}</option>
                ))}
              </select>
            </div>

            {substanceKey === 'custom' && (
              <div>
                <label htmlFor="custom-density" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Density (mg/ml)
                </label>
                <input
                  type="number"
                  id="custom-density"
                  value={customDensity}
                  onChange={handleCustomDensityChange}
                  placeholder="e.g. 1000"
                  className="mt-1 block w-full p-3 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm"
                />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-2">
                <label htmlFor="ml" className="block text-sm font-medium text-gray-700 mb-1">Milliliters (ml)</label>
                <input
                  type="number"
                  id="ml"
                  value={ml}
                  onChange={handleMlChange}
                  placeholder="Enter ml"
                  aria-label="Milliliters"
                  className="w-full p-4 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                />
              </div>

              <div className="text-center text-2xl font-semibold text-primary transform transition-transform duration-300 hover:scale-110">
                &harr;
              </div>

              <div className="md:col-span-2">
                <label htmlFor="mg" className="block text-sm font-medium text-gray-700 mb-1">Milligrams (mg)</label>
                <input
                  type="number"
                  id="mg"
                  value={mg}
                  onChange={handleMgChange}
                  placeholder="Enter mg"
                  aria-label="Milligrams"
                  className="w-full p-4 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                />
              </div>
            </div>

            {resultText && (
                <div className="text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-lg">{resultText}</p>
                </div>
            )}
            
            <div className="text-center pt-2 text-sm text-gray-500 space-y-3">
                <p>The conversion is based on the formula: <code className="font-mono bg-gray-100 p-1 rounded">mg = ml * density</code>.</p>
                <p>Using a density of <span className="font-semibold text-secondary">{selectedSubstance.density} mg/ml</span> for <span className="font-semibold text-secondary">{selectedSubstance.name}</span>.</p>
            </div>
        </div>
    </div>
  );
};

export default MlToMgCalculator;
