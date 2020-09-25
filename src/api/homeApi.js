import CONST from "../app/const";
import axiosClient from "./axiosClient";

const homeApi = {
  fetchData: (params) => {
    return {
        avatar: CONST.link_avatar,
        fullname: 'Nguyen Phan Thanh',
        description: "And I'm a Junior Website Developer",
        socials: {
            facebook: 'https://www.facebook.com/nguyenit96',
            twitter: 'https://www.facebook.com/nguyenit96',
            googleplus: 'https://www.facebook.com/nguyenit96',
            instagram: 'https://www.facebook.com/nguyenit96',
            youtube: 'https://www.facebook.com/nguyenit96'
        }
    };
  },
}

export default homeApi;