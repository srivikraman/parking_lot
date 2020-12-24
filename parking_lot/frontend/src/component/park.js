import React from 'react'
import request from 'request'
import './park.css'

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parking_type: 'car',
            vehicle_no: '',
            message: 'Input format TN22AA1007',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        var options = {
            method: 'POST',
            url: 'http://localhost:4000/parking/park_or_find_vehicle',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                parkingType: this.state.parking_type,
                vehicleRegNo: this.state.vehicle_no,
            },
            json: true,
        }

        request(options, function (error, response, body) {
            if (error) throw new Error(error)

            console.log(body)
            console.log(response)
            console.log('done')
            if (response.statusCode == 200) {
                alert(
                    'Parking lot allocated. Unpark code: ' + body.data.unpark_code.toString()
                )
            } else {
                alert('Error: ' + body.message)
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-box">
                <h1>Park Vehicle</h1>
                <div class="grid-container">
                    <div class="grid-item">
                        <label>Vehicle Type:</label>
                    </div>
                    <div class="grid-item" onChange={this.handleChange}>
                        <input
                            type="radio"
                            value="car"
                            name="parking_type"
                        />{' '}
                        Car
                        <input
                            type="radio"
                            value="bike"
                            name="parking_type"
                        />{' '}
                        Bike
                    </div>
                    <div class="grid-item">
                        <label>Vehicle number</label>
                    </div>
                    <div class="grid-item">
                        <input
                            type="text"
                            value={this.state.vehicle_no}
                            name="vehicle_no"
                            onChange={this.handleChange}
                            className="user-box"
                            required="required"
                            placeholder="TN22AA1007"
                            pattern="[a-zA-z]{1,2}[0-9]{1,2}[a-zA-z]{1,2}[0-9][0-9][0-9][0-9]"
                        />{' '}
                    </div>
                    <div class="grid-item">{this.state.message}</div>
                </div>

                <input type="submit" className="form-submit" value="Submit" />
            </form>
        )
    }
}
export default Park
