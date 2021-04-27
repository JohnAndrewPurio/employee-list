import './styles.css';
import UserCard from './UserCard';
import users from './orgData';

function Home() {
    return (
        <div className="container">
            <h2 className="title">Users at ACME Inc.</h2>
            <div className="cards">
                { users.map( (ele) => <UserCard 
                                    name={ ele.name.title + ' ' + ele.name.first + ' ' + ele.name.last } 
                                    email={ ele.email } 
                                    image={ ele.picture.medium } /> ) }
            </div> 
        </div>
    );
}

export default Home;