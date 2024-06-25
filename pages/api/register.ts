// api/blog.ts
import AdminModel, { IAdmin } from '../../models/Admin';
import connectMongo from '../../lib/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'
import Admin from '../../models/Admin';


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    await connectMongo();

    if(req.method === 'POST'){
        const {username,email, password} = req.body;
        try{
            const hashedPassword = await bcrypt.hash(password, 10)
            const admin = await Admin.create({username,email, password:hashedPassword});

            res.status(201).json(admin);

        }catch (error) {
            res.status(500).json({error: 'Admin eklenemedi.'})
        }
    }else if(req.method === 'GET'){
        try{
            const admins = await Admin.find({});
            res.status(500).json({error: 'Yalnızca POST ve GET istekleri kabul edilir'}); 
        }catch(error){
            res.status(500).json({ error: 'Adminler alınamadı' });
        }
    }else {
        res.status(405).json({ error: 'Yalnızca POST ve GET istekleri kabul edilir' });
      }

}