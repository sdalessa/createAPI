// here we define a schema, before start adding operation to db and corresponding endpoints.
//Schema dictates what type of data and structure of data the db takes. For instance if key must only take string as data, this is an example of rules. Schema defines rules for what the db can accept
//we use mongoose to define the schema.
import mongoose from "mongoose";
//
const Schema = mongoose.Schema;
//exporting an obj. Leveraging the schema from mongoose to create new one.
export const ContactSchema = new Schema ({
    firstName: {
        type: String, 
        required: 'Enter a last name'
    },
    lastName: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
//previous 2 lines mean: when this data is not provided, the default is the date when the data was entered. 
    }
});