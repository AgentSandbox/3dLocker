import React from 'react'
import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx"
import {RenderElements} from "./RenderElements.jsx"
import RenderBlock from "./RenderBlock.jsx";

export const Render = () => {
    const {idProject} = useConfiguratorRender()

    const renderElements = idProject === false
        ? <RenderElements myPath={"zaglushka"}/>
        : <RenderBlock/>

    return (
        <>
            {renderElements}
        </>
    )
}
