
import axios from "axios";

const baseUrl = "http://localhost:5000";

export function getStudents() {
  return axios.get(`${baseUrl}/students`);
}

export const getCourses=()=>{
  return axios.get(`${baseUrl}/courses`)
}

export const getMagics=()=>{
  return axios.get(`${baseUrl}/magics`)
}

export const getDesired=()=>{
  return axios.get(`${baseUrl}/desiredMagics`)
}

export function postTweet(tweet) {
  tweet = { tweet: tweet };

  return axios.post(`${baseUrl}/tweet/`, tweet)
}
