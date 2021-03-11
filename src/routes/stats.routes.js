import {Router} from 'express';
import * as statsCtrl from '../controllers/stats.controller';
import {authJwt} from '../middlewares';

const router = Router();


router.get('/', [authJwt.verifyToken], statsCtrl.getStats);
router.get('/country/:id', [authJwt.verifyToken], statsCtrl.getStatById);
router.get('/:country', [authJwt.verifyToken], statsCtrl.getStatByCountry);
router.get('/countries/:continent', [authJwt.verifyToken], statsCtrl.getCountriesByContinent);
router.put('/:id', [authJwt.verifyToken], statsCtrl.updateById);

export default router;
