import mongoose from 'mongoose';
import dbConnection from './db_connection';

mongoose.connect(dbConnection);

const TodoSchema = mongoose.Schema({
  note: { type: String },
  completed: { type: Boolean },
  created_at: { type: Date }
});

export default mongoose.model('Todo', TodoSchema);