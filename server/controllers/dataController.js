import Data from '../Mongodb/DataSchema.js';
import { incrementCount, getCount } from '../Helpers/dataHelper.js';

export const addData = async (req, res) => {
  try {
    // Clear existing data
    await Data.deleteMany();
    incrementCount()
    // Add new data
    const newData = new Data(req.body);
    await newData.save();

    res.json({ message: 'Data added successfully',text:req.body.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateData = async (req, res) => {
  try {
    // Update existing data
    const newData = req.body;
    await Data.deleteMany();
    const updatedData = new Data(newData);
    await updatedData.save();
    incrementCount();
    res.json({ message: 'Data updated successfully' ,text:req.body.text});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
