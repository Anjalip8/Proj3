const express = require('express');
const router = express.Router();
const {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    login,
    checkUserExists

} = require('../controllers/userController')


router.post('/users', createUser);
// router.get('/users',getUser);
// router.delete('/users',deleteUser);
router.put('/updateUser',updateUser);
router.get('/login',login);
router.post('/checkUserExists',checkUserExists);

module.exports = router;