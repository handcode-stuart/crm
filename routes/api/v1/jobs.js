const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const User = require("../../../models/User");
const Company = require("../../../models/Company");
const Contact = require("../../../models/Contact");
const Job = require("../../../models/Job");

/**
 * @route   GET api/v1/jobs
 * @desc    Get all jobs
 * @access  Private
 */
router.get("/", auth, async (req, res) => {
    try {
        const jobs = await Job.find().sort({ date: -1 });
        return res.json(jobs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

/**
 * @route   POST api/v1/jobs
 * @desc    Add a new job
 * @access  Private
 */
router.post(
    "/",
    auth,
    [
        check("name", "A job name is required")
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            let newJob = new Job({
                name: req.body.name,
            });

            const job = await newJob.save();

            return res.json(job);
        } catch (error) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

/**
 * @route   GET api/v1/jobs/:id
 * @desc    Get job by id
 * @access  Private
 */
router.get("/:id", auth, async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        return res.json(job);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

module.exports = router;
