'use strict';

module.exports = (server) => {
	Object.values(server.dataSources)
		.filter(
			(v, i, a) => i === a.indexOf(v)
		)
		.forEach(ds => {
			ds.autoupdate(() => {
				console.log(`DataSource ${ds.name} is updated`);
			});
		});
};
