import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema(
  {
    branch_code: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model('Branch', branchSchema);
export default Branch;
