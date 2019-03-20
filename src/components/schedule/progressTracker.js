import React, { Component } from 'react';

class ProgressTracker extends Component {

    calculateProgress = function() {
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }.bind(this);

    render() {
        return (
            <div className="progress-tracker">
                <div className="progress-tracker-label">Progress Tracker</div>
                <div className="progress-tracker-percentage">
                    {this.calculateProgress()}%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;