// api/blog.ts

import connectMongo from '../../lib/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';
import Blog from '../../models/Blog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
  
    if (req.method === 'POST') {
      const { title, category, description, image} = req.body;
      try {
        const blog = await Blog.create({ title , category, description, image});
        
        res.status(201).json(blog);
  
      } catch (error) {
        res.status(500).json({ error: 'Blog eklenemedi' });
      }
    } else if (req.method === 'GET') {
      try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: 'Bloglar alınamadı' });
      }
    } else if(req.method==='DELETE'){

      const {blogId} = req.body;
      try{
        const deleteBlog = await Blog.findByIdAndDelete(blogId);
        if(!deleteBlog){
          return res.status(404).json({error: 'Silinecek blog bulunamadı!'});
        }
        res.status(200).json({message: 'Blog başarıyla silindi.'})
      }catch(error){
        res.status(500).json({error: 'Blog silinemedi!'})
      }
    }
    else {
      res.status(405).json({ error: 'Yalnızca POST ve GET istekleri kabul edilir' });
    }
  }



// Uncomment to run the example usage
// exampleUsage();
