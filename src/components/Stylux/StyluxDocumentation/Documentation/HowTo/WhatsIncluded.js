import React from "react";

import {
    Holder,
    List,
    H,
} from "react-stylux"

export default function WhatsIncluded() {

    return (
        <Holder
            direction="column">
            <List>
                {"Wrapper"}
                {"Holder"}
                {"HR"}
                {"H box='1-5' vars='1-5'"}
                {" P box='1-5'"}
                {" PLQ (Pull Quotes) box='1-2'"}
                {" Navbar box='1-2'"}
                {" SubNavbar box='1'"}
                {" Dropdowns box='1'"}
                {" Brand box='1-5'"}
                {" Toggler box='1-4'"}
                {" Modals box=' 1-3'"}
                {" Popup box='1-2'"}
                {"List box='1-4'"}
                {" Figure"}
                {" Image box='1-8'"}
                {" Hero box='1-5'"}
                {" Carousel  box='1-5'"}
                {" Table box='1'"}
                {"Button box='1-5'"}
            </List>

        </Holder>
    )
}