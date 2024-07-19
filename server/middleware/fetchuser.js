const JWT_SECRET = 'NAYANKADAM';
const jwt = require('jsonwebtoken');
const fetchuser =(req,res,next)=>{
    //fetch the user
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({error:"access denied"})
    }
    try {
        const data  = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
         next();
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
   

}
module.exports  = fetchuser