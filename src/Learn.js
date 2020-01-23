import React, { Component } from 'react'

export default class Learn extends Component {

    state = {
        name: '',
        count: 0
    }

    // static getDerivedStateFromProps(props, state) {
    //     state.count = props.count
    //     console.log(props, state)
    //     return state
    // }
    // shouldComponentUpdate(){
    //     return false
    // }
    render() {
        return (
            <>
                <br />
                <input onChange={(e) => this.setState({ name: e.target.value })} />
                <br/>
                {this.state.name}
            </>
        )
    }
}
