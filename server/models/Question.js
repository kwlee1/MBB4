var mongoose=require('mongoose');
var Schema = mongoose.Schema; 
var QuestionSchema=new mongoose.Schema({
    user: { type: String, required: true },
    query: { type: String, required: true },
    opt1: { type: String, required: true },
    vote1: { type: Number, required: true },
    opt2: { type: String, required: true },
    vote2: { type: Number, required: true },
    opt3: { type: String, required: true },
    vote3: { type: Number, required: true },
    opt4: { type: String, required: true },
    vote4: { type: Number, required: true }
}, {timestamps: true});
mongoose.model("Question", QuestionSchema);