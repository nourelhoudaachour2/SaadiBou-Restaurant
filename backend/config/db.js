import mongoose from 'mongoose';

export const connectDB = async ()=>{
 mongoose.connect('mongodb+srv://mradamine432:0ASgrepUfWeGaE2P@cluster0.clb0hfo.mongodb.net/food-del').then(()=> console.log('DB Connected'));
}
