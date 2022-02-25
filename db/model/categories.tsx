import mongoose from 'mongoose'

interface Category {
    name :string
}

const Categories = new mongoose.Schema<Category>({
    name:{type:String,required:true}
})

export default mongoose.model<Category>('Categories',Categories)