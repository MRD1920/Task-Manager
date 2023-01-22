const asyncWrapper = (fn)=>{
    return fn(req,res,next)
}

module.exports = asyncWrapper