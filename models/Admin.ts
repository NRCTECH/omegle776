
import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin {
    username: string;
    email: string;
    password: string;
}

// Mongoose Document interface
interface IAdminDocument extends IAdmin, Document {}

// Mongoose Schema
const AdminSchema: Schema = new Schema({

    username: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
});

// Mongoose Model
const Admin =mongoose.models.Admin || mongoose.model<IAdminDocument>('Admin', AdminSchema);

export default Admin;
