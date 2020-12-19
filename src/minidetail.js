import React from 'react';

class MiniDetail extends React.Component {
    render() {
        const item = this.props.selected < 0 ? null : this.props.content[this.props.selected];
        if(item) {
            return <div class="debugBorder">
                <h3>MiniDetail: {item.name}</h3>
            </div>
        } else {
            return null;
        }
    }
}

export default MiniDetail;