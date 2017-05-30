const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const scrape = require('../lib/scraper');


describe('Temperature Scrapper', function () {
	let req;
	afterEach(function () {
		req.restore();
	});
	it('Should return the temparature', function (done) {
		req = sinon.stub(request, 'get');

		scrape(function (err, temp) {
			expect(err).to.be.null;
			expect(temp).to.be.equal(0);
			done();
		});
		req.yield(null, {statusCode: 200}, '{"main":{"temp": 273}}');
	});
	it('Should return an error when status code is greater than 400', function (done) {
		req = sinon.stub(request, 'get');

		scrape(function (err, temp) {
			expect(err).to.be.instanceof(Error);
			done();
		});
		req.yield(null, {statusCode: 400}, '{"main":{"temp": 273}}');
	});
	it('Should return an error when something goes wrong', function (done) {
		req = sinon.stub(request, 'get');

		scrape(function (err, temp) {
			expect(err).to.be.instanceof(Error);
			done();
		});
		req.yield(new Error());
	});
});
