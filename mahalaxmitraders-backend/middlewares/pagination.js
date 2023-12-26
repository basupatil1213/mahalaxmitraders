

// middleware for pagination of data
export const paginationMiddleware = (model) => async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const search = req.query.search;
    const filters = req.query.filters;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    const filter = {};
        if (search) {
            filter.name = { $regex: new RegExp(search, 'i') };
        }
        if (filters) {
            filter.category = { $in: filters.split(',') };
        }

    const totalCount = await model.countDocuments(filter).exec();
    results.totalCount = totalCount;
    const totalPages = Math.ceil(totalCount / limit);
    results.totalPages = totalPages;
    if (endIndex < totalCount) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    }
    try {
        results.results = await model.find(filter).limit(limit).skip(startIndex).exec();
        res.paginatedResults = results;
        if (next)
            next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}