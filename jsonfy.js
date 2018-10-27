
var fs = require("fs");
const URL = require('url').Url;

function repoID(url){
	return url.replace("https://github.com/", "").replace("/",":");
}

var master = {};

function processFile(filename, callback){
	fs.readFile(filename, "utf8", function(err, data) {
		var lines = data.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var butter = line.split(" ");
			if(butter.length == 2){
				var repo = butter[0];
				var info = butter[1];
				if(!(repoID(repo) in master)){
					master[repoID(repo)] = {};
				}
				master[repoID(repo)][filename] = info;
			}
		}
		callback();
	});
}

processFile("lines",function(){
	processFile("commits",function(){
		processFile("issues",function(){	//	wow async.
			console.log(master);
			fs.writeFile("data.json", JSON.stringify(master));
		});
	});
});
