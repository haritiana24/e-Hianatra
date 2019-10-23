import React, { Component } from 'react';
import Prof from './Prof';
 
class ProfList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <React.Fragment>
                <div className="row">
                    {this.props.profs.map(prof => (
                        <Prof prof={prof} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProfList;