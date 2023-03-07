import PropTypes from 'prop-types'
import PartContent from './part-content/PartContent'

const Content = ({ contents }) => {
  return contents?.map((content, idx) => (
    <PartContent key={idx} exercise={content?.exercise} part={content?.part} />
  ))
}

Content.propTypes = {
  contents: PropTypes.array
}

export default Content
