import mongoose from 'mongoose';

// Eventually replace with variable from a config file
mongoose.connect('mongodb://localhost/reduxApp');

const TodoSchema = mongoose.Schema({
  note: { type: String },
  completed: { type: Boolean },
  created_at: { type: Date }
});

export default mongoose.model('Todo', TodoSchema);