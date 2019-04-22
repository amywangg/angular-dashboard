import mongoose from 'mongoose';
import Cause from '../models/cause';
// create new cause
export function addFile(req, res) {
  const file = new File({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    path: req.body.name,
    application: req.body.name,
    server: req.body.name,
    updated_date: Date,
  });
  return cause
    .save()
    .then((newCause) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        Cause: newCause,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}  