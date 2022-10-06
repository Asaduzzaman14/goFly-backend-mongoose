const Flight = require("../models/flight");


exports.getFlightService = async (filters, queries) => {

    const products = await Flight.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
    return products
};

exports.createFlightService = async (data) => {
    const result = await Flight.create(data);
    return result
};



exports.updateFlightService = async (flightId, data) => {

    // update mathod
    const result = await Flight.updateOne({ _id: flightId }, { $inc: data }, {
        runValidators: true
    })

    return result;
}


exports.deleteFlightService = async (id) => {
    const result = await Flight.deleteOne({ _id: id })
    return result
}
