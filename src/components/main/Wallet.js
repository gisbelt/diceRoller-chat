import { useContext } from "react"
import { MainContext } from "./context/MainContext"

export const Wallet = () => {

    const { name, history } = useContext(MainContext)

    return (
        <>
            <div className="wallet">
                <table>
                    <thead>
                        <tr>
                            <th>Nickname</th>
                            <th>BET</th>
                            <th>WIN/LOSE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index} className={`${ item.message === 'you won' ? 'win' : 'lose'}`}>
                                <td>{ name }</td>
                                <td>{ item.bet }</td>
                                <td>{ item.message }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
            </div>           
        </>
    )
    }
