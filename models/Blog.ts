// app\models\Blog.ts

import mongoose, { Document, Schema, Model, Date } from 'mongoose';

// IBlog interface
export interface IBlog {
    title: string;
    category: mongoose.Schema.Types.ObjectId; // Use ObjectId to reference Category
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

// Mongoose Document interface
interface IBlogDocument extends IBlog, Document {}

// Mongoose Schema
const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Reference to Category model
    description: { type: String, required: true },
    image: { type: String, required: true},
},
    {
        timestamps: true
    }
);

// Mongoose Model
const Blog: Model<IBlogDocument> = mongoose.models.Blog || mongoose.model<IBlogDocument>('Blog', BlogSchema);

export default Blog;
