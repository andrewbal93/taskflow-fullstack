import { Router } from "express";

const router = Router();

router.post('/register', (req, res) => {
    res.json({ 
        message: 'Register endpoint hit',
        data: req.body
    });
});

router.post('/login', (req, res) => {
    res.json({ 
        message: 'Login endpoint hit',
    });
});

export const authRouter = router;