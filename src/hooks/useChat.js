import { useEffect, useState } from 'react'
import { MainContext } from '../components/main/context/MainContext'
import { useContext } from 'react'
import io from 'socket.io-client'
import axios from 'axios'
import Swal from 'sweetalert2'

// connection to listen and send events
const socket = io('https://diceroller-chat-server.up.railway.app/')

export const useChat = () => {

    const { name, message, setFormState, nickNameRef, messageRef, messageContainerRef, setDisabled } = useContext(MainContext)
    const [messages, setMessages] = useState([]) // new messages
    const [storedMessages, setStoredMessages] = useState([]) // get stored messages from the database 
    const [firstTime, setFirstTime] = useState(false)

    const url = 'https://diceroller-chat-server.up.railway.app/api/'

    useEffect(() => {
        const receivedMessage = (message) => {
          setMessages([...messages, message])
          setTimeout(() => {
              messageContainerRef.current.lastChild.scrollIntoView();
          }, 50);
        }   
        socket.on('message', receivedMessage)      
        return () => {
          socket.off('message', receivedMessage)
        }
    }, [messages, messageContainerRef])
  

    // condition to load messages from the database only the first time  
    if (!firstTime) {
        axios.get(url + 'messages').then(res => {
            setStoredMessages(res.data.messages.reverse())
        })
        setFirstTime(true)
    }

    const onMessageSubmit = (e) => {
        e.preventDefault()
        if( name.trim().length <= 1 ) {
            nickNameRef.current.select();
            return Swal.fire({
                title: 'Please, set a nickname!',
                text: 'Thank you',
                icon: 'warning',
                confirmButtonText: 'Cool'
            })
        } 

        // send message to server 
        socket.emit('message', message, name)
        
        // save new message 
        const newMessage = {
            body: message,
            from: 'You'
        }       
        setMessages( messages.concat(newMessage) )

        // http post request to save message in the database 
        axios.post(url + 'save', {
            message: message,
            from: name
        })
        
        // clean input
        setFormState(prev => ({...prev, message:''}))
        messageRef.current.select()

        // make the scroll automatically go to the last message 
        setTimeout(() => {
            messageContainerRef.current.lastChild.scrollIntoView();
        }, 50);        
    }

    const onNickNameSubmit = (e) => {
        e.preventDefault()
        setFormState(prev => ({...prev, name:name}))        
        setDisabled(true)
        messageRef.current.select();
    }

    return {
        onMessageSubmit, 
        onNickNameSubmit,
        storedMessages,    
        messages, 
    }
    
}


// reverse():
// received messages are reversed using the reverse() method before being saved in the storedMessages state. 
// Then, when the stored messages are rendered, they will already be in reverse order 
// and displayed at the bottom of the chat.
