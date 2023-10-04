import {
    stellarWeightClassTable,
    lowMassTable,
    intermediateMassTable,
    highMassTable,
    dwarfMassTable,
} from "./tables";

export class Star {
    readonly mass: number;

    constructor(mass?: number) {
        this.mass = (mass !== undefined) ? mass : stellarWeightClassTable.pick().pick();
    }

    isDwarf(): boolean {
        return this.mass <= 0.07;
    }

    isLowMass(): boolean {
        return 0.08 <= this.mass && this.mass < 0.70;
    }

    isIntermediateMass(): boolean {
        return 0.70 <= this.mass && this.mass < 1.28;
    }

    isHighMass(): boolean {
        return 1.28 <= this.mass;
    }

    static brownDwarf(): Star {
        return new Star(dwarfMassTable.pick());
    }

    static lowMassStar(): Star {
        return new Star(lowMassTable.pick());
    }

    static intermediateMassStar(): Star {
        return new Star(intermediateMassTable.pick());
    }

    static highMassStar(): Star {
        return new Star(highMassTable.pick());
    }
}
