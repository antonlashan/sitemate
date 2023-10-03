const { issue } = require('../utils/issue');

// Create and Save a new issue
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: 'Issue content can not be empty',
        });
    }

    const existingIssues = issue.getData();
    const newIssueId = Math.floor(100000 + Math.random() * 900000);

    existingIssues[newIssueId] = req.body;

    issue.saveData(existingIssues);
    return res.send({ success: true, message: 'Issue added successfully' });
};

// Retrieve and return all issues from the database.
exports.findAll = (req, res) => {
    const issues = issue.getData();

    return res.send({
        success: true,
        data: issues,
    });
};

// Find a single issue with a issueId
exports.findOne = (req, res) => {
    const issueId = req.params['id'];
    const existingIssues = issue.getData();

    if (!existingIssues[issueId]) {
        return res.status(404).send({
            success: false,
            message: `Issue with id ${issueId} not found`,
        });
    }

    return res.send({
        success: true,
        data: existingIssues[issueId],
    });
};

// Update a issue identified by the issueId in the request
exports.update = (req, res) => {
    const issueId = req.params['id'];
    const existingIssues = issue.getData();

    if (!existingIssues[issueId]) {
        return res.status(404).send({
            success: false,
            message: `Issue with id ${issueId} not found`,
        });
    }

    existingIssues[issueId] = req.body;

    issue.saveData(existingIssues);

    return res.send({ success: true, message: 'Issue updated successfully' });
};

// Delete a issue with the specified issueId in the request
exports.delete = (req, res) => {
    const issueId = req.params['id'];
    const existingIssues = issue.getData();

    if (!existingIssues[issueId]) {
        return res.status(404).send({
            success: false,
            message: `Issue with id ${issueId} not found`,
        });
    }

    delete existingIssues[issueId];

    issue.saveData(existingIssues);

    return res.send({ success: true, message: 'Issue deleted successfully' });
};
