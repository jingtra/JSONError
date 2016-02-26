module.exports = function(body){
	var err = new Error(body.message);
	err.body = body;
	return err;
}
