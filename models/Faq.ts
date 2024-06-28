import mongoose, { Model, Schema } from "mongoose";


interface IFaq extends Document {
    question: string;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
    blogId?: mongoose.Types.ObjectId;
  }
  
  const FaqSchema: Schema<IFaq> = new Schema(
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
      blogId: { type: mongoose.Types.ObjectId, ref: 'Blog',required:false },
    },
    { timestamps: true }
  );
  
  const Faq: Model<IFaq> = mongoose.models.Faq || mongoose.model<IFaq>('Faq', FaqSchema);
  
  export default Faq;
  export type { IFaq };