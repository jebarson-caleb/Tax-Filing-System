import { Request, Response } from 'express';
import TaxController from '../../src/controllers/taxController';

describe('TaxController', () => {
    let taxController: TaxController;

    beforeEach(() => {
        taxController = new TaxController();
    });

    describe('calculateTax', () => {
        it('should calculate tax correctly for valid income', () => {
            const req = { body: { income: 50000 } } as Request;
            const res = { json: jest.fn() } as unknown as Response;

            taxController.calculateTax(req, res);

            expect(res.json).toHaveBeenCalledWith({ tax: expect.any(Number) });
        });

        it('should return an error for invalid income', () => {
            const req = { body: { income: -1000 } } as Request;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

            taxController.calculateTax(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Invalid income' });
        });
    });

    describe('fileTax', () => {
        it('should file tax successfully for valid data', () => {
            const req = { body: { income: 50000, deductions: 5000 } } as Request;
            const res = { json: jest.fn() } as unknown as Response;

            taxController.fileTax(req, res);

            expect(res.json).toHaveBeenCalledWith({ message: 'Tax filed successfully' });
        });

        it('should return an error for missing data', () => {
            const req = { body: {} } as Request;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

            taxController.fileTax(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Missing required fields' });
        });
    });
});