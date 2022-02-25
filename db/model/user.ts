import mongoose from 'mongoose'
interface user{
    email:String,
    password:string,
    name:String,
    proimg:String,
    location:String,
    isStaff:Boolean,
    myOrders:[String],
    myCart:[String],
    isActive:Boolean
}
const User = new mongoose.Schema<user>({
    email:{type:String,require:true,null:false},
    password:{type:String,require:true},
    name:{type:String,require:true},
    proimg:{type:String,require:true},
    location:{type:String,require:true},
    isStaff:{type:Boolean,require:true,default:false},
    myOrders:[{type:mongoose.Schema.Types.ObjectId,ref:'Orders'}],
    myCart :[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}],
    isActive:{type:Boolean,require:true,default:false}
})
export default mongoose.model<user>('User',User)