import React, { Component } from "react";

class Course extends Component {
    render() {
        const course = this.props.course;
        return (
            <div className="card col-9 col-md-6 col-lg-3 mx-auto">
                <img src={course.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{ course.name }</h5>
                    <p class="card-text">{ course.description }</p>
                </div>
            </div>
        )
    }
}
        
export default Course;
