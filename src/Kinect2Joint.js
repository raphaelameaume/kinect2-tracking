class Kinect2Joint {

    constructor ( id, name, data ) {
        this.id = id;
        this.name = name;

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
        this.smoothDepthVelocity = [0, 0];
        this.cameraVelocity = [0, 0, 0];
        this.smoothCameraVelocity = [0, 0, 0];
    }

    update ( data ) {
        this.depthVelocity[0] = data.depthX - this.depthX;
        this.depthVelocity[1] = data.depthY - this.depthY;

        this.smoothDepthVelocity[0] += ( this.depthVelocity[0] - this.smoothDepthVelocity[0] ) * Kinect2Joint.lerpFactor;
        this.smoothDepthVelocity[1] += ( this.depthVelocity[1] - this.smoothDepthVelocity[1] ) * Kinect2Joint.lerpFactor;

        this.cameraVelocity[0] = data.cameraX - this.cameraX;
        this.cameraVelocity[1] = data.cameraY - this.cameraY;
        this.cameraVelocity[2] = data.cameraZ - this.cameraZ;

        this.smoothCameraVelocity[0] += ( this.cameraVelocity[0] - this.smoothCameraVelocity[0] ) * Kinect2Joint.lerpFactor;
        this.smoothCameraVelocity[1] += ( this.cameraVelocity[1] - this.smoothCameraVelocity[1] ) * Kinect2Joint.lerpFactor;
        this.smoothCameraVelocity[2] += ( this.cameraVelocity[2] - this.smoothCameraVelocity[2] ) * Kinect2Joint.lerpFactor;
        
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
    }

}

Kinect2Joint.lerpFactor = 0.1;

export default Kinect2Joint;