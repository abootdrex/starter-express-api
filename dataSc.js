const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }, 

    blog: {
        type: String,
        required: true
    },

});

const BlogData = mongoose.model('BlogData', ReactFormDataSchema);


module.exports = BlogData;