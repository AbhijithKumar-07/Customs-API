import express from 'express';
import {
  addBranch,
  getBranchesByCustomer,
  updateBranch,
  deleteBranch,
} from '../controllers/branchController.js';

const router = express.Router();

router.post('/', addBranch);
router.get('/', getBranchesByCustomer); // GET /branches?customerId=xyz
router.put('/:id', updateBranch);
router.delete('/:id', deleteBranch);

export default router;
