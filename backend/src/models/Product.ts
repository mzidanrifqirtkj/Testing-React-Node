import mongoose, { Document, Schema } from 'mongoose';

// Interface untuk TypeScript (seperti contract di Laravel)
export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition (seperti migration di Laravel)
const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Product price must be positive'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true, // Otomatis menambahkan createdAt dan updatedAt
  }
);

// Export model
export default mongoose.model<IProduct>('Product', ProductSchema);
