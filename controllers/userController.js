const User = require('../Api/userApi');

const createUser = async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    try {
        const newUser = new User({ firstName, lastName, email, favoriteColor, birthday });
        await newUser.save();
        res.status(201).json(newUser);
        console.log('User Data entered')
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
        console.log('Users Retrieved');
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

module.exports = {
    createUser,
    getUsers
}
