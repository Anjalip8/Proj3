const User = require('../models/userModel');
const createUser = async(req,res)=>{
    try{
        const userData = req.body;
        const newUser = new User(userData);
        // console.log(userData);
        // console.log(newUser);
        await newUser.save();
        res.status(201).json({
            status:"success",
            message:"user created successfully",
            user:newUser
        });


    }catch(error){
        res.status(500).json({
            status:'failed',
            message:error.message
        
        });

    }
}
const checkUserExists = async(req,res)=>{
    try{
        const { employeeId } = req.body;
        const user = await User.findOne({ employeeId });
        if (user) {
            return res.status(200).json({ message: 'User exists', user });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
        

    }catch(err){
        return res.status(500).json({ message: 'Server error' });
    }
}
const updateUser = async (req, res) => {
    try {
        const { employeeId, ...updateData } = req.body;
        const user = await User.findOneAndUpdate({ employeeId }, updateData, { new: true });
        if (user) {
            return res.status(200).json({ message: 'User updated', user });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        let user = await User.findOne({ userName });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
    }
    catch(err){
        res.status(500).json({ message: 'Server error' });
    }
}
const deleteUser = async()=>{
    try{

    }catch(error){

    }
}
const getUser = async()=>{
    try{

    }catch(error){

    }
}
module.exports= {
    createUser,
    updateUser,
    login,
    checkUserExists
    // deleteUser,
    // getUser,
    
}