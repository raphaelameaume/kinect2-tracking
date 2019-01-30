var Joints = require('./Joints');
var Junctions = require('./Junctions');
var KinectJoint = require('./KinectJoint');

var JunctionNames = Object.keys(Junctions);

function KinectBody ( index, data ) {
    this.index = index;

    this.tracked = data.tracked;
    this.joints = [];
}

KinectBody.prototype.update = function ( data ) {
    this.tracked = data.tracked;

    if ( !this.tracked || !data.joints ) return;

    for ( let i = 0; i < data.joints.length; i++ ) {
        if ( !joints[i] ) {
            joints[i] = new KinectJoint(i, data.joints[i]);
        } else {
            joints[i].update(data.joints[i]);
        }
    }
};

KinectBody.prototype.getJoint = function ( jointName ) {
    if ( !Joints[jointName] ) {
        console.error("KinectBody can't find joint " + jointName);
        return undefined;
    }

    return this.joints[Joints[jointName]];
};

KinectBody.prototype.getJoints = function () {
    return this.joints;
};

KinectBody.prototype.getJunctions = function () {
    var junctions = [];

    for ( let i = 0; i < JunctionNames.length; i++ ) {
        var junction = this.getJunction(JunctionNames[i]);
        junctions.push(junction)
    }

    return junctions;
};

KinectBody.prototype.getJunction = function ( junctionName ) {
    var junction = Junctions[junctionName];

    if ( !junction ) {
        console.error("KinectBody can't find junction " + junctionName);
        return undefined;
    }

    return [
        this.joints[Joints[junction[0]]], 
        this.joints[Joints[junction[1]]], 
    ];
};

module.exports = KinectBody;