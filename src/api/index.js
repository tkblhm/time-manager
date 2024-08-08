import axios from "../utils/request"
import path from "./path"


const api = {
  // getPlayerInfo() {
  //   return axios.get(path.baseUrl + path.playerInfo);
  // }
  getToday() {
    console.log(path.baseUrl + path.today);
    return axios.get(path.baseUrl + path.today);
  },
  addEntry(start, end) {
    console.log(start, end)
    return axios.get(path.baseUrl + path.add, {
      params: {
        start: start,
        end: end
      }
    });
  },
  getWeekPeriods(firstDay) {
    return axios.get(path.baseUrl + path.week, {
      params: {
        firstDay: firstDay
      }
    })
  }
}

export default api;