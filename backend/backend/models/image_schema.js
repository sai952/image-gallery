const schema_mongoose = require('mongoose');

const Imagechema = schema_mongoose.Schema(
    {
        title: { type: String },
        catagory: { type: String },
        img_path: { type: String },
        authorname: { type: String },
        authoremail: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = schema_mongoose.model('image_collections', Imagechema);