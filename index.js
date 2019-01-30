var Joints = require('./Joints');
var Junctions = require('./Junctions');
var KinectBody = require('./KinectBody');
var KinectJoint = require('./KinectJoint');
var KinectTracking = require('./KinectTracking');

KinectTracking.Joints = Joints;
KinectTracking.Junctions = Junctions;

module.exports = KinectTracking;