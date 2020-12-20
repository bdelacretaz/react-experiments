import React from 'react';
import Interview from './interview.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class DetailPhoto extends React.Component {
    render() {
        const item = this.props.selected < 0 ? null : this.props.content[this.props.selected];
        if(item) {
            return <div className="detailphoto">
                <Typography>
                    <Paper className={"paper"}>
                        <img src={item.photoURL} alt={item.fullName}/>
                        <h1>{item.prenom} {item.nom}</h1>
                        <p classe="habite">{item.prenom } habite a {item.habite} depuis {item.depuis}.</p>
                        <p class="phrase">{item.phrase}</p>
                        <Interview personne={item}/>
                    </Paper>
                </Typography>
            </div>
        } else {
            return <div className="emptydetailphoto"><h1>-</h1></div>
        }
    }
}

export default DetailPhoto;