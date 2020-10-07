const fs = require('fs');

let contents = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8');

// This javascript code removes all 3 types of line breaks
contents = contents.replace('/(\r\n|\n|\r)/gm', '');

if (contents === null || contents === undefined) {
	console.error('error: commit_editmsg file not found');
	process.exit(1);
}

console.group();
const validType = /^(fix|feat|build|chore|ci|docs|style|refactor|perf|test):\s\w{4,}/gm;
const validCommit = contents.match(validType);
if (validCommit !== null) {
	console.log('Commit message is valid!');
	console.groupEnd();
	process.exit(0);
} else {
	console.error('Invalid commit message format:');
	console.log(contents);
	console.log('----------------------------------------------------------------------------------');
	console.log('Please start your commit message with:  fix, feat, build, chore, ci, docs, style, refactor, perf or test');
	console.log('Followed by a colon and space. For ex: "docs: commit process documentation #jira CHWEB-1234"');
	console.log('----------------------------------------------------------------------------------');
	console.groupEnd();
	process.exit(1);
}
