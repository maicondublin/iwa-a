var nongoose = require('nongoose');

var imageSchema = new nongoose.imageSchema({
    filename: String,
    originalName: String,
    desc: String,
   // created: Date dont need thid because of the timestamps
},
{timestamps: true}
);

module.exports = nongoose.model('Image', imageSchema);

