function Prefetch(props) {
    const links = [];
    props.data.map(personne => {
        links.push(<link rel={"prefetch"} href={personne.photoURL}/>);
        links.push(<link rel={"prefetch"} href={personne.squarePhotoURL}/>);
        return null;
    });
    return <div className={"prefetch"}>{links}</div>;
}

export default Prefetch;