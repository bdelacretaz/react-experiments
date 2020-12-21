import React from 'react';
import MiniDetail from './minidetail.js'
import Vignette from './vignette.js'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class ListePhotos extends React.Component {

    render() {
        return <div className="listephotos">
            <Grid className={"grid"} container spacing={0}>
            {
                this.props.content.map(it => 
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                        <Vignette 
                            selectCallback={this.props.selectCallback} 
                            index={it.index}
                            selected={this.props.selected}
                            content={this.props.content}
                        />
                        <Hidden smUp>
                            <MiniDetail 
                                index={it.index}
                                selected={this.props.selected} 
                                content={this.props.content}/>
                        </Hidden>
                    </Grid>
                )
            }
            </Grid>
        </div>  
    }
}

export default ListePhotos;