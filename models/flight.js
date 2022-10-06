const { mongoose } = require("mongoose");

// SCHEMA > MODEL > QUERY 


// Schema design
const flightSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name for this producr"],
        trim: true,
        unique: [true, "Name Must be unique"],
        minLength: [5, "Name must be at least 3 chearacters."],
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price Can't be negative"],
    },
    img: {
        type: String,
        require: true,
    }

    // status: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ["In-stock", "out-of-stock", "discontinued"],
    //         message: "status can't be {VALUE}"
    //     }
    // },



}, {
    timestamps: true,
});


// //mongoose middleware for saving data: pre/post

// flightSchema.pre("save", function (next) {
//     console.log("Before saving data");
//     if (this.quantity == 0) {
//         this.status = "out-of-stock"
//     }


//     next()
// })

// producrSchema.post("save", function (doc, next) {
//     console.log("before saving data");

//     next()
// })

// flightSchema.methods.logger = function () {
//     console.log(`Data save for ${this.name}`);
// }




// model

const Flight = mongoose.model("flight", flightSchema)


module.exports = Flight
