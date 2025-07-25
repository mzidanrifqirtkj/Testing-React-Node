import express from 'express';
import productRoutes from './productRoutes';

const router = express.Router();

// Mount product routes
router.use('/products', productRoutes);

export default router;
