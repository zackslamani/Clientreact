import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8090/article';

let accessToken = authHeader();
let str = JSON.stringify(accessToken);
console.log("acces : "+str);
class ArticleService {

  postArticle(title, category, content, image, createdAt) {
    return axios 
    .post(API_URL + "/", {
        title,
		category,
		content,
		image,
		createdAt
      }, { headers: authHeader() })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
 
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new ArticleService();
