function isLogedIn(req, res, next){
    if(true){
        next()
    }
    else{
        //res.json({
        //    message : 'User is not authorized. Please log in!'
        //})
    }
}

function isAdministrator(req, res, next){
    if(true){
        next()
    }else{
        //res.json({
        //    message : 'User is not permited to execute such commands!'
        //})
    }
}


module.exports = { 
    isLogedIn,
    isAdministrator
}
