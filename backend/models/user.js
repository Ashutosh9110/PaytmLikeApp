// const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({

//     firstName: {
//         type : String,
//         required : true,
//         trim : true,
//         maxLength : 50
//     },
//     lastName: {
//         type : String,
//         required : true,
//         trim : true,
//         maxLength : 50
//     },
//     username : {
//         type: String,
//         required : true,
//         unique : true,
//         trim : true,
//         lowercase : true,
//         minLength : 3,
//         maxLength: 30
//     },
//     password : {
//         type : String,
//         required : true,
//         minLength : 6
//     }
// })




// const accountSchema = new mongoose.Schema({
//     userId : {
//         type : mongoose.Schema.Types.ObjectId, // this is the reference to our users table
//         ref : "User", // we use references to make sure that we can never put an entry in the balance table for someone that doesn't already exist in the user table..to enforce that we create references 
//         required : true
//     },
//     balance : {
//         type : Number,
//         required : true
//     }
// })



// const Account = mongoose.model('Account', accountSchema);
// const User = mongoose.model('User', userSchema);

// module.exports = {
// 	User,
//   Account,
// };