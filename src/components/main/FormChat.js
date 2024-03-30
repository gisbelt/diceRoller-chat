import { MainContext } from './context/MainContext'
import { useContext } from 'react'
import { useChat } from '../../hooks/useChat'

export const FormChat = () => {

    const { onInputChange, name, message, nickNameRef, messageRef, messageContainerRef, disabled } = useContext(MainContext)
    const { onNickNameSubmit, onMessageSubmit, storedMessages, messages, isLoading } = useChat()

    return (
        <>
            <div className="chat_content">
                <div ref={ messageContainerRef } id="message-container">
                    { isLoading && (
                        <div className="loader" />
                    )}

                    {/* Chat stored messages  */}
                    {storedMessages.map((message, index) => (
                        <div key={ index } className={ `message_body ${message.from === name ? 'right' : 'left'}` } >
                            <div className={ `message ${message.from === name ? 'bg-success' : 'bg-grey'}` }>
                                <div className="message_text">
                                    <strong>{message.from}:</strong> {message.message}
                                </div>
                            </div>
                        </div>
                    )).reverse()}

                    {/* Chat messages  */}
                    {messages.map((message, index) => (
                        <div key={ index } className={ `message_body ${message.from === 'You' ? 'right' : 'left'}` } >
                            <div className={ `message ${message.from === 'You' ? 'bg-success' : 'bg-grey'}` }>
                                <div className="message_text">
                                    <strong>{message.from}:</strong> {message.body}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="chat_form">
                <form onSubmit={ onNickNameSubmit } id="set-container" className=''>
                    <input
                        ref={ nickNameRef }
                        id="name-input"
                        type="text"
                        name="name"
                        value={ name }
                        placeholder="Nickname..."
                        onChange={ onInputChange }
                        disabled={ disabled }
                    />
                    <button type="submit" className="chat_btn" disabled={ disabled }>Set</button>
                </form>

                <form onSubmit={ onMessageSubmit } id="send-container" className=''>
                    <input
                        ref={ messageRef }
                        id="message-input"
                        type="text"
                        name="message"
                        value={ message }
                        placeholder="TYPE"
                        onChange={ onInputChange }
                    />
                    <button type="submit" className="chat_btn">Send</button>
                </form>
            </div>            
        </>
    )
}
