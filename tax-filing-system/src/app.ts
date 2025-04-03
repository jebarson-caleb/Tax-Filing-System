import express from 'express';
import { setTaxRoutes } from './routes/taxRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
setTaxRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});