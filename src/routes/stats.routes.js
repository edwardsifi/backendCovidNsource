import {Router} from 'express';
import * as statsCtrl from '../controllers/stats.controller';
import {authJwt} from '../middlewares';

const router = Router();


router.get('/', [authJwt.verifyToken], statsCtrl.getStats);
router.get('/:country', [authJwt.verifyToken], statsCtrl.getStatByCountry);
router.get('/countries/:continent', [authJwt.verifyToken], statsCtrl.getCountriesByContinent);

export default router;
