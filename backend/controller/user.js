// const express = require("express")
// const router = express.Router(  )
// const zod = require("zod")
// const User = require("../models/user")
// const JWT_SECRET = require("../config")

// const userSignUp = zod.object({

//     firstName: zod.string(), 
//     lastName: zod.string(), 
//     username: zod.string().email(), 
//     password: zod.string() 
// })

//     router.post("/signup", async ( req, res ) => {

//         const { success } = userSignUp.safeParse(req.body)
//         if (!success) {
//             return res.status(411).json({ message : "Email already taken / Incorrect inputs"})
//         }
//         const existingUser = await User.findOne({ username: req.body.username})
//         if (existingUser) {
//             return res.status(411).json({ message : "Email already exists"})
//         }
 
//         let token = jwt.sign({
//             userId: existingUser._id
//         }, JWT_SECRET)
//         return res.status(200).json({ msg : "User created succesfully", token })
// })


// const userLogin = zod.object({
//     username : zod.string().email(),
//     password: zod.string()
// })

//     router.post("/login", async (req, res) => {
//         const {success} = userLogin.safeParse(req.body)
//         if(!success) {
//             return res.status(411).json({ message : "Invalid Credentials"})
//         }


//     const user = await User.findOne({ userName, password })
//     if(user) {
//         const token = jwt.sign({ userId : user._id }, JWT_SECRET)
//     }
//     return res.status(200).json({ token })
//     })

//     res.status(411).json({
//         message: "Error while logging in"
//     })

// const editUser = async (req, res) => {
//     console.log("hellooo")
// }

// module.exports = { userSignUp, userLogin, editUser }
