const mongoose = require('mongoose');

const mentalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const physicalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const emotionalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const questionSchema = new mongoose.Schema({
  question: {
    mental: [mentalSchema],
    physical: [physicalSchema],
<<<<<<< HEAD
    emotional: [emotionalSchema]
  }

=======
    emotional: [emotionalSchema],
  }
>>>>>>> 64ac8a3c6ee0bd47fe9124857e072c05dfc4d29f
});

module.exports = mongoose.model('Question', questionSchema);
