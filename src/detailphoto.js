import React from 'react';

class DetailPhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div class="debugBorder" style={{backgroundColor: 'yellow',}}>
            <h1>DetailPhoto</h1>
            <pre>
                {JSON.stringify(this.props,2)}
            </pre>
        </div>  
    }
}

export default DetailPhoto;