const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 32,
        trim:true,
}
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);