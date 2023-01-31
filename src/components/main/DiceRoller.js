import { useContext, useState } from 'react'
import { MainContext } from './context/MainContext'
import { OptionsButtons } from './OptionsButtons';
import { BetButtons } from './BetButtons';
import Swal from 'sweetalert2'
import dice1 from "../../assets/img/inverted-dice-1.svg";
import dice2 from "../../assets/img/inverted-dice-2.svg";
import dice3 from "../../assets/img/inverted-dice-3.svg";
import dice4 from "../../assets/img/inverted-dice-4.svg";
import dice5 from "../../assets/img/inverted-dice-5.svg";
import dice6 from "../../assets/img/inverted-dice-6.svg";
import confetti from "canvas-confetti"

const images = [dice1, dice2, dice3, dice4, dice5, dice6];

export const DiceRoller = () => {

  const { name, nickNameRef, bet, setBet, choice, setChoice, balance, setBalance, history, setHistory } = useContext(MainContext)
  const [dice, setDice] = useState([0, 0]);
  const [isShaking, setIsShaking] = useState(false);
  const [betBtnDisabled, setBetBtnDisabled] = useState(false)
  const [choiceBtnDisabled, setChoiceBtnDisabled] = useState(false)
  const [rollBtnDisabled, setRollBtnDisabled] = useState(true)
  const [showResult, setShowResult] = useState(false);

  function handleBet(amount) {
    setBet(amount);
    setBetBtnDisabled(true);
    choiceBtnDisabled && setRollBtnDisabled(false)
  }

  function handleResult(number) {
    setChoice(number)
    setChoiceBtnDisabled(true);
    betBtnDisabled && setRollBtnDisabled(false)
  }

  const handleRoll = () => {
    if( name.trim().length <= 1 ) {
        nickNameRef.current.select();
        return Swal.fire({
          title: 'Please, set a nickname!',
          text: 'Thank you',
          icon: 'warning',
          confirmButtonText: 'Cool'
      })                            
    } 
    setIsShaking(true);
    setTimeout(() => {
      const dice = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
      setDice(dice);
      const total = dice[0] + dice[1] + 2;
      
      let tempMessage = "";
      if (total === choice) {
        setBalance(balance + bet);
        tempMessage = "you won";   
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setBalance(balance - bet);
        tempMessage = "you lost";
      }

      setIsShaking(false);      
      setShowResult(true); 
      setHistory([...history, { bet: bet, message: tempMessage }]);
    }, 2500);       
  }

  return (
    <div className='dice_roller'>
        <div className="app">
          <img 
            alt='dice1'
            id="die-1" 
            className={`die ${isShaking ? 'shake' : ''}`} 
            src={showResult ? images[dice[0]] : dice1 } 
          />
          <img 
            alt='dice2'
            id="die-2" 
            className={`die ${isShaking ? 'shake' : ''}`} 
            src={showResult ? images[dice[1]] : dice1 } 
          />
        </div>

        <OptionsButtons 
          choice={ choice } 
          handleResult={ handleResult }
          disabled={ choiceBtnDisabled }
        />

        <BetButtons 
          bet={ bet }
          handleBet={ handleBet }
          disabled={ betBtnDisabled }
        />
        
        <div className="roll">
          <button onClick={ handleRoll } className='roll_btn' disabled={ rollBtnDisabled } >Roll!</button>
        </div>
    </div>
  )
}
