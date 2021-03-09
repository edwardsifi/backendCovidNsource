import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

//aqui se define el schema del usuario con mongoose para despues crearlo en mongodb
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

//se crea una funcion atraves del userschema por medio de statics 
//para encryptar la contraseña 
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
//se crea funcion flecha para comparar la contraseña que envia el usuario
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}



export default model("User", userSchema);