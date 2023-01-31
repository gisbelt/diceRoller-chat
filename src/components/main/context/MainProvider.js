import { useRef, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { MainContext } from './MainContext'

export const MainProvider = ({ children }) => {

    // Chat 
    const { onInputChange, name, message, setFormState } = useForm({
        name: '',
        message: '',
    })
    const [disabled, setDisabled] = useState(false)
    const nickNameRef = useRef()
    const messageRef = useRef()
    const messageContainerRef = useRef(null)

    // DiceRoller 
    const [bet, setBet] = useState(0);
    const [choice, setChoice] = useState(0)
    const [balance, setBalance] = useState(0);
    const [history, setHistory] = useState([]);

    return (
        <MainContext.Provider 
            value={{ 
                onInputChange, 
                name, 
                message, 
                setFormState, 
                nickNameRef, 
                messageRef, 
                messageContainerRef, 
                disabled, 
                setDisabled,
                balance,
                setBalance,
                bet,
                setBet,
                choice,
                setChoice,
                history,
                setHistory,
            }}
        >
            { children }
        </MainContext.Provider>
    )
}
