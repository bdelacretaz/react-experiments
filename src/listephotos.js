import React from 'react';
import MiniDetail from './minidetail.js'
import Grid from '@material-ui/core/Grid';

function Item(props) {
    const text = `Photo #${props.index}`;
    const isSelected = props.index === props.selected;
    const miniDetail = isSelected ? <MiniDetail index={props.index}/> : null;
    const cssClass = isSelected ? "selected" : ""
    return <div
        onClick={() => props.selectCallback(props.index)}
        className={cssClass}
        >
        {text} {isSelected ? " =>" : ""} {miniDetail}
    </div>
}

class ListePhotos extends React.Component {

    render() {
        const items = [];
        for(var i=1; i <= 24; i++ ) {
            items.push({
                index: i,
            })
        }
        return <div className="listephotos">
            <h2>ListePhotos</h2>
            <Grid container spacing={3}>
            {
                items.map(it => 
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                        <Item 
                            selectCallback={this.props.selectCallback} 
                            index={it.index}
                            selected={this.props.selected}
                        />
                    </Grid>
                )
            }
            </Grid>
        </div>  
    }
}

export default ListePhotos;