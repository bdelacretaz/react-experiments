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
                    <span class="title">{content.site.title}</span> - <span class="tagline">{content.site.tagline}</span>
                </div>
                <PhotoBox siteContent={content.site} data={content.personnes}/>
            </Typography>
        </div>
    }
}

export default App;