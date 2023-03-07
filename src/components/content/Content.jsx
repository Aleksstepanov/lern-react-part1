import PropTypes from 'prop-types'

const Content = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

Content.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired
}

export default Content
