import React from 'react';
import request from 'request';

class FreeSlots extends React.Component {
    constructor(props) {
		super(props)
		this.componentWillMount = this.componentWillMount.bind(this)
        this.state = {
            number_of_car_slots: 0,
            number_of_bike_slots: 0
		}
		
    }

    componentWillMount() {
		var that = this;
        var options = {
            method: 'GET',
            url: 'http://localhost:4000/parking/get_available_lots',
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        }

        request(options, function (error, response, body) {
            if (error) throw new Error(error)

            console.log(body)
            console.log(response)
            console.log('done')
            if (response.statusCode == 200) {
				var car_slots = body.data.filter(slot => slot.parking_type == 'car').length;
				var bike_slots = body.data.filter(slot => slot.parking_type == 'bike').length;
				console.log(car_slots);
				console.log(bike_slots);
				that.setState({ number_of_car_slots: car_slots, number_of_bike_slots: bike_slots});
				
            } else {
                alert('Error: ' + body.message)
            }
        })
    }

    render() {
        return (
			<div>
                <h1>Available slot for vehicles</h1>
                <div class="grid-container">
                    <div class="grid-item">
                        <label>Bike</label>
                    </div>
					<div class="grid-item">
                        <label>{this.state.number_of_bike_slots}</label>
                    </div>
                    <div class="grid-item">
                        <label>Car</label>
                    </div>
					<div class="grid-item">
                        <label>{this.state.number_of_car_slots}</label>
                    </div>
                </div></div>

        )
    }
}
export default FreeSlots

