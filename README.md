# kinect2-tracking
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com/raphaelameaume/kinect2-tracking/blob/master/package.json)
Tiny wrapper to read Kinect data provided by [kinect-tracking-server](https://github.com/raphaelameaume/kinect2-tracking-server)

> :warning: This is an ES6 library made for experimental purpose.

## Installation

```bash
npm install kinect2-tracking
```

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

## License
MIT, see [LICENSE.md](https://github.com/raphaelameaume/kinect2-tracking/blob/master/LICENSE.md) for details.
