import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { checkBox, uncheckBox } from '../actions/index';
import { v4 } from 'node-uuid';
import pathToRegexp from 'path-to-regexp';

export class TaskList extends Component {

  showList() {
    let tasks = this.props.tasks;
    let newTasks;
    let result;

    let page = this.props.match.params.page - 1;
    if (page === undefined) {
      page = 0;
      result = undefined;
    } else {
      const re = pathToRegexp('/:type?/:page');
      result = re.exec(this.props.match.path)[1];
    }

    switch (result) {
      case 'active':
        newTasks = [];
        tasks.forEach((task, i) => {
          if (!task.done) {
            newTasks = newTasks.concat(tasks[i]);
          }
        });
        break;
      case 'done':
        newTasks = [];
        tasks.forEach((task, i) => {
          if (task.done) {
            newTasks = newTasks.concat(tasks[i]);
          }
        });
        break;
      default:
        newTasks = Array.from(tasks);
        break;
    }

    tasks = Array.from(newTasks);

    if (page > tasks.length/10) {
      return <div> Такой страницы не существует! </div>
    }

    let j = 0;

    return this.props.tasks.map ((task, i) => {
      if (j >= page * 10 && j < (page + 1) * 10) {
        if (!task.done) {
          if (result !== 'done') {
            j++;
            return (
              <div className="App-task" key={v4()}>
                <input type="checkbox" onChange={() => this.props.checkBox(i)}/>
                <Link to={'/task/:' + (i + 1)}>{task.name}</Link>
              </div>
            )
          } else {return <span key={v4()}/>;}
        } else {
          if (result !== 'active') {
            j++;
            return (
              <div className="App-task" key={v4()}>
                <input type="checkbox" defaultChecked onChange={() => this.props.uncheckBox(i)}/>
                <s><Link to={'/task/:' + (i + 1)}>{task.name}</Link></s>
              </div>
            )
          } else {return <span key={v4()}/>;}
        }
      } else {
        j++;
        return <span key={v4()}/>;
      }
    });
  }

  render () {
    return (
      <div>
        {this.showList()}
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
      tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({checkBox: checkBox, uncheckBox: uncheckBox}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);