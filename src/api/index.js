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
    axios.get(path.baseUrl + path.add, {
      params: {
        start: start,
        end: end
      }
    });
  },
 
  // given the date of the first day, return the time periods in the following 7 days
  /*

  example:
  {
    "mon": [],
    "tue": [
      {
        start: "12:23:34",
        end: "13:23:34"
      },
      {
        start: "02:23:34",
        end: "03:23:34"
      },
    ],
    "wed": {},
    "thu": {},
    "fri": {},
    "sat": {},
    "sun": {}
  }

  */
  getWeekPeriods(date) {
    let result = axios.get(path.baseUrl + path.week, {
      params: {
        date: date
      }
    })
    console.log(result)
    return result
  }
}

export default api;