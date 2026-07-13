import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'



    const ViewAllFlights = () => {
  const [data, changeData] = useState([])
        const fetchData = () => {
            axios.get("https://host-demo-app.onrender.com/api/flights")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>

    <NavigationBar />
      <h1><center>View All Flightss</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Flight Number </th>
                  <th>Airline</th>
                  <th>Origin</th>
                  <th>Destination </th>
                  <th>Departure Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time"</th> 
                  <th>Fair</th>
                  <th>Total Seats</th>
                  <th>Available Seats</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.flight_number}</td>
                    <td>{value.airline}</td>
                    <td>{value.origin}</td>
                    <td>{value.destination}</td>
                    <td>{value.departure_date}</td>
                    <td>{value.departure_time}</td>
                    <td>{value.arrival_time}</td>
                    <td>{value.fair}</td>
                    <td>{value.total_seats}</td>
                    <td>{value.available_seats}</td>
                    <td>{value.status}</td>
                   
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ViewAllFlights





      
 
