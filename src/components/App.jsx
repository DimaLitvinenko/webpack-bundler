import React from 'react'
import Icon from '../images/react-icon.svg'

export default function App() {
    return (
        <React.Fragment>
            <img src={Icon} alt='react-icon'/>
            <h1>Webpack is <u>awesome</u>!</h1>
        </React.Fragment>
    )
}