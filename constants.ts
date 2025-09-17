import { Substance } from './types';

export const SUBSTANCES: Record<string, Substance> = {
  water: { name: 'Water', density: 1000 },
  milk: { name: 'Milk', density: 1030 },
  olive_oil: { name: 'Olive Oil', density: 918 },
  honey: { name: 'Honey', density: 1420 },
  flour: { name: 'Flour (All-Purpose)', density: 528 },
  sugar: { name: 'Sugar (Granulated)', density: 845 },
  salt: { name: 'Salt (Table)', density: 1217 },
  butter: { name: 'Butter', density: 911 },
  cocoa_powder: { name: 'Cocoa Powder', density: 577 },
  custom: { name: 'Custom Density', density: 1000 }, // Default custom to water's density
};
