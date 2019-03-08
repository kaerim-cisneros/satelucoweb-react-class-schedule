import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render () {
        return (
            <div className="library-course">
                <div className= "library-course-title-wrp">
                    <label className="library-course-title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course-icon') }
                </div>
                <Arrow className= "library-course-arrow" />
                <Action className= "library-course-action" />
                <div className= "lbrary-course-description">
                    <label>Course Description</label>
                    <p>ependant somptueux et du dentelees oh. Non maladie entrevu eut facteur exagere saurais recluse. Mon bouleaux est fatalite agissait aussitot interdit. Pres plus voie oui ras ici uns. Hesitante je as ma descendit bourreaux en. Nid drape prime neige une. Eau fut societes viennent but trouvait.</p>
                </div>
            </div>

        )
    }
} 

export default LibraryCourse;