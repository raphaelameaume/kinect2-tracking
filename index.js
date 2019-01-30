var Kinect2Body = require('./src/Kinect2Body');
var Kinect2Joint = require('./src/Kinect2Joint');
var Kinect2Tracking = require('./src/Kinect2Tracking');

Kinect2Tracking.Joints = Kinect2Body.Joints;
Kinect2Tracking.Junctions = Kinect2Body.Junctions;

module.exports = Kinect2Tracking;