"use client"

import { Component } from "react"

export default class Contador extends Component {

    state = {
        numero: this.props.numero ?? 0 // caso não seja passado um número, inicializa com 0
    }

    inc = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.numero}</h1>
                <button onClick={this.inc}>Incrementar</button>
            </div>
        )
    }

}