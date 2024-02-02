import "dotenv/config";
import jwt from "jsonwebtoken";

const createAuthToken = async (res, req, next) => {
    try {
        const user = req.body;
        console.log(user);
        const token = jwt.sign(user.email, process.env.ACCESS_TOKEN, {
            expiresIn: "1h",
        });
        console.log((token));
        res.send({token});

    } catch (err) {
        // next(err);
        console.log(err)
    }
};

export default createAuthToken;
