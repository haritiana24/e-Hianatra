import React, { Component } from 'react';
 
class Prof extends Component {
    render() { 
        return (
            <div className="card col-9 col-md-6 col-lg-3 mx-auto">
                <img src={this.props.prof.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{ this.props.prof.name }</h5>
                    <p class="card-text">{ this.props.prof.description }</p>
                </div>
                <div className="card-footer">
                    { this.props.prof.contact[0].tel }
                </div>
            </div>
        );
    }
}
 
export default Prof;