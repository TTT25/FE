import React, { Component } from 'react';
import Gantt from '../component/Gantt';
import './Gantt.css'
// import './Report.css'
// import { GanttComponent,TaskFieldsModel} from '@syncfusion/ej2-react-gantt';
// import { projectData } from '../data/dataGantt';
// export class Report extends Component{
//     cons
//     render(){
//         return(
//             <div>
//                 <GanttComponent dataSource='projectData'> </GanttComponent>
//             </div>
//         )
//     }
// }

// function Report(){
//     const taskValues  = {
//         id:"TaskId",
//         name:"TaskName",
//         startDate:"StartDate",
//         endDate:"EndDate",
//         duration:"Duration",
//         progress:"Progress",
//         child:"subtask"
//     }
//      return(
//             <div>
//                 <GanttComponent dataSource='projectData' taskFields={taskValues}> </GanttComponent>
//             </div>
//         );
// }
// export default Report ;
var data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6 },
        { id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4 }
    ],
    links: [
        { id: 1, source: 1, target: 2, type: '0' }
    ]
};

class Report extends Component {
    render() {
        return ( <
            div >
            <
            div className = "gantt-container" >
            <
            Gantt tasks = { data }
            /> <
            /div> <
            /div>
        );
    }
}