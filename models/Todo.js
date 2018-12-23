const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    groupType: {
        type: String,
        enum: ["job", "shop", "toVisit"],
        required: true,
    },
    importance: {
        type: Number,
        enum: [1, 2, 3], // 1 - main priority / 2 - less important // 3 - don't really have to be done quickly
        default: 1,
    },
    isDone: {
        type: Boolean,
        default: false,
        required: false,
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todo', todoSchema);