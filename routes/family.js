const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get("/family", (request, response, next) => {
    queries.list('familyMembers').then(family => {
        response.json({family});
    }).catch(next);
});

router.get("/family/:id", (request, response, next) => {
    queries.read('familyMembers', request.params.id).then(family => {
        family
            ? response.json({family})
            : response.status(404).json({message: 'Family member not found'})
    }).catch(next);
});

router.post("/family", (request, response, next) => {
    queries.post('familyMembers', request.body).then(family => {
        response.status(201).json({family});
    }).catch(next);
});

router.delete("/family/:id", (request, response, next) => {
    queries.delete('familyMembers', request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/family/:id", (request, response, next) => {
    queries.update('familyMembers', request.params.id, request.body).then(newUpdate => {
        response.json({newUpdate});
    }).catch(next);
});

module.exports = router;