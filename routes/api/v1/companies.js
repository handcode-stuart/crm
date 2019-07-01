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
 * @route   GET api/v1/companies
 * @desc    Get all companies
 * @access  Private
 */
router.get("/", auth, async (req, res) => {
    try {
        const companies = await Company.find().sort({ date: -1 });
        return res.json(companies);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

/**
 * @route   POST api/v1/companies
 * @desc    Add a new company
 * @access  Private
 */
router.post(
    "/",
    auth,
    [
        check("name", "A company name is required")
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            let newCompany = new Company({
                name: req.body.name,
            });

            const company = await newCompany.save();

            return res.json(company);
        } catch (error) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

module.exports = router;
