import React from 'react';
import Interview from './interview.js';

class MiniDetail extends React.Component {
    render() {
        if(this.props.index === this.props.selected) {
            const personne = this.props.content[this.props.selected];
            return <div className="minidetail detailfont">
                <p classe="habite">{personne.prenom } habite a {personne.habite} depuis {personne.depuis}.</p>
                <p class="phrase">{personne.phrase}</p>
                <Interview personne={personne}/>
            </div>
        } else {
            return null;
        }
    }
}

export default MiniDetail;