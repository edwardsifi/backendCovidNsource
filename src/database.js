import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost/dbapicovid";
console.log(process.env.MONGODB_URI);
mongoose.connect(URI,{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify:false,
     useCreateIndex:true 
})
        .then(db => console.log("db connected"))
        .catch(error => console.log(error, "error to connect to db"))