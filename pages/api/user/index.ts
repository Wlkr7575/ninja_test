import User from '../../../db/model/user'
import upload from '../../../db/lib/upload'
import handler  from '../../../db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const config = {
    api:{
        bodyParser:false
    }
}
handler.post(upload.single('proimg'),async(req,res)=>{
    const {email,password,name,isStaff} = req.body
    const proimg = req.file?.originalname
    try {
        const useexist = await User.findOne({email})
        if(useexist) return res.status(400).json({message:'User is already exist'})
        const hashPassword = await bcrypt.hash(password,12)
        const newUser = await User.create({email:email,password:hashPassword,name:name,proimg:proimg,isStaff:isStaff?true:false})
        const token = jwt.sign({email:newUser.email,id:newUser._id},'test',{expiresIn:"12h"})
        // const newUser = await User({...user,proimg:proimg})
        // newUser.save()
        res.status(200).json({message:'user create successfully',user:newUser,token})
    } catch (error) {
        res.json(error)
    }
})
handler.get(async(req,res)=>{
    console.log(req)
})
export default handler  