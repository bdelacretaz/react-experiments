import React from 'react';

function Item(props) {
    const text = `Here's #${props.index}`;
    const isSelected = props.index === props.selected;
    return <div
        onClick={() => props.selectCallback(props.index)}
        >
        {text} {isSelected ? " =>" : ""}
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
        return <div class="listephotos" style={{backgroundColor: '#EEE',}}>
            <h2>ListePhotos</h2>
            {
                items.map(it => <Item 
                    selectCallback={this.props.selectCallback} 
                    index={it.index}
                    selected={this.props.selected}
                />)
            }
            <pre class="debug">
                {JSON.stringify(this.props,2)}
            </pre>
        </div>  
    }
}

export default ListePhotos;