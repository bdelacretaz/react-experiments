import React from 'react';

class Interview extends React.Component {
    render() {
        const personne = this.props.personne;

        const interview = [];
        personne.interview.qr.map(q => {
            interview.push(
            <div>
                <div class="question"><span class="initiales">{personne.interview.journaliste.initiales}</span>: {q.q}</div>
                <div class="reponse">{q.r}</div>
            </div>);
            return null; 
        })

        if(interview.length === 0) {
            interview.push(<em>Oui, mais non...pas encore d'interview pour cette personne</em>);
        }

        return <div class="interview">
            <div>
                {personne.interview.journaliste.prenom} {personne.interview.journaliste.nom} a interviewé {personne.prenom}&nbsp;
                {personne.interview.lieu}, {personne.interview.quand}.
            </div>
            {interview}
        </div>;
    }
}

export default Interview;