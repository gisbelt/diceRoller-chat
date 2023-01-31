import PropTypes from "prop-types";

const betOptions = [0.5, 1, 1.5, 2, 5];

export const BetButtons = ({ bet, handleBet, disabled }) => {
    return (
        <div className="amount">
          <h3>Pick the Amount And the Bet!</h3>
          {/* <p>Apuesta escogida: {bet}</p> */}
          <div className="tools">
            {betOptions.map(option => (
              <button key={option} onClick={() => handleBet(option)} className='amount_btn' disabled={disabled && bet === option}>
                $ {option}
              </button>
            ))}
          </div>
        </div>
    )
}

BetButtons.propTypes = {
    bet: PropTypes.number.isRequired,
    handleBet: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}