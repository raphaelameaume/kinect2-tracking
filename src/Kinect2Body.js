import Kinect2Joint from './Kinect2Joint.js';
import Joints from './Joints.js';
import Junctions from './Junctions.js';

const JointsNames = Object.keys(Joints);
const JunctionNames = Object.keys(Junctions);

class Kinect2Body {

    constructor ( index, data ) {
        this.index = index;
        this.bodyIndex = data.bodyIndex;
        this.tracked = data.tracked;
        
        this.joints = [];
    }

    update ( data ) {
        this.tracked = data.tracked;

        if ( !this.tracked || !data.joints ) return;

        for ( let i = 0; i < data.joints.length; i++ ) {
            if ( !this.joints[i] ) {
                this.joints[i] = new Kinect2Joint(i, JointsNames[i], data.joints[i]);
            } else {
                this.joints[i].update(data.joints[i]);
            }
        }
    }

    getJoint ( jointName ) {
        if ( !Joints[jointName] ) {
            console.error("Kinect2Body can't find joint " + jointName);
            return undefined;
        }
    
        return this.joints[constants.Joints[jointName]];
    }

    getJoints () {
        return this.joints;
    }

    getJunction ( junctionName ) {
        const junction = Junctions[junctionName];

        if ( !junction ) {
            console.error("Kinect2Body can't find junction " + junctionName);
            return undefined;
        }

        return [
            this.joints[junction[0]], 
            this.joints[junction[1]],
        ];
    }

    getJunctions () {
        const junctions = [];

        if ( this.joints.length > 0 ) {
            for ( let i = 0; i < JunctionNames.length; i++ ) {
                const junction = this.getJunction(JunctionNames[i]);
                junctions.push(junction);
            }
        }
    
        return junctions;
    }
}

export default Kinect2Body;