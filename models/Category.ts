// app\models\Category.ts

import mongoose, { Document, Schema, Model } from 'mongoose';

// ICategory interface
export interface ICategory {
    title: string;
}

// Mongoose Document interface
interface ICategoryDocument extends ICategory, Document {}

// Mongoose Schema
const CategorySchema: Schema = new Schema({
    title: { type: String, required: true }
});

// Mongoose Model
const CategoryModel: Model<ICategoryDocument> = mongoose.models.Category || mongoose.model<ICategoryDocument>('Category', CategorySchema);

export default CategoryModel;
