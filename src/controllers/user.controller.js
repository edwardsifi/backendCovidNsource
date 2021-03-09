import User from '../models/User';

export const getUsers = async (req, res) =>{
    const Users = await User.find();
    res.json(Users);
}

export const getUserById = async (req, res) =>{
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
}


export const deleteUserById = async (req, res) => {
    const id = req.params.userId;
    //se borra el usuario
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    res.status(204).json();
}