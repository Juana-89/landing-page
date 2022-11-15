import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>{
  return res.json({
    msg: "Hello, daddy, hello, mom Im your ch-ch-ch-cherry bomb"
    })
})
export default router