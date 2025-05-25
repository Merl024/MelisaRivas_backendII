import { Router } from "express";
import { authorization, passportCall } from "../utils.js";
import { userModel } from "../models/user.model.js";
import { cartModel } from "../models/cart.model.js";

const router = Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

// Ruta para usuarios normales: solo ven sus datos
router.get('/',
    passportCall('current'),
    authorization('user'),
    (req, res) => {
        res.render('profile', {
            user: req.user
        })
    }
)

// Ruta para admins: ven todos los productos de todos los carritos
router.get('/admin',
    passportCall('current'),
    authorization('admin'),
    async (req, res) => {
        // Buscar todos los usuarios y poblar sus carritos y productos
        const users = await userModel.find().populate({
            path: 'cart',
            populate: {
                path: 'products.product',
                model: 'productos'
            }
        }).lean();

        // Extraer todos los productos de todos los carritos de todos los usuarios
        let allProducts = [];
        users.forEach(user => {
            if (user.cart && user.cart.length > 0) {
                user.cart.forEach(cart => {
                    if (cart.products) {
                        allProducts = allProducts.concat(cart.products);
                    }
                });
            }
        });

        res.render('profile', {
            user: req.user,
            allProducts,
            isAdmin: true
        });
    }
)

export default router