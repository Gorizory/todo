import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions/index'
import '../App.css';

class AddTask extends Component {
  render () {
    return (
      <div>
        <form onSubmit={(ev) => {
          ev.preventDefault();
          let text = ev.target.querySelector('input').value;
          if (text !== '') {
            this.props.addTask(text);
          }
          ev.target.querySelector('input').value = '';
        }
        }>
          <input/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({addTask: addTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTask);