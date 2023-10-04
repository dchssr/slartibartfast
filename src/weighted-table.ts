type WeightedOutcome<T> = { weight: number, outcome: T };

export default class WeightedTable<T> {
    private probs: WeightedOutcome<T>[];
    private alias: (T | null)[];

    // See also: https://www.keithschwarz.com/darts-dice-coins/
    // Implementing the alternative Vose alias method to account
    // for JavaScript's numbers being IEEE-754, which may throw
    // off the original algorithm.
    constructor(outcomes: WeightedOutcome<T>[]) {
        const LENGTH = outcomes.length;

        // These two lists store *indexes* of outcomes, not the values themselves.
        let smalls: number[] = new Array();
        let larges: number[] = new Array();

        this.probs = new Array(LENGTH);
        this.alias = new Array(LENGTH);

        let adjustedOutcomes = outcomes.map((wo, idx) => {
            wo.weight *= LENGTH;
            (wo.weight < 1.00 ? smalls : larges).push(idx);
            return wo;
        });

        while (smalls.length > 0 && larges.length > 0) {
            let l = smalls.pop() as number, g = larges.pop() as number;
            this.probs[l] = adjustedOutcomes[l];
            this.alias[l] = adjustedOutcomes[g].outcome;

            adjustedOutcomes[g].weight =
                (adjustedOutcomes[g].weight + adjustedOutcomes[l].weight) - 1;

            (adjustedOutcomes[g].weight < 1.00 ? smalls : larges).push(g);
        }

        while (larges.length > 0) {
            let g = larges.pop() as number;
            this.probs[g] = adjustedOutcomes[g];
            this.probs[g].weight = 1.00;
        }

        while (smalls.length > 0) {
            let l = smalls.pop() as number;
            this.probs[l] = adjustedOutcomes[l];
            this.probs[l].weight = 1.00;
        }
    }

    pick(): T {
        let col = Math.floor(Math.random() * this.probs.length);
        let sel = this.probs[col];
        return (Math.random() < sel.weight) ? sel.outcome : this.alias[col] as T;
    }
};
