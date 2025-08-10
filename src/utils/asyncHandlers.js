// this is the file for storing the wrapper for the function which is used to talk
// to the database this is create cause we talk to database very frequently 

const asyncHandler = (reqHandler) => async (req,resizeBy,next) => {
    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export {asyncHandler}