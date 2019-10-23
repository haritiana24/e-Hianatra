import React, { Component } from 'react';
import Course from './Course';
 
class CourseList extends Component {
    render() { 
        return (
            <div className="row">
                {this.props.courses.map(course => (
                    <Course course={course} />
                ))}
            </div>
        );
    }
}
 
export default CourseList;