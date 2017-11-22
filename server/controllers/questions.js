var mongoose=require('mongoose');
var Question=mongoose.model("Question");
module.exports={
	all: function(req, res){
		Question.find({}, function(err, questions){
			if(err){
				res.json(err);
			}else{
				res.json(questions);
			};
		});
	},

	create: function(req, res){
        console.log(req.body);
        var question=new Question(req.body);
        console.log(question); 
		question.save(function(err){
			if(err){
				res.json(err);
			}else{
                console.log('saved',this.question);
				res.json({success: true});
			};
		});
	},

	show: function(req, res){
		console.log("at controller",req.params.id)
		Question.findOne({_id:req.params.id}).exec(function(err, results){
			if(err){
				res.json('error');
			}else{
				res.json(results)
			}
		})
	},

	destroy: function(req){
		console.log("at controller", req.params.id)
		Question.findByIdAndRemove(req.params.id).exec(function(err){
			if(err){
				res.json('error');
			}else{
				res.json("deleted")
			}
		})
	},

	update: function(req, res){
		Question.findByIdAndUpdate(req.params.id, req.body, function(err, results){
			if(err){
				res.json('error');
			}else{
				res.json(results)
			}
		});
	}

};