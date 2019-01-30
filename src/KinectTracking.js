var io = require('socket.io-client');
var KinectBody = require('./KinectBody');

var bodies = [];

function KinectTracking ( url ) {
    var socket = io.connect(connectURL);

    socket.on('bodyFrame', function( bodyFrame) {
        for ( let i = 0; i < bodyFrame.bodies.length; i++ ) {
            if ( !bodies[i] ) {
                bodies[i] = new KinectBody(i, bodyFrame.bodies[i]);
            } else {
                bodies[i].update(bodyFrame.bodies[i]);
            }
        }
    });
}

KinectTracking.prototype.getJoint = function ( bodyIndex, jointName ) {
    if ( !bodies[bodyIndex] ) {
        console.error("KinectTracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return bodies[bodyIndex].getJoint(jointName);
};

KinectTracking.prototype.getJunction = function ( bodyIndex, junctionName ) {
    if ( !bodies[bodyIndex] ) {
        console.error("KinectTracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return bodies[bodyIndex].getJoint(jointName);
};

KinectTracking.prototype.getBody = function ( bodyIndex ) {
    if ( !bodies[bodyIndex] ) {
        console.error("KinectTracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return bodies[bodyIndex];
};

KinectTracking.prototype.getBodies = function () {
    return bodies;
};

module.exports = KinectTracking;