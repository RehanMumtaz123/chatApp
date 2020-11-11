import React, { Component } from 'react'
import './App.css';
import Home from './containers/Home/index';
import AppRouter from './config/router'
export default class index extends Component {

    render() {
        return (
            <div>
              <AppRouter />
            </div>

        )
    }
}
