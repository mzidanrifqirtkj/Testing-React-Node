import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

class ProductController {
  // GET /api/products - Get all products
  async index(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // POST /api/products - Create new product
  async store(req: Request, res: Response): Promise<void> {
    try {
      const { name, price, description } = req.body;

      const product = await Product.create({
        name,
        price,
        description,
      });

      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Failed to create product',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // GET /api/products/:id - Get single product
  async show(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        res.status(404).json({
          success: false,
          message: 'Product not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // PUT /api/products/:id - Update product
  async update(req: Request, res: Response): Promise<void> {
    try {
      const { name, price, description } = req.body;

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, description },
        { new: true, runValidators: true }
      );

      if (!product) {
        res.status(404).json({
          success: false,
          message: 'Product not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Failed to update product',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // DELETE /api/products/:id - Delete product
  async destroy(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        res.status(404).json({
          success: false,
          message: 'Product not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}

export default new ProductController();
