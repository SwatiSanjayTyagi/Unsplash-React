import React , { Component } from 'react'

class Header extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className = 'headerDetails'>
                <h1>Search Images</h1>
                <h6> using unsplash API</h6>
            </div>
        )
    }
}

export default Header