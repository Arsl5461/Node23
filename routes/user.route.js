const express=require("express")
const router=express.Router();
const controller=require("../controllers/user.controller.js")

router.post("/",controller.store)
router.post("/login",controller.login)
router.get("/",controller.index)
router.get("/:id",controller.get)
router.delete("/:id",controller.destroy)
router.put("/:id",controller.update)


module.exports=router;