import React from "react";

import {
    Holder,
    P,

} from "react-stylux"

export default function AnimationNotes() {

    return (
        <Holder
            direction="column">
            <P>The animation library is currently mostly from: animate.css, Massive credit for the animations to Daniel Eden - animate.css - http://daneden.me/animate</P>

            all blocks have access to:
- animationIterationCount in the form of: props.aniCount,
- animationTimingFunction in the form of: props.aniTime,
- animationName in the form of: props.aniName,
- animationDuration in the form of: props.aniDur,
- transformOrigin in the form of: props.transformOrigin,

animate.css recommends the following defaults:
aniDur ='1s'
aniFillMode = 'both'

if wanting an infinite animation:
aniCount = 'infinite'


#### Animation Names

to see what these do, please refer to animation [Acknowledgments](#acknowledgments) or go to http://daneden.me/animate
each animation will be associated with suggested defaults, these will be improved as more testing is accomplished.

- bounce
    - transform-origin: center bottom
- pulse
- handShake
    - animation-timing-function: ease-in-out
- jello
    - transform-origin: center
- bounceIn
    - animation-duration: 0.75s
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeOut
- flipInX (needs better integration)
- flipInY (needs better integration)
- flipOutX (needs better integration)
- flipOutY (needs better integration)
- hinge
    - animation-duration: 2s
- slideInLeft
- slideInRight
- slideOutLeft
- slideOutRight

        </Holder>
    )
}