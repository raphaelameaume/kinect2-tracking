import Joints from './Joints.js';

const Junctions = {
    HEAD_NECK: [ Joints.HEAD, Joints.NECK ],
    NECK_SPINE: [ Joints.NECK, Joints.SPINE_MID ],
    SPINE: [ Joints.SPINE_MID, Joints.SPINE_BASE ],

    NECK_SHOULDER_LEFT: [ Joints.NECK, Joints.SHOULDER_LEFT ],
    NECK_SHOULDER_RIGHT: [ Joints.NECK, Joints.SHOULDER_RIGHT ],

    SHOULDER_ELBOW_LEFT: [ Joints.SHOULDER_LEFT, Joints.ELBOW_LEFT ],
    SHOULDER_ELBOW_RIGHT: [ Joints.SHOULDER_RIGHT, Joints.ELBOW_RIGHT ],

    ELBOW_WRIST_LEFT: [ Joints.ELBOW_LEFT, Joints.WRIST_LEFT ],
    ELBOW_WRIST_RIGHT: [ Joints.ELBOW_RIGHT, Joints.WRIST_RIGHT ],

    WRIST_HAND_LEFT: [ Joints.WRIST_LEFT, Joints.HAND_LEFT ],
    WRIST_HAND_RIGHT: [ Joints.WRIST_RIGHT, Joints.HAND_RIGHT ],

    HAND_TIP_LEFT: [ Joints.HAND_LEFT, Joints.HAND_TIP_LEFT ],
    HAND_TIP_RIGHT: [ Joints.HAND_RIGHT, Joints.HAND_TIP_RIGHT ],
    
    SPINE_HIP_LEFT: [ Joints.SPINE_BASE, Joints.HIP_LEFT ],
    SPINE_HIP_RIGHT: [ Joints.SPINE_BASE, Joints.HIP_RIGHT ],

    HIP_KNEE_LEFT: [ Joints.HIP_LEFT, Joints.KNEE_LEFT ],
    HIP_KNEE_RIGHT: [ Joints.HIP_RIGHT, Joints.KNEE_RIGHT ],

    KNEE_ANKLE_LEFT: [ Joints.KNEE_LEFT, Joints.ANKLE_LEFT ],
    KNEE_ANKLE_RIGHT: [ Joints.KNEE_RIGHT, Joints.ANKLE_RIGHT ],

    ANKLE_FOOT_LEFT: [ Joints.ANKLE_LEFT, Joints.FOOT_LEFT ],
    ANKLE_FOOT_RIGHT: [ Joints.ANKLE_RIGHT, Joints.FOOT_RIGHT ],
};

export default Joints;