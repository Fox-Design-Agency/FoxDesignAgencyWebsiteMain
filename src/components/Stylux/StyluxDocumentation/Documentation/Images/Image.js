import React from "react";

import {
    Holder,
    H42,
    BulletList1,
    HR,
    H34,
} from "react-stylux"

export default function ImageView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H42>Available Props</H42>
                <BulletList1 width="300px">
                    {"size='sm'"}
                    {"type"}
                    {"id"}
                    {"className"}
                    {"aniCount"}
                    {"aniTime"}
                    {"aniName"}
                    {"aniDur"}
                    {"transform"}
                    {"transformOrigin"}
                    {"aniFillMode"}
                    {"smDis"}
                    {"mdDis"}
                    {"display"}
                    {"margin"}
                    {"padding"}
                    {"shadow"}
                    {"hovShadow"}
                    {"width"}
                    {"height"}
                    {"smwidth"}
                    {"smheight"}
                    {"mdwidth"}
                    {"mdheight"}
                    {"borderRadius"}
                </BulletList1>
            </Holder>
            <Holder direction="column">
                <H34>Image</H34>
                <HR />
                <H42>Some Info</H42>
                <BulletList1>
                    {"type='circle'"}
                    {"type='oval'"}
                    {"type='rounded'"}
                    {"type='square'"}
                    {"type='roundedRectangle'"}
                    {"type='rectangle'"}
                    {"type='tallRoundedRectangle'"}
                    {"type='tallRectangle'"}
                    {"size= 'tn' 'exsm' 'sm' 'md' 'lg' 'exlg'"}
                </BulletList1>
                <HR />
                <H42>Suggested Use</H42>
                <BulletList1>
                    {"Use for images and image related things being that of images."}
                </BulletList1>
                <HR />
                <H42>Size Information</H42>
                <BulletList1>
                    {"Large: ??"}
                    {"Medium: ??"}
                    {"Small: ??"}
                </BulletList1>

            </Holder>
        </Holder>

    )
}