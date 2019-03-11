import React, { Component } from 'react';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                 <h1 className="schedule-title">My Schedule</h1>
                 <ScheduleCourse title={'Esta muy wey'}/>
                 <ScheduleCourse title={'Esta muy wey'}/>
                 <ScheduleCourse title={'Esta muy wey'}/>
                 <ProgressTracker/>
                 <Gradient/>
            </div>
        )
    }
}

export default Schedule;