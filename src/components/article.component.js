import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import ArticleService from "../services/article.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.handleArticle = this.handleArticle.bind(this);
    
        this.state = {
            title:"",
            category:"",
            content:"",
            image:"",
            createdAt:"",
          successful: false,
          message: "",
          redirect:null
        };
      }


      handleArticle(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          successful: false
        });
    
        this.form.validateAll();
    
        
          ArticleService.postArticle(
            this.state.title,
            this.state.content,
          ).then(
            response => {
              this.setState({
                message: "article créé"+response.data.title,
                successful: true
              });
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                successful: false,
                message: resMessage
              });
            }
          );
        
      }
    




  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    //this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
         <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleArticle}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="title">title</label>
                  <Input
                    type="textarea"
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    //validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="content">content</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChangeContent}
                    //validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">category</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="category"
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                    //validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">image</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="image"
                    value={this.state.image}
                    onChange={this.onChangeImage}
                    //validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="createdAt">createdAt</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="createdAt"
                    value={this.state.createdAt}
                    onChange={this.onChangeCreatedAt}
                    //validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">publier</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
