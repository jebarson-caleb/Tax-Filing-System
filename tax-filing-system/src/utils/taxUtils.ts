export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export function calculateDeductions(income: number): number {
    const standardDeduction = 12550; // Example standard deduction for single filers in 2021
    return income > standardDeduction ? standardDeduction : income;
}