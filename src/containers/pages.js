import React, { Component } from 'react';
import { connect } from 'react-redux';
import pathToRegexp from 'path-to-regexp';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';
import '../App.css';

class Pages extends Component {

  printPages() {
    let tmpMas = [];
    const tasks = this.props.tasks;
    let newTasks;
    let path;

    const re = pathToRegexp('/:type?/:page');
    switch (re.exec(this.props.match.path)[1]) {
      case 'active':
        newTasks = [];
        tasks.forEach((task, i) => {
          if (!task.done) {
            newTasks = newTasks.concat(tasks[i]);
          }
        })
        path = '/active/'
        break;
      case 'done':
        newTasks = [];
        tasks.forEach((task, i) => {
          if (task.done) {
            newTasks = newTasks.concat(tasks[i]);
          }
        })
        path = '/done/'
        break;
      default:
        newTasks = Array.from(tasks);
        path = '/'
        break;
    }

    const pageNum = newTasks.length / 10;
    for (let i = 0; i < pageNum; i++) {
      tmpMas = tmpMas.concat(i);
    }

    return tmpMas.map ((task, i) => {
      return <Link to={path + (i+1) } key={v4()}> {i + 1} </Link>
    });
  }

  render () {
    return (
      <div>
        {this.printPages()};
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(Pages);