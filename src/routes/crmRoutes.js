import {addNewContact,
        getContacts,
        getContactWithId,
        updateContact,
        deleteContact
} from '../controllers/crmController';
//routes are needed to be able to call a url and send something back in the web application. You can call spoecific routes to define endpoints. We can test them with postman


//creating routes func, we create with the app argument, and pass the routes. Creating all the main routes for getting contacts, posting contact, updating one, and deleting one (for the last two you need an id). After I created the below, we went to postman for testing. We added localhost/4100/contact and for PUT and DELETE we also added after contact a mock random id just for testing /contact/aewg.
const routes = (app) => {
    app.route('/contact')
//What is a middleware? functions that have access to the req and res obj and can run code there, can make changes, end req and res obj, call them etc.  
//"next" allows to call into another function while executing the first one. 
        .get((req, res, next) => {
            //middleware: using the "next" func from the expr library to use middlew in the middle of the get req (we are basically giving info abt what the req is from, and what its method is, then with next we do the respond directly to the front end). After adding these things, we have now info in the terminal about where the req is from and its type.
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
        }, getContacts) 
        //now we can use this function to save new contact on the db. Now we can test again in postman. This is a post endpoint
        .post(addNewContact);

    //wanna make sure that the contact :id is the same that we use when we do the controllers to get a specific id.
    app.route('/contact/:contactid')
    //inserting below a brand new method to GET a specific contact. We cant do the get from above, because there no specific id is being passed (just /contacts only). Instead we are here where right here in the above line we do pass a specific id.
        .get(getContactWithId)

        .put(updateContact) //updating contact

        .delete(deleteContact)
}
export default routes;