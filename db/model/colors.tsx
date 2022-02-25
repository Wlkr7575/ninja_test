import mongoose from 'mongoose'

interface Color {
    name:string
}

const color = new mongoose.Schema<Color>({
    name:{type:String,require:true},
})
export default mongoose.model<Color>('color',color)