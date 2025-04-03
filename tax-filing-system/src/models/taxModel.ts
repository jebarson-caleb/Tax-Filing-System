class TaxModel {
    constructor(public income: number, public deductions: number, public taxRate: number) {}

    calculateTax(): number {
        const taxableIncome = this.income - this.deductions;
        return taxableIncome > 0 ? taxableIncome * this.taxRate : 0;
    }

    saveTaxData(data: any): void {
        // Logic to save tax data to a database
    }
}

export default TaxModel;