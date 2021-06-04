import express from 'express'
import multer from 'multer'
import path from 'path';
import HttpException from '../helpers/exceptions/HttpException';
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
  const fileTypes = /jpg|jpeg|png/
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimeType = fileTypes.test(file.mimetype)
  if(extName && mimeType)
    return cb(null, true)
  else
    return cb(new HttpException(400, 'Images only!'));
}

const upload = multer({
  storage,
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb)
  }
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router;
