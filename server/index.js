var ip = require('ip');
var Kinect2 = require('kinect2');

function KinectServer () {

    this.port = 3008;
    this.app = require('express')();

    this.app.get('/', ( req, res ) => {
        res.sendFile(__dirname + '/index.html');
    });

    this.server = require('http').Server(this.app);
    
    var io = require('socket.io')(this.server);

    io.on('connection', function(socket){
        console.log('KinectServer :: user connected.');

        socket.on('disconnect', function(){
            console.log('KinectServer :: user disconnected.');
        });
    });

    var kinect = new Kinect2();

    if ( kinect.open() ) {
        console.log('KinectServer :: kinect connected.');

        kinect.on('bodyFrame', function ( bodyFrame ) {
            io.emit('bodyFrame', bodyFrame);
        });

        kinect.openBodyReader();
    }
};

KinectServer.prototype.listen = function () {
    this.server.listen(this.port, () => {
        console.log('KinectServer :: listening on');
        console.log('http://localhost:' + this.port);
        console.log('http://' + ip.address() + ':' + this.port);
    });
};

module.exports = KinectServer;