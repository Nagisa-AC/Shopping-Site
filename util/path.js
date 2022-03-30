const path = require('path');

// Alternative to using "__dirname"
module.exports = path.dirname(require.main.filename);