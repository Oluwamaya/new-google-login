// const router = require("express").Router()
// const passport = require("passport")
// //  require("dotenv").config()

//  Client_URL = "http://localhost:2024"
 
//  router.get("/login/success", (req,res)=>{
//      if(req.user){
//          return  req.status(200).send({message:"google login successful",user:req.user,status:true})
//         }
//         return res.status(403).send({error:true, message:"Not Authorized"})
//     })
    
//     router.get("/login/failed", (req,res)=>{
//         return res.status(401).send({message:"Login Failure", error:true})
//     })


//     router.get("/google", passport.authenticate("google",{scope:["profile"]}))
//     router.get("/google/callback", passport.authenticate("google", {
//        successRedirect:Client_URL,
//        failureRedirect: "/login/failed"
//     }))




// router.get("/logout",(req,res)=>{
//     req.logout();
//     res.redirect(Client_URL)
// })

// module.exports = router

const router = require("express").Router();
const passport = require("passport");

const Client_URL = "http://localhost:2024";

router.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).send({
      message: "Google login successful",
      user: req.user,
      status: true,
    });
  }
  return res.status(403).send({ error: true, message: "Not Authorized" });
});

router.get("/login/failed", (req, res) => {
  return res.status(401).send({ message: "Login Failure", error: true });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: Client_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(Client_URL);
});

module.exports = router;
