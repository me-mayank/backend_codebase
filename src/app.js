import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { use } from "react";
//importing liberaries of js 

const app = express();

// now configuring cors 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// accpeting json request but limiting it since we can't crash the server 
app.use(express({
    limit: "20kb"
}))

// now if we get the data in the form of url then we need to tell express that 
// this can also happen so samjhna ess baat ko and then to encode that url so as to fetch data from it
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// now if we get some images and want to save some files and images to our server only for that 
app.use(express.static("public"));

// now for accessing users browser cookies and setting them when required we use cookieParser
app.use(cookieParser());

export {app}