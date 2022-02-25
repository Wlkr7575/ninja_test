import mongoose from 'mongoose'

interface order {
    userId:String,
    orderproducts:[{productId:string,quantity:number}],
    orderedAt:Date
    status:string
}

const Orders = new mongoose.Schema<order>({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    orderproducts:[{
        productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
        quantity:{type:Number,require:true,default:1},
    }],
    orderedAt:{type:Date,default:new Date()},
    status:{type:String,default:'Waiting'}
})

export default mongoose.model<order>('Orders',Orders)