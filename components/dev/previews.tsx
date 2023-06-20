import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Experience from "../experience";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Experience">
                <Experience/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
