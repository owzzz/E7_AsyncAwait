let fetchRepos = require('./src/examples/ex_1');
let fetchBothRepos = require('./src/examples/ex_2');
let fetchBothConcurrently = require('./src/examples/ex_3');

fetchRepos('owzzz').then(() => console.log('FETCHING COMPLETE'));

