import React, {useEffect, useState} from 'react';

const Home = () => {
    const [users, setUsers] = useState ([])
    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const date = await response.json();
        setUsers(date);
    };
    fetchUsers();
}, []);      
    return (
         <div>
            {users.splice(0,10).map(user =>(
                <img key={user.id} src = {user.url} alt = {user.title}>


                </img>
            ))}
         </div>
    );
    
}

export default Home;
