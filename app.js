const express = require(`express`);
const cors = require('cors');
const apiRoutes = require('./routes/uploads');
const errorHandler = require('./middleware/errorHandler');
const createError = require('./utils/createError')

const app = express ();

app.use(cors());
app.use(express.urlencoded({  extended: false }));

app.use(apiRoutes);

// Catch all invalid routes
app.use((req, res, next) => {
    next(createError(
        'Route not found',
        404,
        'not_found',
        'Not Found'
    ));
});

app.use(errorHandler);

// Export the app instance for testing
module.exports = app;