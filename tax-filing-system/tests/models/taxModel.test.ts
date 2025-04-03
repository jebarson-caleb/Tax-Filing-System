import { TaxModel } from '../../src/models/taxModel';

describe('TaxModel', () => {
    let taxModel: TaxModel;

    beforeEach(() => {
        taxModel = new TaxModel();
    });

    it('should correctly structure tax data', () => {
        const taxData = {
            income: 50000,
            deductions: 5000,
            filingStatus: 'single'
        };
        taxModel.saveTaxData(taxData);
        expect(taxModel.getTaxData()).toEqual(taxData);
    });

    it('should save tax data correctly', () => {
        const taxData = {
            income: 75000,
            deductions: 10000,
            filingStatus: 'married'
        };
        taxModel.saveTaxData(taxData);
        expect(taxModel.getTaxData()).toEqual(taxData);
    });
});