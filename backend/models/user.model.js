import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String, required: false },
    friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    enemies: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

export const User = mongoose.model('User', userSchema);
