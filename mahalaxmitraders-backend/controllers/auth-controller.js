import {loginService, registerService} from '../services/auth-service.js';

// login controller code

export const loginController = async (req, res) => {
    try {
        return await loginService(req, res);
    } catch (error) {
        res.status(409)
            .json({message: error.message});
    }
}

// register controller code

export const registerController = async (req, res) => {
    try {
        return await registerService(req, res);
    } catch (error) {
        res.status(409)
            .json({message: error.message});
    }
}