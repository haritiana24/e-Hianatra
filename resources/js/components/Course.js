import React, { Component } from "react";

class Course extends Component {
    render() {
        const course = this.props.course;
        return (
            <div className="card col-9 mx-auto col-md-6 col-lg-3">
                <div className="card-title">{ course.name }</div>
                <div className="card-body">
                    <img src={course.img} alt=""/>
                    { course.description }
                </div>
                <div className="card-footer">$ { course.price }</div>
            </div>
        );
    }
}

export default Course;
