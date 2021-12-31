import React, { Component } from 'react'

export default class Timer extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         seconds: 0
    //     }
    // }



    // render() {
    //     return(
    //         <div>
    //             <button>Start</button>
    //             <button>Pause</button>
    //             <button>Reset</button>
    //         </div>
    //     )
    // }

    state = {
        count:0
    }
    
    increment = () =>{
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    // interval = undefined

    componentDidMount(){
      this.interval =  setInterval(this.increment , 1000)
    }
    
    decrement = ( )=> {
        let newCount = this.state.count - 1
        this.setState({
            count:newCount
        })
    }
   
    resetMe = () => {
        this.setState({
            count: 0
        })
    }

    stop(){
        clearInterval(this.interval)
    }
    
    render(){
        return(
            <div>
                <h1> {this.state.count}</h1>
                <button onClick={this.increment}> +  </button>
                <button onClick={this.decrement}> - </button>
                <button onClick={this.resetMe}> reset </button>
                <button onClick={this.stop}> stop </button>
            </div>
        )
    }

}