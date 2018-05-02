const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

//*CRUD

router.get("/restaurants/:id", (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.status(200).json(restaurant))
        .catch((e) => res.status(404).json(e));
});

//delete

router.delete("/restaurants/:id", (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id)
        .then(restaurant => res.status(200).json(restaurant))
        .catch((e) => res.status(500).json(e));
});

//editar
router.put("/restaurants/:id", (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(restaurant => res.status(200).json(restaurant))
        .catch((e) => res.status(500).json(e));
});


//delete borra una sola cosa, antes vamos a hacer 1 get para un solo restaurante
router.get("/restaurants/:id", (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.status(200).json(restaurant))
        .catch((e) => res.status(404).json(e));
});


//status 200 = ok
//status 500 = error de servidor, 403: prohipido, 409 no pude crear

router.post("/restaurants", (req, res) => {
    //se crea un nuevo restaurante con la info de body
    Restaurant.create(req.body)
        //si funciona
        .then(restaurant => res.status(200).json(restaurant))
        //si falla
        .catch((e) => res.status(409).json(e));
});

router.get("/restaurants", (req, res) => {
    Restaurant.find()
        .limit(10)
        .then(restaurants => {
            res.json(restaurants);
        })
        .catch(e => next(e));
});

module.exports = router;