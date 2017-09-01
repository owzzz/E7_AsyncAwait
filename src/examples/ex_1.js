const fetch = require('node-fetch');
const CONFIG = require('../config.js');



// Example 1
// Simple Fetch Example
// ------------------------------------
// Get All Git Hub Repositories
// Log out Repo Name, Description & Url

module.exports = async(username = CONFIG.username) => {

	try {
		let projects = await fetch(`${CONFIG.github.apiUrl}/users/${username}/repos`);
		let body = await projects.json();

		console.log('Example 1 - Fetch Github Repositories');
		console.log('-------------------------------------------------');

		body.map((repo) => {
			console.log('Repository Name', repo.name);
			console.log('Repository Description', repo.description);
			console.log('Repository Url', repo.html_url);
			console.log('-------------------------------------------------');
		});

	}
	catch (e) {
		console.log(e);
		return new Error(e);
	}
}