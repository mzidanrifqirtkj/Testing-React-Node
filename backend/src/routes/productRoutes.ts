import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', ProductController.index);

// POST /api/products - Create new product
router.post('/', ProductController.store);

// GET /api/products/:id - Get single product
router.get('/:id', ProductController.show);

// PUT /api/products/:id - Update product
router.put('/:id', ProductController.update);

// DELETE /api/products/:id - Delete product
router.delete('/:id', ProductController.destroy);

export default router;
