import { Router } from 'express';
import TaxController from '../controllers/taxController';

const router = Router();
const taxController = new TaxController();

export function setTaxRoutes(app) {
    app.use('/api/tax', router);
    router.post('/calculate', taxController.calculateTax.bind(taxController));
    router.post('/file', taxController.fileTax.bind(taxController));
}