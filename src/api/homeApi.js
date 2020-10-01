import CONST from "../app/const";
import axiosClient from "./axiosClient";
import jsonData from './cv-detail';

const homeApi = {
  fetchData: async (params) => {
      try {
          // let res = await axiosClient.get('/api/front/react/cv-detail');
          let res = jsonData;
          return res.data;
      } catch (e) {
          console.log(e)
      }
  },
};

export default homeApi;
