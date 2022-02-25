import  mongoose from 'mongoose'
interface brands {
    name:string,
    logo:string,
    detail:string
}
const brand = new mongoose.Schema<brands>({
    name:{type:String,require:true},
    logo:{type:String,require:true},
    detail:{type:String,require:true}
})
export default mongoose.model<brands>('Brand',brand)