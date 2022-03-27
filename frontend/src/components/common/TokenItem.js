import React from 'react'
import CardMui from '../../shared/components/UIElements/CardMUI'
import Card from '../../shared/components/UIElements/Card'

const TokenItem = (props) => {
    return (
        <div>
            <Card>{props.token}</Card>
        </div>
    )
}

export default TokenItem
