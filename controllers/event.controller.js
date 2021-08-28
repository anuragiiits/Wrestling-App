const db = require("../models");
const Event = db.events;

exports.homePage = (req, res) => {
    Event.find()
    .then(data => {
        // res.send(data)
        res.render('home', { data: data });
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

exports.eventPage = (req, res) => {
    Event.findOne({event_id: req.params.eventId})
    .then(eventData => {
        // res.send(data)
        res.render('event', { eventData: eventData });
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};
