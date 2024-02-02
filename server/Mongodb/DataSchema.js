import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  text: String
});

export default mongoose.model('Data', dataSchema);
