import React, { Component } from 'react';
import Gantt from './Gantt';
import './Gantt.css'
import './Report.css'

const data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '15-04-2019', duration: 3, progress: 0.6 },
        { id: 2, text: 'Task #2', start_date: '18-04-2019', duration: 3, progress: 0.4 }
    ],
    links: [
        { id: 1, source: 1, target: 2, type: '0' }
    ]
};

export class Report extends Component {
    render() {
        return ( <div className = "gantt-container" ><Gantt tasks = { data }/> </div>

        );
    }
}