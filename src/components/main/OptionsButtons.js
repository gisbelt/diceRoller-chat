import PropTypes from "prop-types";

const choiceOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const OptionsButtons = ({ choice, handleResult, disabled }) => {

  return (
    <div className="choice">
      <h3>Select a possible result</h3>
      {/* <p>Valor escogido: {choice}</p> */}
      <div className="tools">
        {choiceOptions.map(option => (
          <button key={option} onClick={() => handleResult(option)} className='choice_btn' disabled={disabled && choice === option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

OptionsButtons.propTypes = {
  choice: PropTypes.number.isRequired,
  handleResult: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}