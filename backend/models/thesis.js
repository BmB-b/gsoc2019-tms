const mongoose = require('mongoose');

const thesisSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { 
        type: String, 
        required: true, 
    },
    description: String,
    prerequisites: String,
    tags: [String],
    created_time: Date,
    assigned: Boolean, // true if it is assigned to some student
    pending: Boolean, // external,student wait for approval from professor. 
    university: { type: mongoose.Schema.Types.ObjectId, ref: 'University'},
    professor: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    creator_student: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
    creator_external:{ type: mongoose.Schema.Types.ObjectId, ref:'External'},
    supervisor: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }]
    });

module.exports = mongoose.model('Thesis', thesisSchema,'thesis');