import React from 'react';
import MiniDetail from './minidetail.js'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

function Item(props) {
    const personne = props.content[props.index];
    const text = <h2 class="nom">{personne.prenom} {personne.nom}</h2>;
    const isSelected = props.index === props.selected;
    const miniDetail = isSelected ? <MiniDetail selected={props.selected} content={props.content}/> : null;
    const cssClass = isSelected ? "listeitem selected" : "listeitem"
    return <div
        onClick={() => props.selectCallback(props.index)}
        className={cssClass}
        >
        <img src={personne.squarePhotoURL} alt={personne.fullName}/>
        <div class="name">{text}</div>
        <Hidden smUp>
            {isSelected ? miniDetail : null}
        </Hidden>
    </div>
}

class ListePhotos extends React.Component {

    render() {
        return <div className="listephotos">
            <Grid className={"grid"} container spacing={3}>
            {
                this.props.content.map(it => 
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                        <Item 
                            selectCallback={this.props.selectCallback} 
                            index={it.index}
                            selected={this.props.selected}
                            content={this.props.content}
                        />
                    </Grid>
                )
            }
            </Grid>
        </div>  
    }
}

export default ListePhotos;