const User = require("../models/User");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    const data = req.body;
    const oldUser = await User.findOne({ email: data.email });

    if (data) {
        if (oldUser) {
            return res
                .status(400)
                .json({
                    success: false,
                    status: "Хэрэглэгч аль хэдийн үүссэн байна. Нэвтэрч орно уу.",
                });
        }
    
        var hashedPassword = await bcrypt.hash(data.password, 10);
    
        data.password = hashedPassword;
        data.role == 0 ? data.role_id = 1 : data.role_id = data.role;
        data.created_date = Date("Y-m-d");
        data.last_activity = Date("Y-m-d h:m:s");
    
        User.create(data)
            .then((data) => {
                email = data.email;
                const token = jwt.sign(
                    {
                        user_id: data._id,
                        email
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                res.status(200).json({
                    success: true,
                    data: data,
                    token: token
                });
                return;
            })
            .catch(next);
    }
    else {
        return res.json({
            error: "The input field is empty",
        });
    }   
}








module.exports = {
    register
}