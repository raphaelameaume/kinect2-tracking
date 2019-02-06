# kinect2-tracking
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com/raphaelameaume/kinect2-tracking/blob/master/package.json)\
Tiny wrapper to read Kinect data provided by [kinect-tracking-server](https://github.com/raphaelameaume/kinect2-tracking-server)

> :warning: This is an ES6 library made for experimental purpose.

## Installation

```bash
npm install kinect2-tracking
```
___
## Usage

Import the library
```js
import Kinect2Tracking from 'kinect2-tracking';
```

Create a new instance of tracking
```js
const kinectTracking = new Kinect2Tracking();
```

Connect to a kinect2-tracking-server
```js
kinectTracking.listen(io.connect('http://localhost:3000'));
```

Or simulate data from samples
```js
const data = await fetch('/samples/boxer.json').json();
const speed = 1; // change speed of the simulation
kinectTracking.simulate(data, speed);
```

Read data
```js
function update () {
    const bodies = kinectTracking.getBodies(); // -> [Kinect2Body, Kinect2Body, ...]

    bodies.forEach( body => {
        if ( body.tracked ) {
            const joints = body.getJoints(); // -> [Kinect2Joint, Kinect2Joint, ...]
            const junctions = body.getJunctions(); // -> [[Kinect2Joint, Kinect2Joint], [Kinect2Joint, Kinect2Joint], ...]

            joints.forEach( joint => {
                // do what you want
            });
        }
    }

    requestAnimationFrame(update);
}
```

Target a specific joint
```js
import { Joints } from 'kinect2-tracking';

const wristLeft = body.getJoint(Joints.WRIST_LEFT);
```

Target a specific junction
```js
import { Junctions } from 'kinect2-tracking';

const [ shoulderLeft, elbowLeft ] = body.getJunction(Junctions.SHOULDER_ELBOW_LEFT);
```
___
## API

### Kinect2Tracking

#### `Kinect2Tracking.listen(socket)`
Connect to a socket streaming kinect data, typically [kinect-tracking-server](https://github.com/raphaelameaume/kinect2-tracking-server)

#### `Kinect2Tracking.simulate(data, speed)`
Loop over a set of data, recorded by [kinect-tracking-server](https://github.com/raphaelameaume/kinect2-tracking-server). 
See available [samples](https://github.com/raphaelameaume/kinect2-tracking/tree/master/samples).

#### `Kinect2Tracking.getBodies()`
Returns an array of potential Kinect2Body (tracked or not).

#### `Kinect2Tracking.getBody(bodyIndex)`
Returns a Kinect2Body ( tracked or not).

#### `Kinect2Tracking.getJoint(bodyIndex, jointName)`
Returns data for a specific joint on a specific body. Returns undefined if body is not tracked.\
See Joints for details.

#### `Kinect2Tracking.getJoints(bodyIndex)`
Returns all tracked joints of a specific body. Returns an empty array if body is not tracked.

#### `Kinect2Tracking.getJunction(bodyIndex, junctionName)`
Returns data for a specific junction on a specific body. Returns an empty array if body is not tracked.\
See Junctions for details.

#### `Kinect2Tracking.getJunctions(bodyIndex)`
Returns all tracked junctions of a specific body. Returns an empty array if body is not tracked.

### Kinect2Body
#### `Kinect2Body.getJoint(jointName)`
Returns a Kinect2Joint. Returns undefined if body is not tracked.
See Joints for details.

#### `Kinect2Body.getJoints()`
Returns all tracked joints of the body. Returns an empty array if body is not tracked.

#### `Kinect2Body.getJunction(junctionName)`
Returns an array of two Kinect2Joint for a specific junction. Returns an empty array if body is not tracked.
See Junctions for details.

#### `Kinect2Body.getJunctions()`
Returns a two dimensional array of Kinect2Joint. Returns an empty array if body is not tracked.

### Joints
name|id
---|---
SPINE_BASE | 0
SPINE_MID | 1
NECK | 2
HEAD | 3
SHOULDER_LEFT | 4
ELBOW_LEFT | 5
WRIST_LEFT | 6
HAND_LEFT | 7
SHOULDER_RIGHT | 8
ELBOW_RIGHT | 9
WRIST_RIGHT | 10
HAND_RIGHT | 11
HIP_LEFT | 12
KNEE_LEFT | 13
ANKLE_LEFT | 14
FOOT_LEFT | 15
HIP_RIGHT | 16
KNEE_RIGHT | 17
ANKLE_RIGHT | 18
FOOT_RIGHT | 19
SPINE_SHOULDER | 20
HAND_TIP_LEFT | 21
THUMB_LEFT | 22
HAND_TIP_RIGHT | 23
THUMB_RIGHT | 24

### Junctions
name|joints
---|---
HEAD_NECK | [ HEAD, NECK ]
NECK_SPINE | [ NECK, SPINE_MID ]
SPINE | [ SPINE_MID, SPINE_BASE ]
NECK_SHOULDER_LEFT | [ NECK, SHOULDER_LEFT ]
NECK_SHOULDER_RIGHT | [ NECK, SHOULDER_RIGHT ]
SHOULDER_ELBOW_LEFT | [ SHOULDER_LEFT, ELBOW_LEFT ]
SHOULDER_ELBOW_RIGHT | [ SHOULDER_RIGHT, ELBOW_RIGHT ]
ELBOW_WRIST_LEFT | [ ELBOW_LEFT, WRIST_LEFT ]
ELBOW_WRIST_RIGHT | [ ELBOW_RIGHT, WRIST_RIGHT ]
WRIST_HAND_LEFT | [ WRIST_LEFT, HAND_LEFT ]
WRIST_HAND_RIGHT | [ WRIST_RIGHT, HAND_RIGHT ]
HAND_TIP_LEFT | [ HAND_LEFT, HAND_TIP_LEFT ]
HAND_TIP_RIGHT | [ HAND_RIGHT, HAND_TIP_RIGHT ]
SPINE_HIP_LEFT | [ SPINE_BASE, HIP_LEFT ]
SPINE_HIP_RIGHT | [ SPINE_BASE, HIP_RIGHT ]
HIP_KNEE_LEFT | [ HIP_LEFT, KNEE_LEFT ]
HIP_KNEE_RIGHT | [ HIP_RIGHT, KNEE_RIGHT ]
KNEE_ANKLE_LEFT | [ KNEE_LEFT, ANKLE_LEFT ]
KNEE_ANKLE_RIGHT | [ KNEE_RIGHT, ANKLE_RIGHT ]
ANKLE_FOOT_LEFT | [ ANKLE_LEFT, FOOT_LEFT ]
ANKLE_FOOT_RIGHT | [ ANKLE_RIGHT, FOOT_RIGHT ]


## License
MIT, see [LICENSE.md](https://github.com/raphaelameaume/kinect2-tracking/blob/master/LICENSE.md) for details.
