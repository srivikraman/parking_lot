import React from 'react'
import request from 'request'

class Unpark extends React.Component {
    constructor(props) {
        super(props)
        this.state = { unpark_code: '', vehicle_no: '' , message: '(Please enter 6 digit unpark code)',}
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
            url: 'http://localhost:4000/parking/unpark_vehicle',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { unParkCode: parseInt(this.state.unpark_code), vehicleRegNo: this.state.vehicle_no },
            json: true,
        }

        request(options, function (error, response, body) {
            if (error) throw new Error(error)

            console.log(body)
            if (response.statusCode == 200) {
                alert(body.message)
            } else {
                alert('Error: ' + body.message)
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-box">
				<h1>Unpark Vehicle</h1>
				<div class="grid-container">
				<div class="grid-item">
					<label>Vehicle number:</label>
				</div>
				<div class="grid-item">
                    <input
                        type="text"
						value={this.state.vehicle_no}
						name="vehicle_no"
						onChange={this.handleChange}
						required="required"
						placeholder="TN22AA1007"
						pattern="[a-zA-z]{1,2}[0-9]{1,2}[a-zA-z]{1,2}[0-9][0-9][0-9][0-9]"
                    />{' '}
                </div>
				<div class="grid-item">
					<label>Vehicle UnParkCode:</label>
				</div>
				<div class="grid-item">
                    <input
                        type="text"
						value={this.state.unpark_code}
						name="unpark_code"
						onChange={this.handleChange}
						required="required"
						pattern="[0-9]{6}"
                    />{' '}
				</div>
				<div class="grid-item">{this.state.message}
				</div>
                </div>

                <input type="submit" className="form-submit" value="Submit" />
            </form>
        )
    }
}
export default Unpark
