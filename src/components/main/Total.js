import React from 'react'
import { useContext } from 'react'
import { MainContext } from './context/MainContext'

export const Total = () => {

    const { balance } = useContext(MainContext)

    return (
        <div className="total">
            <p className="sol_balance">$ <strong>{ balance }</strong></p>
        </div>
    )
}
