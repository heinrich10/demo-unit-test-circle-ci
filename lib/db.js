let redis;

class DB {

	constructor(db) {
		redis = db;
	}

	set(key, value) {
		// console.log(key, value);
		redis.set(key, value);
	}

	get(key, cb) {
		redis.get(key, (err, result) => {
			cb(err, result);
		});
	}

}

module.exports = DB;
