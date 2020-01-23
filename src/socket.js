import React from 'react';
import io from 'socket.io-client'
import MapComponent from './map';

class ChatCOmponent extends React.Component {

    state = {
        id: Math.random(),
        link: '',
        location: [],
        users: []
    }

    socket = io('localhost:8800')

    componentDidMount() {

        console.log(this.socket)

        this.socket.on('newuseradded', (data) => {
            console.log(data, 'new user added')
        })

        this.socket.on('locationUpdated', (data) => {
            console.log(data)
        })

        setInterval(()=>{
            this.getLocation()
            if(this.state.link !== ""){
                this.socket.emit('updateLocation', { ...this.state }, (data) => {
                    this.setState({ ...this.state, users: data.users })
                    console.log(data)
                })
            }
        }, 10000)

        
        return () => {
            console.log('your leaving')
        };
    }

    getLocation(){

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const success = (pos) => {
            var crd = pos.coords;
            this.setState({ ...this.state, location: [crd.latitude, crd.longitude] })
            console.log("Your current position is:");
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        // setInterval(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);

        
    }

    render() {
        const createLink = () => {
            let dlink = prompt('give a custom token')
            if (dlink !== null) {
                this.setState({ ...this.state, link: dlink }, () => {
                        console.log(this.state, 'i dont even know')
                        this.socket.emit('createlink', { ...this.state }, (response) => {
                        this.setState({ ...this.state, users: response.users })
                        console.log(response)
                    })
                })
                
            } else {
                console.log('remove me')
            }

        }

        const joinLink = () => {
            let link = prompt('whats your token')
            if (link !== null) {
                this.setState({ ...this.state, link }, () => {
                    this.socket.emit('newuser', { ...this.state }, (response) => {
                        this.setState({ ...this.state, users: response.users })
                        console.log(response)
                    })
                });
            } else {
                console.log('un ble to join link')
            }
        }

        return (
            <>
                <div>
                    <MapComponent users={this.state}></MapComponent>
                    <div className="buttonHolder">
                        <button onClick={() => {
                            createLink()
                        }}> Create Link </button> <br />
                        <button onClick={() => {
                            joinLink()
                        }}> Join Link </button>

                        {/* <button onClick={() => {
                            ChangeLocation()
                        }}>
                            Change Location
                        </button> */}
                    </div>
                </div>
            </>
        );
    }
}

export default ChatCOmponent
