const LoginController = require('../controllers/login');

const router = require('express').Router();
router.route('/').post( LoginController.loginWithPassword );
router.route('/login_with_password').post( LoginController.loginWithPassword );
router.route('/login_with_signature').post( LoginController.loginWithSignature );

module.exports = router;