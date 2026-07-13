import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const AddFlight = () => {

  const [input, changeData] = useState({

    flight_number: "",
    airline: "",
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_time: "",
    fare: "",
    total_seats: "",
    available_seats: "",
    status: "Scheduled"

  })

  const inputHandler = (event) => {
    changeData({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const readValue = () => {
    axios.post("https://host-demo-app.onrender.com/api/add-flight", input)
      .then((response) => {
        alert("Flight added successfully")

        changeData({
          flight_number: "",
          airline: "",
          origin: "",
          destination: "",
          departure_date: "",
          departure_time: "",
          arrival_time: "",
          fare: "",
          total_seats: "",
          available_seats: "",
          status: "Scheduled"
        })
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Something went wrong")
        }
      })
  }

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Flight Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="flight_number"
                  value={input.flight_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Airline</label>
                <input
                  type="text"
                  className="form-control"
                  name="airline"
                  value={input.airline}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Origin</label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  value={input.origin}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={input.destination}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departure_date"
                  value={input.departure_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Departure Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="departure_time"
                  value={input.departure_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Arrival Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="arrival_time"
                  value={input.arrival_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Fare</label>
                <input
                  type="number"
                  className="form-control"
                  name="fare"
                  value={input.fare}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="total_seats"
                  value={input.total_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Available Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="available_seats"
                  value={input.available_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={input.status}
                  onChange={inputHandler}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="col col-12">
                <button
                  className="btn btn-primary"
                  onClick={readValue}
                >
                  Add Flight
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddFlight