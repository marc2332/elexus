describe('Test 1', function () {
	it('Test 1.1', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 1.2', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 1.3', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 1.4', function (d) {
		throw(new Error('Some error happened!'))
	})
})

describe('Test 2', function () {
	it('Test 2.1', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 2.2', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 2.3', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
	it('Test 2.4', function (d) {
		setTimeout(() => {
			d()
		}, 150)
	})
})