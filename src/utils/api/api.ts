import { getCookie, setCookie } from "../infos/cookie";
import { setLocalStorage } from "../infos/loaclStorage";
import { GagAnswer, GagDetailDelete, GagDetailPage, GagListGet, PostGagType } from "../infos/types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


const apiClient = axios.create({
  baseURL : process.env.REACT_APP_BASEURL,
  withCredentials: true,
})


export const getMyGagPage = async (data: GagListGet) => {
  const { page, size } = data;
  const cookie = getCookie("token");
  const headers = {
    Authorization: cookie
  };
  const res = await apiClient.get(
    `/api/gag/mypage?page=${page}&size=${size}`,{headers}
  );
  //console.log(res)
  return res;
}; 

//이름, 커서가 없으면 추가해선 안돼
export const getTest =async (data: any) => {
  const { page, size } = data;
  const headers = {
    "x-nxopen-api-key": process.env.REACT_APP_OPEN_AI_KEY
  };
  const res = await apiClient.get(`/list?item_name=나무 장작`,{headers}) 
  return res;
}
