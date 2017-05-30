const chai = require('chai');
const expect = chai.expect;
const db = require('../lib/db');
const sinon = require('sinon');

describe('Temperature Scrapper', function () {
	describe('Test db.set', function () {
		it('Should save to the DB', function () {
			let spy = sinon.stub();
			let redis = {
				set: spy
			};
			let DB = new db(redis);
			DB.set('test', 'value');
			expect(spy.calledOnce).to.be.true;
		});
	});
	describe('Test db.get', function () {
		it('Should get from the DB', function (done) {
			let spy = sinon.stub();
			let redis = {
				get: spy
			};
			let DB = new db(redis);
			DB.get('test', function (err, result) {
				expect(err).to.be.null;
				expect(result).to.be.equal(123);
				done();
			});
			spy.callArgWith(1, null, 123);
		});
		it('Should return an error when something goes wrong', function (done) {
			let spy = sinon.stub();
			let redis = {
				get: spy
			};
			let DB = new db(redis);
			DB.get('test', function (err, result) {
				expect(err).to.be.instanceof(Error);
				done();
			});
			spy.callArgWith(1, new Error(), null);
		});
	});
});
