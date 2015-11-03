var React = require('react')
var Header = require('./Header.jsx')

var LikeMeButton = React.createClass({


  getInitialState: function() {
    return {
      likescount: 0,
      clickstatus: 'Like Me',
      classname: 'button blue'
    };
  },

  handleClick: function() {
    this.setState({
      likescount: this.state.likescount + 1,
      clickstatus: 'Liked',
      classname: 'button green'
    });
  },

  'displayName': 'BlankPage.jsx',
  render: function () {
    return <div className='page'>
      <button className={this.state.classname} onClick={this.handleClick}>{this.state.clickstatus}</button>
    </div>
  }
})

module.exports = React.createClass({
  render: function() {
    return <LikeMeButton />
  }
})
