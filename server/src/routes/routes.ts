import express from 'express';
import { userRoutes } from './user.routes';
import { documentRoutes } from './document.routes';
import { coordinateRoutes } from './coordinate.routes';
import { mediaRoutes } from './media.routes';
import { graphRoutes } from './graph.routes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/documents', documentRoutes);
router.use('/coordinates', coordinateRoutes);
router.use('/media', mediaRoutes);
router.use('/graph', graphRoutes);

export default router;
