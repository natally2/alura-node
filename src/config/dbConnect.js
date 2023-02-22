import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:alura123@cluster0.6ovoixc.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;