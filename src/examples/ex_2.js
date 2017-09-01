const fetch = require('node-fetch');
const CONFIG = require('../config');

// Example 2
// Make Two calls (Not Concurrent)
// ------------------------------------
// Get All Git Hub Repositories
// Get User Activity
// Log out projects and UserInfo

module.exports = async(username = CONFIG.username) => {
	try {
		let gitHubprojects = await fetch(`${CONFIG.github.apiUrl}/users/${username}/repos`);
		let GitHubUserInfo = await fetch(`${CONFIG.github.apiUrl}/users/${username}`);

		let projectsResponse = await gitHubprojects.json();
		let userInfo = await GitHubUserInfo.json();

		console.log(projectsResponse, userInfo);

	}
	catch (e) {
		console.log(e);
		return new Error(e);
	}
}