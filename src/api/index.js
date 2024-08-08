import axios from "../utils/request"
import path from "./path"

// Methods for http requests
const api = {
  // return total amount of time recorded today in seconds 
  getToday() {
    console.log(path.baseUrl + path.today);
    return axios.get(path.baseUrl + path.today);
  },
  // send the datetime of starting time and ending time to record
  addEntry(start, end) {
    console.log(start, end)
    return axios.get(path.baseUrl + path.add, {
      params: {
        start: start,
        end: end
      }
    });
  },
 
  // given the date of the first dat, return the time periods in the following 7 days
  /*

  example:
  {
    "2023-11-01": [],
    "2023-11-02": [
      {
        start: "12:23:34",
        end: "13:23:34"
      },
      {
        start: "02:23:34",
        end: "03:23:34"
      },
    ],
    "2023-11-03": {},
    "2023-11-04": {},
    "2023-11-05": {},
    "2023-11-06": {},
    "2023-11-07": {}
  }

  */
  getWeekPeriods(firstDay) {
    return axios.get(path.baseUrl + path.week, {
      params: {
        firstDay: firstDay
      }
    })
  }
}

export default api;