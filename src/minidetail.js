import React from 'react';
import Interview from './interview.js';
import Paper from '@material-ui/core/Paper';

class MiniDetail extends React.Component {
    render() {
        const item = this.props.selected < 0 ? null : this.props.content[this.props.selected];
        if(item) {
            return <div className="minidetail">
                <Paper>
                    <p classe="habite">Habite a {item.habite} depuis {item.depuis}.</p>
                    <p class="phrase">{item.phrase}</p>
                    <Interview personne={item}/>
                </Paper>
            </div>
        } else {
            return null;
        }
    }
}

export default MiniDetail;