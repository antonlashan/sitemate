module.exports = (app) => {
    const issues = require('../controllers/issue.controller.js');

    // Create a new issue
    app.post('/issues', issues.create);

    // Retrieve all issues
    app.get('/issues', issues.findAll);

    // Retrieve a single issue with issueId
    app.get('/issues/:id', issues.findOne);

    // Update a issue with issueId
    app.put('/issues/:id', issues.update);

    // Delete a issue with issueId
    app.delete('/issues/:id', issues.delete);
};
