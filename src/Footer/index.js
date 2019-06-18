import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render () {
        return (
            <ul className="nav justify-content-center" id="footer">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <div>
                            <i className="glyphicon glyphicon-home">&#xe021;</i>
                        </div>
                        <div>Home</div>                    
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <div>
                            <i className="glyphicon glyphicon-home">&#xe021;</i>
                        </div>
                        <div>My Matches</div> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <div>
                            <i className="glyphicon glyphicon-home">&#xe021;</i>
                        </div>
                        <div>Me</div> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <div>
                            <i className="glyphicon glyphicon-home">&#xe021;</i>
                        </div>
                        <div>More</div> 
                    </a>
                </li>
            </ul>
        );
    }
}