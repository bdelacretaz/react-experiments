import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListePhotos from './listephotos.js';
import DetailPhoto from './detailphoto.js';

class PhotoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 0
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    this.setState({selected: index});
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <ListePhotos
                  selectCallback={this.handleSelect}
                  selected={this.state.selected}
                />
            </Grid>
            <Grid item xs={12} sm={9}>
                <DetailPhoto
                  selectCallback={this.handleSelect}
                  selected={this.state.selected}
                />
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default PhotoBox;