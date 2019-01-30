var constants = require('./constants');
var Kinect2Joint = require('./Kinect2Joint');

var JunctionNames = Object.keys(constants.Junctions);

function Kinect2Body ( index, data ) {
    this.index = index;

    this.tracked = data.tracked;
    this.joints = [];
}

Kinect2Body.prototype.update = function ( data ) {
    this.tracked = data.tracked;

    if ( !this.tracked || !data.joints ) return;

    for ( let i = 0; i < data.joints.length; i++ ) {
        if ( !joints[i] ) {
            joints[i] = new Kinect2Joint(i, data.joints[i]);
        } else {
            joints[i].update(data.joints[i]);
        }
    }
};

Kinect2Body.prototype.getJoint = function ( jointName ) {
    if ( !Joints[jointName] ) {
        console.error("Kinect2Body can't find joint " + jointName);
        return undefined;
    }

    return this.joints[constants.Joints[jointName]];
};

Kinect2Body.prototype.getJoints = function () {
    return this.joints;
};

Kinect2Body.prototype.getJunctions = function () {
    var junctions = [];

    for ( let i = 0; i < JunctionNames.length; i++ ) {
        var junction = this.getJunction(JunctionNames[i]);
        junctions.push(junction)
    }

    return junctions;
};

Kinect2Body.prototype.getJunction = function ( junctionName ) {
    var junction = constants.Junctions[junctionName];

    if ( !junction ) {
        console.error("Kinect2Body can't find junction " + junctionName);
        return undefined;
    }

    return [
        this.joints[Joints[junction[0]]], 
        this.joints[Joints[junction[1]]], 
    ];
};

Kinect2Body.Joints = constants.Joints;
Kinect2Body.Junctions = constants.Junctions;

module.exports = Kinect2Body;