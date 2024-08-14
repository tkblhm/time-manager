import axios from "../utils/request"
import path from "./path"

// Methods for http requests
const api = {
  // return total amount of time recorded today in seconds 
  getToday() {
    // console.log(path.baseUrl + path.today);
    return axios.get(path.baseUrl + path.today);
  },
  // send the datetime of starting time and ending time to record
  addEntry(start, end) {
    // console.log(start, end)
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
    days: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07'],
    records: [{
      recordDate: '2024-08-01',
      startTime: '12:12:12',
      endTime: '12:12:13'
    }, 
    {
      recordDate: '2024-08-03',
      startTime: '12:12:12',
      endTime: '12:12:13'
    }]
  }

  */
  getWeekPeriods(date) {
    let result = axios.get(path.baseUrl + path.week, {
      params: {
        date: date
      }
    })
    // console.log(result)
    return result
  }
}

export default api;