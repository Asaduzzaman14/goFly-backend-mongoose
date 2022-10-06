const { createFlightService, getFlightService, updateFlightService, deleteFlightService } = require("../services/flight.servce")



exports.createFlight = async (req, res, next) => {
    try {
        // save or post

        const result = await createFlightService(req.body)

        res.status(200).json({
            status: true,
            message: "Data Insertade true",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "data is not inseted",
            error: error.message,
        })
        console.log(error.message.name)
    }

};



exports.getFlights = async (req, res, next) => {

    try {
        let filters = { ...req.query };
        const queries = {}

        if (req.query.page) {
            const { page = 1, limit = 2 } = req.query;
            const skip = (page - 1) * parseInt(limit)
            queries.skip = skip;
            queries.limit = parseInt(limit)
        }


        const flights = await getFlightService(filters, queries)
        res.status(200).json({
            status: true,
            message: "Successfully get data",
            data: flights

        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Can't get the data",
            error: error.message
        })
    }

}





exports.updateFlight = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateFlightService(id, req.body);

        res.status(200).json({
            status: true,
            message: "Successfully flight updated",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Cant't  update flight",
            error: error.message
        })

    }
};


exports.deleteFlight = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteFlightService(id);
        if (!result.deletedCount) {
            return res.status(400).json({
                status: false,
                error: "Couldn't delete the flight"
            })
        }

        res.status(200).json({
            status: true,
            message: "Successfully flight deleted",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "product Cant't  deleted",
            error: error.message
        })

    }
};


