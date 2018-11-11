var mongoose= require("mongoose");
var bcrypt=require('bcryptjs');
var gracefulShutdown;

//connecting

var dbURI= "mongodb://localhost:27017/Loc8r";
if (process.env.NODE_ENV === "production") {
    dbURI="mongodb://meharfatimakhan:2manylies@ds145563.mlab.com:45563/instagram";
  }
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true }
  );
//mongoose.connect(dbURI,{useNewUrlParser: true }); 

mongoose.connection.on("connected", function(){
    console.log('Mongoose connected to '+ dbURI);
})

mongoose.connection.on("error", function(err){
    console.log('Mongoose connection error '+ err);

})

mongoose.connection.on("disconnected", function(){
    console.log('Mongoose disconnected from '+ dbURI);
})


//disconnecting

gracefulShutdown= function(msg, callback){

    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through'+msg);
        callback();
    });
};

process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, "SIGUSR2");
    });
});

process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});


process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shutdown', function(){
        process.exit(0);
    });
});

require('./members');
require('./posts');