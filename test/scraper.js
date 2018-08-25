const request = require('request');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const scrape = require('../lib/scraper');


describe('Temperature Scrapper', () => {
	let req;
	afterEach(() => {
		req.restore();
	});
	it('Should return the temparature', (done) => {
		req = sinon.stub(request, 'get');

		scrape((err, temp) => {
			expect(err).to.be.null;
			expect(temp).to.be.equal(0);
			done();
		});
		req.yield(null, {statusCode: 200}, '{"main":{"temp": 273}}');
	});
	it('Should return an error when status code is greater than 400', (done) => {
		req = sinon.stub(request, 'get');

		scrape((err, temp) => {
			expect(err).to.be.instanceof(Error);
			expect(temp).to.be.undefined;
			done();
		});
		req.yield(null, {statusCode: 400}, '{"main":{"temp": 273}}');
	});
	it('Should return an error when something goes wrong', (done) => {
		req = sinon.stub(request, 'get');

		scrape((err, temp) => {
			expect(err).to.be.instanceof(Error);
			expect(temp).to.be.undefined;
			done();
		});
		req.yield(new Error());
	});
});
