const chai = require('chai');
const { expect } = chai;
const db = require('../lib/db');
const sinon = require('sinon');

describe('Temperature Scrapper', () => {
	describe('Test db.set', () => {
		it('Should save to the DB', () => {
			const spy = sinon.stub();
			const redis = {
				set: spy
			};
			const DB = new db(redis);
			DB.set('test', 'value');
			expect(spy.calledOnce).to.be.true;
		});
	});
	describe('Test db.get', () => {
		it('Should get from the DB', (done) => {
			const spy = sinon.stub();
			const redis = {
				get: spy
			};
			const DB = new db(redis);
			const res = 123;
			DB.get('test', (err, result) => {
				expect(err).to.be.null;
				expect(result).to.be.equal(res);
				done();
			});
			spy.callArgWith(1, null, res);
		});
		it('Should return an error when something goes wrong', (done) => {
			const spy = sinon.stub();
			const redis = {
				get: spy
			};
			const DB = new db(redis);
			DB.get('test', (err, result) => {
				expect(err).to.be.instanceof(Error);
				expect(result).to.be.null;
				done();
			});
			spy.callArgWith(1, new Error(), null);
		});
	});
});
