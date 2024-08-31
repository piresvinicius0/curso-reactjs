"use client"
import { Component } from "react";
import Contador from "../components/contador/Contador.jsx"

export default class ContadorPage extends Component {

    render() {
        return (
            <div>
                <Contador numero={100} />
            </div>
        )
    }
}