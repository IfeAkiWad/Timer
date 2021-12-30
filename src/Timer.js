import React, { Component } from 'react'

export default class Timer extends Component {

    constructor() {
        super()
        this.state = {
            seconds: 0
        }
    }



    render() {
        return(
            <div>
                <button>Start</button>
                <button>Pause</button>
                <button>Reset</button>
            </div>
        )
    }

}