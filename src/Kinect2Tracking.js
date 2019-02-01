var io = require('socket.io-client');
var Kinect2Body = require('./Kinect2Body');

function Kinect2Tracking () {
    this.bodies = [];
}

Kinect2Tracking.prototype.listen = function ( url ) {
    var self = this;
    var socket = io.connect(url);

    socket.on('bodyFrame', function( bodyFrame) {
        for ( let i = 0; i < bodyFrame.bodies.length; i++ ) {
            if ( !self.bodies[i] ) {
                self.bodies[i] = new Kinect2Body(i, bodyFrame.bodies[i]);
            } else {
                self.bodies[i].update(bodyFrame.bodies[i]);
            }
        }
    });
};

Kinect2Tracking.prototype.simulate = function ( data, speed ) {
    if ( !data.bodyFrame ) {
        console.error("Kinect2Tracking can not simulate data. Wrong format.");
    }

    let frameIndex = 0;
    let frameId = 0;
    let self = this;
    let frameRate = 1 / speed || 1;

    function run () {
        if ( frameId < data.bodyFrame.length ) {
            var frameData = data.bodyFrame[frameId];

            if ( ( frameIndex % frameRate ) === 0 ) {
                for ( let i = 0; i < frameData.bodies.length; i++ ) {
                    if ( !self.bodies[i] ) {
                        self.bodies[i] = new Kinect2Body(i, frameData.bodies[i]);
                    } else {
                        self.bodies[i].update(frameData.bodies[i]);
                    }
                }
            
                frameId++;
            }
        } else {
            frameId = 0;
        }

        frameIndex++;

        requestAnimationFrame(run);
    }

    run();
};

Kinect2Tracking.prototype.getJoint = function ( bodyIndex, jointName ) {
    if ( !this.bodies[bodyIndex] ) {
        console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return this.bodies[bodyIndex].getJoint(jointName);
};

Kinect2Tracking.prototype.getJunction = function ( bodyIndex, junctionName ) {
    if ( !this.bodies[bodyIndex] ) {
        console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return this.bodies[bodyIndex].getJoint(jointName);
};

Kinect2Tracking.prototype.getBody = function ( bodyIndex ) {
    if ( !this.bodies[bodyIndex] ) {
        console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
        return;
    }

    return this.bodies[bodyIndex];
};

Kinect2Tracking.prototype.getBodies = function () {
    return this.bodies;
};

module.exports = Kinect2Tracking;