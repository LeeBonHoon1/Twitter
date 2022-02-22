import React from 'react'
import propTypes from "prop-types"
import 'antd/dist/antd.css'
import Head from 'next/head'

const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NordBird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component : propTypes.elementType.isRequired
}

export default NodeBird