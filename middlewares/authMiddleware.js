import JWT from "jsonwebtoken";

//protect routes
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.heafers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

//admin access
export const isAdmin = async(req,res,next ) => {
    try{
        const user = await usermodel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"UnAuthorized Access",
            });
        }else{
            next();
        }
    }
    catch(error){
        console.log(error);
        res.success(401).send({
            success:false,
            error,
            message:"Error in admin middleware",
        })
    }
};