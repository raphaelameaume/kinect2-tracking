import Kinect2Body from './Kinect2Body.js';
import Joints from './Joints.js';
import Junctions from './Junctions.js';

class Kinect2Tracking {

    constructor () {
        this.bodies = [];
        this.simulation = null;
    }

    listen ( socket ) {
        if ( !socket || socket && !socket.io ) {
            console.error("Kinect2Tracking :: you need to provide a socket instance.");
            return;
        }

        socket.on('bodyFrame', ( bodyFrame ) => {
            for ( let i = 0; i < bodyFrame.bodies.length; i++ ) {
                if ( !this.bodies[i] ) {
                    this.bodies[i] = new Kinect2Body(i, bodyFrame.bodies[i]);
                } else {
                    this.bodies[i].update(bodyFrame.bodies[i]);
                }
            }
        });
    }

    simulate ( data, speed ) {
        if ( !data.bodyFrame ) {
            console.error("Kinect2Tracking can not simulate data. Wrong format.");
        }
    
        let frameIndex = 0;
        let frameId = 0;
        let frameRate = 1 / speed || 1;

        if ( this.simulation ) {
            cancelAnimationFrame(this.simulation);
        }
    
        const run = () => {
            if ( frameId < data.bodyFrame.length ) {
                const frameData = data.bodyFrame[frameId];
    
                if ( ( frameIndex % frameRate ) === 0 ) {
                    for ( let i = 0; i < frameData.bodies.length; i++ ) {
                        if ( !this.bodies[i] ) {
                            this.bodies[i] = new Kinect2Body(i, frameData.bodies[i]);
                        } else {
                            this.bodies[i].update(frameData.bodies[i]);
                        }
                    }
                
                    frameId++;
                }
            } else {
                frameId = 0;
            }
    
            frameIndex++;
    
            this.simulation = requestAnimationFrame(run);
        }
    
        run();
    }

    getJoint ( bodyIndex, jointName ) {
        if ( !this.bodies[bodyIndex] ) {
            console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
            return;
        }
    
        return this.bodies[bodyIndex].getJoint(jointName);
    }

    getJoints ( bodyIndex ) {
        if ( !this.bodies[bodyIndex] ) {
            console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
            return;
        }
    
        return this.bodies[bodyIndex].getJoints();
    }

    getJunction ( bodyIndex, junctionName ) {
        if ( !this.bodies[bodyIndex] ) {
            console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
            return;
        }
    
        return this.bodies[bodyIndex].getJunction(junctionName);
    }

    getJunctions ( bodyIndex ) {
        if ( !this.bodies[bodyIndex] ) {
            console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
            return;
        }

        return this.bodies[bodyIndex].getJunctions();
    }

    getBody () {
        if ( !this.bodies[bodyIndex] ) {
            console.error("Kinect2Tracking can not access data for bodyIndex " + bodyIndex);
            return;
        }
    
        return this.bodies[bodyIndex];
    }

    getBodies () {
        return this.bodies;
    }

}

Kinect2Tracking.Joints = Joints;
Kinect2Tracking.Junctions = Junctions;

export default Kinect2Tracking;