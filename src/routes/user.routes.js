import {Router} from 'express';
import * as userCtrl from '../controllers/user.controller';
import {authJwt} from '../middlewares';

const router = Router();


router.get('/users', [authJwt.verifyToken], userCtrl.getUsers);
router.delete('/users', [authJwt.verifyToken], userCtrl.deleteUserById);

export default router;
