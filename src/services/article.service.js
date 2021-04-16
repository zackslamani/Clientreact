import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8090/article';

let accessToken = authHeader();
let str = accessToken;
console.log("acces : "+str);
class ArticleService {

  // On post un article
  // param : title, category, content, image, createdAt
  postArticle(title, category, content, image, createdAt) {
      category = null;
      createdAt = new Date();
    return axios 
    .post(API_URL + '/', {
        title,
        category,
        content,
        image,
        createdAt
      }, 
      { 
        headers: str
      })
      .then(response => {
          console.log("fgfgf")
          console.log(response)
        if (response.data) {  
          // Condition de traitement des données
        }

        return response.data;
      }).catch (err =>
          console.log(err)
      );
  }

  // On récupère tous les articles
  getAllArticle() {
    return axios
      .get(API_URL + '/', 
        { 
          headers: str
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
  getArticleById(id) {
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
  putArticleById(id, title, category, content, image, createdAt) {
    return axios
    .put(API_URL + '/' + id, 
        { 
          title,
          category,
          content,
          image,
          createdAt
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
  deleteArticleById(id, title, category, content, image, createdAt) {
    return axios
    .delete(API_URL + '/' + id, 
        { 
          title,
          category,
          content,
          image,
          createdAt
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

export default new ArticleService();