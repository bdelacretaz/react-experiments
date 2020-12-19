import React from 'react';

class DetailPhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.selected < 0) {
            return <div className="detailphoto"><h1>No DetailPhoto selection</h1></div>
        } else {
            return <div className="emptydetailphoto"><h1>DetailPhoto #{this.props.selected}</h1></div>
        }
    }
}

export default DetailPhoto;