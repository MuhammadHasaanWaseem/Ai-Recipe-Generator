import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.100.140:1337/api',
  headers: {
    Authorization: `bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`
  }
});

const getuserbyemail = (email: string) =>
  axiosClient.get('/User-lists?filters[email][$eq]=' + email);

const createnewuser = (data: any) => axiosClient.post('/User-lists', { data: data });

export default {
  getuserbyemail,
  createnewuser
};
