import React, { Component } from "react";

import UserService from "../services/user.service";
import ArticleService from "../services/article.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      article: null
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        })
        ArticleService.getArticleById().then(
          response => {
            this.setState({
              article: response.data
            })
            ;
          },
          error => {
            this.setState({
              content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
          }
        );
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
