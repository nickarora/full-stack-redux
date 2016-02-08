import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
  note: { type: String },
  completed: { type: Boolean },
  created_at: { type: Date }
});

export default mongoose.model('Todo', TodoSchema);