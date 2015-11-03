var React = require('react')

module.exports = React.createClass({
  displayName: 'Header.jsx',
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <button>Like Me</button>
    )
  }
})
