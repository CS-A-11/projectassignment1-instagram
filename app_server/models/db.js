var mongoose= require("mongoose");


//connecting

var dbURI= "mongodb://localhost:27017/Loc8r";
mongoose.connect(dbURI,{useNewUrlParser: true }); 

mongoose.connection.on("connected", function(){
    console.log('Mongoose connected to '+dbURI);
})

mongoose.connection.on("error", function(){
    console.log('Mongoose connection error '+console.error());

})

mongoose.connection.on("disconnected", function(){
    console.log('Mongoose disconnected from '+dbURI);
})


//disconnecting

var gracefulShutdown= function(msg, callback){

    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through'+msg);
        callback();
    })
}

process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, "SIGUSR2");
    })
})

process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    })
})


process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shutdown', function(){
        process.exit(0);
    })
})

var abc=require('./members');