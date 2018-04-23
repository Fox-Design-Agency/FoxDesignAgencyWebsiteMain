import React from "react"
import {
    Holder,
    P1,
    BulletList1,
} from "react-stylux"


export default function HowTo() {
    return (
        <Holder direction="column">
            <P1 >This is currently an alpha stage project, documentation will be lack luster for a few weeks, website being working on.</P1>
            <BulletList1>

            </BulletList1>
            <P1>Utilizing three simple component types, this project simplifies layout and front-end considerations for react projects. The three component types are: containers (subject to change), holders, and blocks. Containers (subject to change) define the horizonal space and act as a wrapper for all blocks. Holders then go inside of the container to define the space for the blocks. Holders can go inside of Holders to further define space. Each holder has a pre determinded child length and will render children placed into the holder.</P1>
        </Holder>
    )
}