import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListePhotos from './listephotos.js';
import DetailPhoto from './detailphoto.js';
import Hidden from '@material-ui/core/Hidden';

class PhotoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : -1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    if(this.state.selected === index) {
      this.setState({selected: -1});
    } else {
      this.setState({selected: index});
    }
  }

  render() {
    var title = this.props.siteContent.title;
    if(this.state.selected >= 0) {
      const personne = this.props.data[this.state.selected];
      title += ` - ${personne.prenom} ${personne.nom}`;
    }

    document.title = title;

    return (
      <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <ListePhotos
                  selectCallback={this.handleSelect}
                  selected={this.state.selected}
                  content={this.props.data}
                />
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={9}>
                  <DetailPhoto
                    selectCallback={this.handleSelect}
                    selected={this.state.selected}
                    content={this.props.data}
                    />
              </Grid>
            </Hidden>
        </Grid>
      </div>
    );
  }
}

export default PhotoBox;