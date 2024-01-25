const globalErrorHandler = (err, _req, res, _next)=>{
    res.status(err.status || 500).json({
        massage: err.massage,
        errors: err.errors,
    })
}

export default globalErrorHandler;