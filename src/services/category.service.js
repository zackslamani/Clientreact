import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8090/category';

let accessToken = authHeader();
let str = JSON.stringify(accessToken);
console.log("acces : "+str);

class CategoryService {

  // On post un category
  // param : title, category, content, image, createdAt
  postCategory(title, description) {
    return axios 
    .post(API_URL + "/", {
        title,
        description
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

  // On récupère tous les categorys
  getAllCategory() {
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

  // On récupère l'category par id
  // param : id
  getCategoryById(id) {
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

  // On modifie un category
  // param : id
  putCategoryById(id, author, content) {
    return axios
    .put(API_URL + '/' + id, 
        { 
        title,
        description
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

   // On supprime un category
  // param : id
  deleteCategoryById(id, author, content) {
    return axios
    .delete(API_URL + '/' + id, 
        { 
        title,
        description
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

export default new CategoryService();