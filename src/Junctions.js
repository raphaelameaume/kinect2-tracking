var Junctions = {
    HEAD_NECK: [ joints.HEAD, joints.NECK ],
    NECK_SPINE: [ joints.NECK, joints.SPINE_MID ],
    SPINE: [ joints.SPINE_MID, SPINE_BASE ],

    NECK_SHOULDER_LEFT: [ joints.NECK, joints.SHOULDER_LEFT ],
    NECK_SHOULDER_RIGHT: [ joints.NECK, joints.SHOULDER_RIGHT ],

    SHOULDER_ELBOW_LEFT: [ joints.SHOULDER_LEFT, joints.ELBOW_LEFT ],
    SHOULDER_ELBOW_RIGHT: [ joints.SHOULDER_RIGHT, joints.ELBOW_RIGHT ],

    ELBOW_WRIST_LEFT: [ joints.ELBOW_LEFT, joints.WRIST_LEFT ],
    ELBOW_WRIST_RIGHT: [ joints.ELBOW_RIGHT, JOINT.WRIST_RIGHT ],

    WRIST_HAND_LEFT: [ joints.WRIST_LEFT, joints.HAND_LEFT ],
    WRIST_HAND_RIGHT: [ joints.WRIST_RIGHT, joints.HAND_RIGHT ],

    HAND_TIP_LEFT: [ joints.HAND_LEFT, joints.HAND_TIP_LEFT ],
    HAND_TIP_RIGHT: [ joints.HAND_RIGHT, joints.HAND_TIP_RIGHT ],
    
    SPINE_HIP_LEFT: [ joints.SPINE_BASE, joints.HIP_LEFT ],
    SPINE_HIP_RIGHT: [ joints.SPINE_BASE, joints.HIP_RIGHT ],

    HIP_KNEE_LEFT: [ joints.HIP_LEFT, joints.KNEE_LEFT ],
    HIP_KNEE_RIGHT: [ joints.HIP_RIGHT, joints.KNEE_RIGHT ],

    KNEE_ANKLE_LEFT: [ joints.KNEE_LEFT, joints.ANKLE_LEFT ],
    KNEE_ANKLE_RIGHT: [ joints.KNEE_RIGHT, joints.ANKLE_RIGHT ],

    ANKLE_FOOT_LEFT: [ joints.ANKLE_LEFT, joints.FOOT_LEFT ],
    ANKLE_FOOT_RIGHT: [ joints.ANKLE_RIGHT, joints.FOOT_RIGHT ],
};

module.exports = Junctions;