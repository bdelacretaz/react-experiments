import React from 'react';
import PhotoBox from './photobox';
import content from './content.js';
import Prefetch from './prefetch.js';
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
            <Prefetch data={content.personnes}/>
        </div>
    }
}

export default App;