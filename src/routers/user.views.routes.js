import { Router } from "express";
import { authorization, passportCall } from "../utils.js";

const router = Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/',
    (req, res) => {
        passportCall('current'),
        authorization('user'),
        res.render('profile', {
            user: req.user
        })
    }
)

router.get('/',
    (req, res) => {
        passportCall('current'),
        authorization('admin'),
        res.render('profile', {
            user: req.user
        })
    }
)

export default router