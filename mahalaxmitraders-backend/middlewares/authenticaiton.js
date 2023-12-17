import jwt from "jsonwebtoken";

// middleware for authentication of user
export const authenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// middleware for authorization of admin

export const adminAuthorizationMiddleware = (req, res, next) => {
    try{
        if (req.user.role !== "admin") return res.status(401).json({ message: "Unauthorized" });
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}