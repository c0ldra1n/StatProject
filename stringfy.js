
var fs = require("fs");

fs.readFile("data.json", "utf8", function(err, data) {
	var master = JSON.parse(data);
	var repos = Object.keys(master);
	for (var i = 0; i < repos.length; i++) {
		const repo = repos[i];
		const repoInfo = master[repo];
		console.log(`${repo}\t${repoInfo.lines}\t${repoInfo.commits}\t${repoInfo.issues}`);
	}
});
