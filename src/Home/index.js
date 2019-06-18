import React from 'react';
import './Home.css';
import MatchList from './matches.json';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {matches : MatchList.matches};
    }
    render () {
        return (
            this.state.matches.map((item, index) => {
                return (
                    <div key={item.id} className="card">
                        <div className="card-body row">
                            <div className="col-md-12">
                                <div className="name">{item.name}</div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4 col-xs-4">
                                        <div className="float-left">
                                            <img src={item.squads[0].flagWithName[0].src} alt={item.name} />
                                        </div>
                                        <div className="float-left align-content-right">{item.squads[0].name}</div>
                                    </div>
                                    <div className="col-md-4 col-xs-4">{this.calculateTime(item.startTime)}</div>
                                    <div className="col-md-4 col-xs-4">
                                        <div className="float-left align-content-left">{item.squads[1].name}</div>
                                        <div className="float-left">
                                            <img src={item.squads[1].flagWithName[0].src} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                
            })
        );
    }

    calculateTime =(startTime)=> {
        let timeLeft, currentTime = new Date();
        startTime = new Date(startTime);
        let hoursLeft = new Date(startTime.getTime() - currentTime.getTime()).getHours();
        let minsLeft = new Date(startTime.getTime() - currentTime.getTime()).getMinutes();
        if(hoursLeft > 0) {
            if(minsLeft > 0) {
                timeLeft = hoursLeft+'h '+minsLeft+'m';
            } else {
                timeLeft = hoursLeft+'m';
            }
        } else if(minsLeft > 0) {
            timeLeft = minsLeft+'m';
        }
        return timeLeft
    }
}