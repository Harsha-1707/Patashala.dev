import { Router } from 'express';
import { ContactController } from '../../controllers/contact.controller.js';

const router = Router();

router.post('/', ContactController.submitContact);

export default router;
