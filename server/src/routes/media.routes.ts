import {
  uploadMediaController,
  UpdateMediaController,
  getMediaMetadataByIdController,
} from '@controllers/media.controllers';

import {
  validateUploadedMedia,
  validateUpdateMedia,
  validateMediaId
} from '@utils/validators/media.validator';
import { handleValidationErrors } from '@middlewares/validation.middleware';

import express from 'express';
import { authenticateUser } from '@middlewares/auth.middleware';
import { authorizeRoles } from '@middlewares/role.middleware';
import checkHeader from '@middlewares/checkHeader.middleware';

const router = express.Router();


router.post(
  '/upload',
  authenticateUser,
  authorizeRoles('PLANNER', 'DEVELOPER'),
  validateUploadedMedia,
  handleValidationErrors,
  uploadMediaController
);


router.put(
  '/update',
  checkHeader,
  validateUpdateMedia,
  handleValidationErrors,
  UpdateMediaController
)

router.get(
  '/:mediaId',
  authenticateUser,
  authorizeRoles('PLANNER', 'DEVELOPER'),
  validateMediaId,
  handleValidationErrors,
  getMediaMetadataByIdController);

export const mediaRoutes = router;
