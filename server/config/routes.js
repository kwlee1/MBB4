const path = require('path');
const question = require('../controllers/questions.js')

// routing exports a function that takes app
module.exports = function(app){

	app.get("/all", function(req, res){
		question.all(req, res);
	});

	app.post("/create", function(req, res){
		question.create(req, res);
	});

	app.get("/show/:id", function(req, res){
		question.show(req, res);
	});

	app.delete("/delete/:id", function(req, res){
		question.destroy(req, res);
	});
	app.put("/update/:id", function(req, res){
		question.update(req, res);
	});

    // catch all to serve the index
    // make sure your file path matches the name of your angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
};