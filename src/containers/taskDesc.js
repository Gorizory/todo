import React, { Component } from 'react';
import { connect } from 'react-redux';
import pathToRegexp from 'path-to-regexp';

class TaskDesc extends Component {
  render () {
    const re = pathToRegexp('::num');
    const num = re.exec(this.props.match.params.number)[1] - 1;

    return (
      <div>
        <h4>Задача: {this.props.tasks[num].name}</h4>
        <p>{this.props.tasks[num].desc}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TaskDesc);