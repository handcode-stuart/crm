const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = Job = mongoose.model("job", JobSchema);
