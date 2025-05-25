import { Router } from "express";
import { authorization, passportCall } from "../utils.js";

const router = Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/current',
    (req, res) => {
        passportCall('jwt'),
        authorization('user'),
        res.render('profile', {
            user: req.user
        })
    }
)

export default router