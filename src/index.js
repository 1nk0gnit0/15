import React from 'react';
import ReactDOM from 'react-dom';
import getDataTime from './getDataTime.js';

class СommentsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    if (localStorage.getItem('comments') !== null) this.state.comments = JSON.parse(localStorage.getItem('comments'));
  }

  addComments(name, msg) {
    const comments = this.state.comments;
    comments.push({
      name: name,
      msg: msg,
      time: getDataTime()
    });

    this.setState({comments});
    localStorage.clear();
    localStorage.setItem('comments', JSON.stringify(this.state.comments))
  }

  delComments(key) {
    const comments = this.state.comments;
    comments.splice(key, 1);
    localStorage.clear();
    localStorage.setItem('comments', JSON.stringify(this.state.comments))
    this.setState({comments});
  }

  render() {
    return (
      <div>
        <form>
          <input id="item_name"
            type="text"
            placeholder="Имя"
          />
          <input id="item_msg" type="text" placeholder="Сообщение"/>
          <button
            type="button"
            name="button"
            onClick={() => {
              if (document.querySelector('#item_name').value != '' && document.querySelector('#item_msg').value != '') {
                this.addComments(document.querySelector('#item_name').value, document.querySelector('#item_msg').value);
              }
            }}
          >Отправить</button>
        </form>
        <ul id="commentsList">
          {
            this.state.comments.reverse().map((comment, i) => {
              return (
                <li className="comment_item" key={i}>
                  <h3>{comment.name}</h3>
                  <p>{comment.msg}</p>
                  <p>{comment.time}</p>
                  <button
                    type="button"
                    name="button"
                    onClick={() => {
                      this.delComments(i);
                    }}
                  >Удалить</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <СommentsApp />,
  document.querySelector('#app')
);
