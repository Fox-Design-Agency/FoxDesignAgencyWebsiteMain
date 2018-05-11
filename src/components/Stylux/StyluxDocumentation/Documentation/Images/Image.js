import React from "react";

import {
    Holder,
    List,
    HR,
    H,
} from "react-stylux"

export default function ImageView() {

    return (
        <Holder
            alignBlock1="flex-start"
            alignBlock2="flex-start">
            <Holder
                direction="column">
                <H>Available Props</H>
                <List width="300px">
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
                </List>
            </Holder>
            <Holder direction="column">
                <H>Image</H>
                <HR />
                <H>Some Info</H>
                <List>
                    {"type='circle'"}
                    {"type='oval'"}
                    {"type='rounded'"}
                    {"type='square'"}
                    {"type='roundedRectangle'"}
                    {"type='rectangle'"}
                    {"type='tallRoundedRectangle'"}
                    {"type='tallRectangle'"}
                    {"size= 'tn' 'exsm' 'sm' 'md' 'lg' 'exlg'"}
                </List>
                <HR />
                <H>Suggested Use</H>
                <List>
                    {"Use for images and image related things being that of images."}
                </List>
                <HR />
                <H>Size Information</H>
                <List>
                    {"Large: ??"}
                    {"Medium: ??"}
                    {"Small: ??"}
                </List>

            </Holder>
        </Holder>

    )
}