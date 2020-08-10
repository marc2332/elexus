const mocha = require('mocha')
const chalk = require('chalk')

function tron(runner) {
	mocha.reporters.Base.call(this, runner);
	let passes = 0
	let failures = 0
	let pastSuite 
	runner.on('pass', function(test) {
		passes++
		if( test.parent.title !== pastSuite ) {
			pastSuite = test.parent.title
			console.log(chalk.white.underline(`\n[${test.parent.title}]\n`))
		}
		console.log(chalk.rgb(255,255,255).bgGreen(' PASS '),chalk.bold.white(test.title))
	});

	runner.on('fail', function(test, err) {
		failures++
		console.log(chalk.rgb(255,255,255).bgRed(' FAIL '),chalk.bold.white(test.title),chalk.white(err.message))
	});

	runner.on('end', function() {
		const anyError = failures > 0
		const bgColor = anyError ? chalk.bgRed : chalk.bgGreen
		console.log(bgColor.rgb(255,255,255)(`\nPassed ${passes}/${passes+failures}\n`))
	})
}

module.exports = tron
