import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListePhotos from './listephotos.js';
import DetailPhoto from './detailphoto.js';
import Hidden from '@material-ui/core/Hidden';

const content = [];
for(var i=1; i <= 27; i++ ) {
    content.push({
        index: i,
        name: `I am ze #${i}`,
    })
}

class PhotoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : -1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    if(this.state.selected == index) {
      this.setState({selected: -1});
    } else {
      this.setState({selected: index});
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <ListePhotos
                  selectCallback={this.handleSelect}
                  selected={this.state.selected}
                  content={content}
                />
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={9}>
                  <DetailPhoto
                    selectCallback={this.handleSelect}
                    selected={this.state.selected}
                    content={content}
                    />
              </Grid>
            </Hidden>
        </Grid>
      </div>
    );
  }
}

export default PhotoBox;