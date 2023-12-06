const mongoose=require('mongoose')

const Issue = new mongoose.Schema({
    branch: { type: String, required: true},
     block: { type: String, required: true },
   category: { type: String, required: true },
   labname:{type:String,required:true},
   studentmail:{type:String,required:true},
   assignedto:{type:String,required:true},
   status:{type:String,required:true},
   explainissue:{type:String,required:true},
   date: {
    type: String,
    default: Date.now
  }

});

const issue = mongoose.model('Issues', Issue);

module.exports = issue;