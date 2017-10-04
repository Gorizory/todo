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
          let text = ev.target.querySelector('input-todo').value;
          let desc = ev.target.querySelector('input-desc').value;
          if (text !== '') {
            this.props.addTask({text, desc});
          }
          ev.target.querySelector('input').value = '';
        }
        }>
          <input placeholder='Задача' className='input-todo'/>
          <input placeholder='Описание' className='input-desc'/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({addTask: addTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTask);