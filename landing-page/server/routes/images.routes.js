import { Router } from "express";

const router = Router();

//donde se guarda la imagen
router.post('/api/images', async(req, res) => {
   console.log(req.files)
   return res.json("recibidooooo")
})

router.get('/images', async (req,res) => {})

export default router