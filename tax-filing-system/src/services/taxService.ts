export class TaxService {
    computeTax(income: number): number {
        const taxRate = 0.2; // Example tax rate of 20%
        return income * taxRate;
    }

    validateTaxData(data: any): boolean {
        // Basic validation for tax data
        if (!data.income || typeof data.income !== 'number') {
            return false;
        }
        return true;
    }
}