import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8090/comments';

let accessToken = authHeader();
let str = JSON.stringify(accessToken);
console.log("acces : "+str);

class CommentService {

  // On post un article
  // param : title, category, content, image, createdAt
  postComment(title, category, content, image, createdAt) {
    return axios 
    .post(API_URL + "/", {
        author,
        content
      }, 
      { 
        headers: JSON.stringify(authHeader())
      })
      .then(response => {
        if (response.data) {  
          // Condition de traitement des données
        }

        return response.data;
      });
  }

  // On récupère tous les articles
  getAllComment() {
    return axios
      .get(API_URL + '/', 
        { 
          headers: JSON.stringify(authHeader())
        })
        .then(response => {
          if (response.data) {  
            // Condition de traitement des données
          }
  
          return response.data;
        });
  }

  // On récupère l'article par id
  // param : id
  getCommentById(id) {
    return axios
    .get(API_URL + '/', 
        { 
          id : id
        },
        { 
          headers: JSON.stringify(authHeader())
        }
    ).then(response => {
      if (response.data) {
        // Condition de traitement des données
      }

      return response.data;
    });
  }

  // On modifie un article
  // param : id
  putCommentById(id, author, content) {
    return axios
    .put(API_URL + '/' + id, 
        { 
          author,
          content
        },
        { 
          headers: JSON.stringify(authHeader())
        }
    ).then(response => {
      if (response.data) {
        // Condition de traitement des données
      }

      return response.data;
    });
  }

   // On supprime un article
  // param : id
  deleteCommentById(id, author, content) {
    return axios
    .delete(API_URL + '/' + id, 
        { 
          author,
          content
        },
        { 
          headers: JSON.stringify(authHeader())
        }
    ).then(response => {
      if (response.data) {
        // Condition de traitement des données
      }

      return response.data;
    });
  }

}

export default new CommentService();