import PropTypes from 'prop-types'

const PartContent = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

PartContent.propTypes = {
  part: PropTypes.string.isRequired,
  exercise: PropTypes.number.isRequired
}

export default PartContent
