import React from 'react';

export default function Vignette(props) {
    const personne = props.content[props.index];
    const isSelected = props.index === props.selected;
    const cssClass = "vignette" + (isSelected ? " selected" : "");

    return <div onClick={() => props.selectCallback(props.index)}>
        <div
            className={cssClass}
            style={{
                backgroundImage: `url(${personne.squarePhotoURL})`,
                backgroundSize: 'cover'
            }}
        >
        </div>
        <div class="vignetteText">{personne.fullName}</div>
    </div>
}

