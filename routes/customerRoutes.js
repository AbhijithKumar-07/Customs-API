import express from "express";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomersWithBranches,
  getBranchCountForCustomer,
  getCustomersWithBranchCounts,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomersWithBranches);
router.get('/branch-counts', getCustomersWithBranchCounts);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.get('/:id/branch-count', getBranchCountForCustomer);

export default router;
