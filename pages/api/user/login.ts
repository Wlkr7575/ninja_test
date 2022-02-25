import {NextApiRequest,NextApiResponse} from 'next'
import handler from "../../../db/index";
import User from '../../../db/model/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
handler.post(async(req:NextApiRequest,res:NextApiResponse)=>{
    const {email,password} = req.body
    console.log(email)
    // const ys = await User.findById('620ce08ff1a378ec68ce7f31')
    // res.json(ys)
    // try {
        const useexist = await User.findOne({email})
        .populate({path:'myOrders',populate:{path:'orderproducts.productId',select:{name:1,price:1,image:{$arrayElemAt: [ "$images", 0 ]}}}})
        .select({email:1,name:1,password:1,myorders:1,proimg:1,myCart:1})
        if(!useexist)return res.status(400).json({message:`No user with this email:${email}`})
        const correctPassword = await bcrypt.compare(password,useexist.password)
        if(!correctPassword) return res.status(400).json({message:`Incorrect Password`})
        useexist.isActive = true
        useexist.save()
        const token  = jwt.sign({email:useexist.email,id:useexist._id},'test',{expiresIn:'12h'})
        res.json({message:'User Logged in Successfully',userData:useexist,token})
    // } catch (error) {
    //     res.json(error)
    // }
})
export default handler