import path from 'path'
import multer from 'multer'
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public')
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + '_'+ Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage:storage})
export default upload