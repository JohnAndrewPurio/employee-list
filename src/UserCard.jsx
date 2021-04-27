
function userCard( {name, email, image} ) {
    return (
        <div className="card">
            <img src={ image } alt=""/>
            <div className="user-info">
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default userCard;