import { User, Auth } from "../models/index.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// login service code
export const loginService = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Auth.findOne({ email });

        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid credentials" });

        if (process.env.DEBUG)
            console.log(`${JSON.stringify(existingUser)} from login service`);
        // generate token
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id, role: existingUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            result: {
                email: existingUser.email,
                id: existingUser._id,
            }, token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// register service code

export const registerService = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await Auth.findOne({ email });

        if (existingUser)
            return res.status(400).json({ message: "User already exists" });

        if (password !== confirmPassword)
            return res.status(400).json({ message: "Passwords don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name: `${firstName} ${lastName}`,
            email,
            role: "customer",
        });


        const result = await Auth.create({
            userId: user._id,
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const token = jwt.sign(
            { email: result.email, id: result._id, role: result.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            result: {
                email: result.email,
                id: result._id,
            }, token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
