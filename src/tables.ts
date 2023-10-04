import WeightedTable from "./weighted-table";

// In solar units (M☉)
const dwarfMassTable = new WeightedTable<number>([
    { outcome: 0.015, weight: 0.10 },
    { outcome: 0.020, weight: 0.19 },
    { outcome: 0.030, weight: 0.16 },
    { outcome: 0.040, weight: 0.15 },
    { outcome: 0.050, weight: 0.14 },
    { outcome: 0.060, weight: 0.13 },
    { outcome: 0.070, weight: 0.13 },
]);

const lowMassTable = new WeightedTable<number>([
    { outcome: 0.08, weight: 0.13 },
    { outcome: 0.10, weight: 0.10 },
    { outcome: 0.12, weight: 0.11 },
    { outcome: 0.15, weight: 0.09 },
    { outcome: 0.18, weight: 0.09 },
    { outcome: 0.22, weight: 0.07 },
    { outcome: 0.26, weight: 0.06 },
    { outcome: 0.30, weight: 0.05 },
    { outcome: 0.34, weight: 0.04 },
    { outcome: 0.38, weight: 0.03 },
    { outcome: 0.42, weight: 0.03 },
    { outcome: 0.46, weight: 0.03 },
    { outcome: 0.50, weight: 0.03 },
    { outcome: 0.53, weight: 0.03 },
    { outcome: 0.56, weight: 0.03 },
    { outcome: 0.59, weight: 0.03 },
    { outcome: 0.62, weight: 0.02 },
    { outcome: 0.65, weight: 0.02 },
    { outcome: 0.68, weight: 0.01 },
]);

const intermediateMassTable = new WeightedTable<number>([
    { outcome: 0.70, weight: 0.07 },
    { outcome: 0.72, weight: 0.06 },
    { outcome: 0.74, weight: 0.06 },
    { outcome: 0.76, weight: 0.05 },
    { outcome: 0.78, weight: 0.05 },
    { outcome: 0.80, weight: 0.05 },
    { outcome: 0.82, weight: 0.05 },
    { outcome: 0.84, weight: 0.04 },
    { outcome: 0.86, weight: 0.04 },
    { outcome: 0.88, weight: 0.04 },
    { outcome: 0.90, weight: 0.04 },
    { outcome: 0.92, weight: 0.04 },
    { outcome: 0.94, weight: 0.03 },
    { outcome: 0.96, weight: 0.03 },
    { outcome: 0.98, weight: 0.03 },
    { outcome: 1.00, weight: 0.03 },
    { outcome: 1.02, weight: 0.03 },
    { outcome: 1.04, weight: 0.04 },
    { outcome: 1.07, weight: 0.04 },
    { outcome: 1.10, weight: 0.03 },
    { outcome: 1.13, weight: 0.04 },
    { outcome: 1.16, weight: 0.03 },
    { outcome: 1.19, weight: 0.03 },
    { outcome: 1.22, weight: 0.02 },
    { outcome: 1.25, weight: 0.03 },
]);

const highMassTable = new WeightedTable<number>([
    { outcome: 1.28, weight: 0.06 },
    { outcome: 1.31, weight: 0.06 },
    { outcome: 1.34, weight: 0.06 },
    { outcome: 1.37, weight: 0.05 },
    { outcome: 1.40, weight: 0.07 },
    { outcome: 1.44, weight: 0.06 },
    { outcome: 1.48, weight: 0.07 },
    { outcome: 1.53, weight: 0.07 },
    { outcome: 1.58, weight: 0.08 },
    { outcome: 1.64, weight: 0.07 },
    { outcome: 1.70, weight: 0.06 },
    { outcome: 1.76, weight: 0.06 },
    { outcome: 1.82, weight: 0.07 },
    { outcome: 1.90, weight: 0.09 },
    { outcome: 2.00, weight: 0.07 },
]);

const stellarWeightClassTable = new WeightedTable<WeightedTable<number>>([
    { outcome: dwarfMassTable, weight: 0.03 },
    { outcome: lowMassTable, weight: 0.79 },
    { outcome: intermediateMassTable, weight: 0.13 },
    { outcome: highMassTable, weight: 0.05 },
])

export {
    dwarfMassTable,
    lowMassTable,
    intermediateMassTable,
    highMassTable,
    stellarWeightClassTable,
};
