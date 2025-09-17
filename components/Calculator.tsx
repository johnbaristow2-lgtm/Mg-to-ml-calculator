
import React, { useState, useEffect, useCallback } from 'react';
import { SUBSTANCES } from '../constants';
import type { Substance } from '../types';

const Calculator: React.FC = () => {
  const [mg, setMg] = useState<string>('1000');
  const [ml, setMl] = useState<string>('1');
  const [substanceKey, setSubstanceKey] = useState<string>('water');
  const [customDensity, setCustomDensity] = useState<string>('1000');
  const [lastChanged, setLastChanged] = useState<'mg' | 'ml'>('mg');

  const selectedSubstance: Substance = substanceKey === 'custom'
    ? { name: 'Custom Density', density: parseFloat(customDensity) || 0 }
    : SUBSTANCES[substanceKey];

  const calculateMl = useCallback(() => {
    const mgValue = parseFloat(mg);
    if (!isNaN(mgValue) && selectedSubstance.density > 0) {
      const result = mgValue / selectedSubstance.density;
      setMl(result.toFixed(3).replace(/\.?0+$/, ''));
    } else {
      setMl('');
    }
  }, [mg, selectedSubstance.density]);

  const calculateMg = useCallback(() => {
    const mlValue = parseFloat(ml);
    if (!isNaN(mlValue) && selectedSubstance.density > 0) {
      const result = mlValue * selectedSubstance.density;
      setMg(result.toFixed(3).replace(/\.?0+$/, ''));
    } else {
      setMg('');
    }
  }, [ml, selectedSubstance.density]);

  useEffect(() => {
    if (lastChanged === 'mg') {
      calculateMl();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mg, substanceKey, customDensity, lastChanged]);

  useEffect(() => {
    if (lastChanged === 'ml') {
      calculateMg();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ml, substanceKey, customDensity, lastChanged]);

  const handleMgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMg(e.target.value);
    setLastChanged('mg');
  };

  const handleMlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMl(e.target.value);
    setLastChanged('ml');
  };
  
  const handleSubstanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newKey = e.target.value;
    setSubstanceKey(newKey);
    // Recalculate based on last changed input
    if (lastChanged === 'mg') {
        calculateMl();
    } else {
        calculateMg();
    }
  };

  const handleCustomDensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDensity = e.target.value;
    setCustomDensity(newDensity);
     if (lastChanged === 'mg') {
        calculateMl();
    } else {
        calculateMg();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-2">Convert Milligrams (mg) to Milliliters (ml)</h2>
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
                <label htmlFor="mg" className="block text-sm font-medium text-gray-700 mb-1">Milligrams (mg)</label>
                <input
                  type="number"
                  id="mg"
                  value={mg}
                  onChange={handleMgChange}
                  placeholder="Enter mg"
                  className="w-full p-4 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                />
              </div>

              <div className="text-center text-2xl font-semibold text-primary">
                =
              </div>

              <div className="md:col-span-2">
                <label htmlFor="ml" className="block text-sm font-medium text-gray-700 mb-1">Milliliters (ml)</label>
                <input
                  type="number"
                  id="ml"
                  value={ml}
                  onChange={handleMlChange}
                  placeholder="Enter ml"
                  className="w-full p-4 text-lg border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
                />
              </div>
            </div>
            
            <div className="text-center pt-2 text-sm text-gray-500">
                <p>Based on a density of <span className="font-semibold text-secondary">{selectedSubstance.density} mg/ml</span> for <span className="font-semibold text-secondary">{selectedSubstance.name}</span>.</p>
                <p className="mt-2 italic">Disclaimer: This tool provides calculations for informational purposes only and should not be used for medical dosage. Always consult a professional.</p>
            </div>
        </div>
    </div>
  );
};

export default Calculator;
