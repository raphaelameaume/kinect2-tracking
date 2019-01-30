function Kinect2Joint ( index, data ) {
    this.index = index;
    this.trackingState = data.trackingState;
    
    this.depthX = data.depthX;
    this.depthY = data.depthY;
    
    this.colorX = data.colorX;
    this.colorY = data.colorY;
    this.colorZ = data.colorZ;

    this.cameraX = data.cameraX;
    this.cameraY = data.cameraY;
    this.cameraZ = data.cameraZ;

    this.orientationX = data.orientationX;
    this.orientationY = data.orientationY;
    this.orientationZ = data.orientationZ;
    this.orientationW = data.orientationW;

    this.depthVelocity = [0, 0];
    this.cameraVelocity = [0, 0, 0];
}

Kinect2Joint.prototype.update = function ( data ) {
    this.depthVelocity[0] = data.depthX - this.depthX;
    this.depthVelocity[1] = data.depthY - this.depthY;

    this.cameraVelocity[0] = data.cameraX - this.cameraX;
    this.cameraVelocity[1] = data.cameraY - this.cameraY;
    this.cameraVelocity[2] = data.cameraZ - this.cameraZ;
    
    this.trackingState = data.trackingState;

    this.depthX = data.depthX;
    this.depthY = data.depthY;
    
    this.colorX = data.colorX;
    this.colorY = data.colorY;
    this.colorZ = data.colorZ;

    this.cameraX = data.cameraX;
    this.cameraY = data.cameraY;
    this.cameraZ = data.cameraZ;

    this.orientationX = data.orientationX;
    this.orientationY = data.orientationY;
    this.orientationZ = data.orientationZ;
    this.orientationW = data.orientationW;
};

module.exports = Kinect2Joint;