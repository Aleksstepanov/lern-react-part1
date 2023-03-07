import PropTypes from 'prop-types'

const Total = ({ exercises }) => {
  const total = exercises?.reduce((result, exercise) => (result += exercise), 0) || 0
  return <p>Number of exercises {total}</p>
}

Total.propTypes = {
  exercises: PropTypes.array
}

export default Total
