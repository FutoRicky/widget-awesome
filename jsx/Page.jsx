var React = require('react')
var Header = require('./Header.jsx')

var LikeMeButton = React.createClass({
  getInitialState: function() {
    return {
      likescount: 0,
      clickstatus: 'Like Me',
      classname: 'button blue',
      message: ''
    };
  },

  handleClick: function() {
    if(this.state.clickstatus !== 'Liked') {
      this.setState({
        likescount: this.state.likescount + 1,
        clickstatus: 'Liked',
        classname: 'button green'
      });
    } else {
      this.setState({message: 'You can only like once'});
    }
  },

  'displayName': 'BlankPage.jsx',
  render: function () {
    return <div className='page'>
      <button className={this.state.classname} onClick={this.handleClick}>{this.state.clickstatus}</button>
      <p>{this.state.message}</p>
    </div>
  }
})

module.exports = React.createClass({
  render: function() {
    return <LikeMeButton />
  }
})
