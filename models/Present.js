

const mongoose = require('mongoose');
const PresentSchema = new mongoose.Schema(
{
present: {
type: Boolean,
 required: true,
 default:true,
},
studentId: {
type: Boolean,
 required: true,

},
},
{ timestamps: true }
);
module.exports = mongoose.model('Present',PresentSchema);