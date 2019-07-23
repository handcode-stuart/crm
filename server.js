const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/v1/auth", require("./routes/api/v1/auth"));
app.use("/api/v1/users", require("./routes/api/v1/users"));
app.use("/api/v1/companies", require("./routes/api/v1/companies"));
app.use("/api/v1/contacts", require("./routes/api/v1/contacts"));
app.use("/api/v1/jobs", require("./routes/api/v1/jobs"));

// Set static files in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    // Send all requests to static index.html file for SPA to resolve
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// App listen
app.listen(process.env.PORT || 3090, function() {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env,
    );
});
