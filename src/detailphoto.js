import React from 'react';

class DetailPhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const item = this.props.selected < 0 ? null : this.props.content[this.props.selected];
        if(item) {
            return <div className="emptydetailphoto"><h1>DetailPhoto {item.name}</h1></div>
        } else {
            return <div className="detailphoto"><h1>No DetailPhoto selection</h1></div>
        }
    }
}

export default DetailPhoto;