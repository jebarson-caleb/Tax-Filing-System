import { TaxService } from '../../../src/services/taxService';

describe('TaxService', () => {
    let taxService: TaxService;

    beforeEach(() => {
        taxService = new TaxService();
    });

    describe('computeTax', () => {
        it('should calculate tax correctly for given income', () => {
            const income = 50000;
            const expectedTax = 7500; // Example expected tax calculation
            const tax = taxService.computeTax(income);
            expect(tax).toBe(expectedTax);
        });

        it('should return 0 tax for income below taxable threshold', () => {
            const income = 20000;
            const expectedTax = 0;
            const tax = taxService.computeTax(income);
            expect(tax).toBe(expectedTax);
        });
    });

    describe('validateTaxData', () => {
        it('should return true for valid tax data', () => {
            const validData = { income: 50000, deductions: 5000 };
            const isValid = taxService.validateTaxData(validData);
            expect(isValid).toBe(true);
        });

        it('should return false for invalid tax data', () => {
            const invalidData = { income: -1000, deductions: 5000 };
            const isValid = taxService.validateTaxData(invalidData);
            expect(isValid).toBe(false);
        });
    });
});