//1. import multer
import multer from "multer";

//2. configure storage with filename and location.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =  Date.now() + '-' + Math.round(Math.random() * 1E9);
    //   console.log(uniqueSuffix);
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
 export const upload = multer({ storage: storage })
