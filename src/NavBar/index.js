import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Cricket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Football</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">NBA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hockey</a>
                </li>
            </ul>
        )
    }
}

export default NavBar;