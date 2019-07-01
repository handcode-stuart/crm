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
 * @route   GET api/v1/contacts
 * @desc    Get all contacts
 * @access  Private
 */
router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        return res.json(contacts);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

/**
 * @route   POST api/v1/contacts
 * @desc    Add a new contact
 * @access  Private
 */
router.post(
    "/",
    auth,
    [
        check("name", "A contact name is required")
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            let newContact = new Contact({
                name: req.body.name,
            });

            const contact = await newContact.save();

            return res.json(contact);
        } catch (error) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

module.exports = router;
