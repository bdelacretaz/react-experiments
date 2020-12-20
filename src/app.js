import React from 'react';
import PhotoBox from './photobox';
import content from './content.js';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
    componentDidMount() {
        document.title = content.site.title;
    }

    render() {
        return <div class="app">
            <Typography>
                <div class="header">
                    <h1>{content.site.title}</h1>
                    <div class="tagline">{content.site.tagline}</div>
                </div>
                <PhotoBox siteContent={content.site} data={content.personnes}/>
            </Typography>
        </div>
    }
}

export default App;