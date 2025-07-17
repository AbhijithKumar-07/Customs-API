import Branch from '../models/Branch.js';

// @desc Add new branch for a customer
export const addBranch = async (req, res) => {
  try {
    const { branch_code, location, customerId } = req.body;

    const newBranch = await Branch.create({ branch_code, location, customerId });
    res.status(201).json(newBranch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get branches by customer ID
export const getBranchesByCustomer = async (req, res) => {
  try {
    const { customerId } = req.query;

    const branches = await Branch.find({ customerId });
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Update a branch
export const updateBranch = async (req, res) => {
  try {
    const updatedBranch = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBranch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete a branch
export const deleteBranch = async (req, res) => {
  try {
    await Branch.findByIdAndDelete(req.params.id);
    res.json({ message: 'Branch deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
