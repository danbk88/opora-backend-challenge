import { Router } from 'express';
import driversRoutes from './drivers.routes';
import * as express from 'express';
import * as path from 'path';

const router = Router();

// Health check:
router.get('/health', function (req, res) {
  const health = {
    ok: true,
    message: 'Healthy'
  }
  res.json(health);
  res.end();
});

// Drivers Routes:
router.use('/drivers/', driversRoutes);

if (process.env.NODE_ENV != "production") {
  router.use('/docs/', express.static(path.resolve(__dirname, '../../../webApidoc')));
}

export default router;