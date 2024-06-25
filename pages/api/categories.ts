// pages/api/categories.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/lib/connectDb';
import Category from '@/models/Category';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();

  if (req.method === 'POST') {
    const { title } = req.body;
    try {
      const category = await Category.create({ title });

      res.status(201).json(category);

    } catch (error) {
      res.status(500).json({ error: 'Kategori eklenemedi' });
    }
  } else if (req.method === 'GET') {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Kategoriler alınamadı' });
    }
  }else if (req.method === 'DELETE') {
    const { categoryId } = req.body;
    try {
      const deleteCategory = await Category.findByIdAndDelete(categoryId);
      if (!deleteCategory) {
        return res.status(404).json({ error: 'Silinecek kategori bulunamadı' });
      }
      res.status(200).json({ message: 'Kategori başarıyla silindi' });
    } catch (error) {
      res.status(500).json({ error: 'Kategori silinemedi' });
    }
  }
  else {
    res.status(405).json({ error: 'Yalnızca POST ve GET istekleri kabul edilir' });
  }
}