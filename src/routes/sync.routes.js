import {Router} from 'express';
import * as syncCtrl from '../controllers/sync.controller';
import {authJwt} from '../middlewares';

const router = Router();

router.get('/', [authJwt.verifyToken], syncCtrl.createSync);

export default router;
