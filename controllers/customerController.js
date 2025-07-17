import Branch from '../models/Branch.js';
import Customer from '../models/Customer.js';

export const createCustomer = async (req, res) => {
  try {
    const { name, email, gstin } = req.body;
    const customer = new Customer({ name, email, gstin });
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCustomersWithBranches = async (req, res) => {
  try {
    const customers = await Customer.find().lean();
    const Branch = (await import('../models/Branch.js')).default;

    const customersWithBranches = await Promise.all(
      customers.map(async (customer) => {
        const branches = await Branch.find({ customerId: customer._id });
        return { ...customer, branches };
      })
    );

    res.json(customersWithBranches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ✅ GET /customers/:id/branch-count
export const getBranchCountForCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const count = await Branch.countDocuments({ customerId: id });

    res.status(200).json({
      customerId: id,
      branchCount: count
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to count branches' });
  }
};



export const getCustomersWithBranchCounts = async (req, res) => {
  try {
    // Aggregate branch counts grouped by customerId
    const branchCounts = await Branch.aggregate([
      {
        $group: {
          _id: '$customerId',
          branchCount: { $sum: 1 }
        }
      }
    ]);

    // Map branchCounts to a dictionary for quick access
    const countsMap = {};
    branchCounts.forEach(item => {
      countsMap[item._id.toString()] = item.branchCount;
    });

    // Get all customers
    const customers = await Customer.find();

    // Combine customer info with their branch counts
    const result = customers.map(customer => ({
      customerId: customer._id,
      name: customer.name,
      branchCount: countsMap[customer._id.toString()] || 0
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
