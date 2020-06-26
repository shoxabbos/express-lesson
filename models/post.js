const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

schema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("Post", schema);
