import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
//create a new contact constructor with mongoose, exec the model func and pass contact as the first obj to create contacts in the db. model is our schema.
const Contact = mongoose.model('Contact', ContactSchema);
//below we export the obj that will create new contacts. Passing the 'new' contructor, passing the model, with the data that is coming with the request (ist body) inside of new contact.
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err); //if theres error, then send it
        }
        res.json(contact); //otherwise do send a json with the contact
    });
}

//now we need to pass the function to the routes...

//below we do not create new contact with a "let" like we did before
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err); //if theres error, then send it
        }
        res.json(contact); //otherwise do send a json with the contact
    });
}
// also this needs to go to the routes...

export const getContactWithId = (req, res) => {
//contactid is lower case because has to match whats in the app.route. W are getting specific contact with id.
    Contact.findById(req.params.contactid, (err, contact) => {
        if (err) {
            res.send(err); //if theres error, then send it
        }
        res.json(contact); //otherwise do send a json with the contact
    });
} //and export to route...

export const updateContact = (req, res) => {
    //contact. function is the mongoose connection to the mongo db. Below we need to pass the contactid from the params in the request to the id that we want to update. In postman the id in the object that returns is an _id, with underscore, which we will pass in the params of the req.
    Contact.findOneAndUpdate({_id: req.params.contactid}, 
        req.body, 
        {new: true, useFindAndModify: false}, //tells the mongodb to return the updated contact and not the old object. the useAnd.. is to avoid issues with deprecated tech.
        (err, contact) => {
        if (err) {
            res.send(err); //if theres error, then send it
        }
        res.json(contact); //otherwise do send a json with the contact
    })
}

export const deleteContact = (req, res) => {
    //contactid is lower case because has to match whats in the app.route. W are getting specific contact with id.
        Contact.remove({_id: req.params.contactid}, (err, contact) => {
            if (err) {
                res.send(err); //if theres error, then send it
            }
            res.json({message: "Deleted with certainty!"}); //otherwise do send a message that the contact was deleted with success
        });
    } 