import { Chat } from "./Chat"
import { MainProvider } from "./context/MainProvider"
import { DiceRoller } from "./DiceRoller"
import { Total } from "./Total"
import { Wallet } from "./Wallet"

export const Main = () => {
    return (
        <MainProvider>
            <Total />
            <div className="container">
                <Chat />
                <DiceRoller />
                <Wallet />
            </div> 
        </MainProvider>
    )
}
