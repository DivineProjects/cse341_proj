

// home route
const home = (req, res) =>{
    res.send('Welcome home');
};

//login page router
const login=(req,res) =>{
    res.send('This is the LOGIN PAGE');
};

//logout page router
const logout=(req,res) =>{
    res.send('This is the LOGOUT PAGE');
};

// 
module.exports = {
    home,
    login,
    logout
};

