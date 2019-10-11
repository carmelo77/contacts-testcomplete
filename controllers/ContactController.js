const Contact = require('../models/contact');


module.exports = {
    index : (req, res) => {
        Contact.find({}, (err, data) => {
            res.json(data);
        });
    },

    store : (req, res) => {
        const contact = new Contact(req.body);
        contact.save();

        res.json({message:'Contacto guardado correctamente.'});
    },

    edit : (req, res) => {
        Contact.findOne({_id: req.params.id}, (err, data) =>{
            if(err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },

    update : (req, res) => {
        Contact.update({_id: req.params.id}, req.body, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json({message: 'Contacto actualizado correctamente.', data: data});
            }
        });
    },

    destroy : (req, res) => {
        Contact.deleteOne({_id: req.params.id}, (err) => {
            if(err) {
                res.json(err);
            } else {
                res.json({message: 'Contacto eliminado correctamente.'});
            }
        });
    }
}