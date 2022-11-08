import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Home = () =>{
    const [user, setUser] = useState([]);

    useEffect( () => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        loadUsers();
    }

    return(
        <div className='container'>
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="table-primary">
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr>
                                    <th scope='row'> {index + 1} </th>
                                    <td> {user.name} </td>
                                    <td> {user.username} </td>
                                    <td> {user.email} </td>
                                    <td>
                                        <Link 
                                            className= "btn btn-outline-primary m-2" 
                                            to={`/user/${user.id}`}> 
                                            View
                                        </Link>

                                        {/* <FontAwesomeIcon icon="fa-thin fa-users-viewfinder" /> */}

                                        <Link 
                                            className= "btn btn-outline-secondary m-2" 
                                            to={`/user/edit/${user.id}`}> 
                                            Edit 
                                        </Link>

                                        {/* <FontAwesomeIcon icon="fa-thin fa-pen-to-square" /> */}

                                        <Link 
                                            className= "btn btn-outline-danger" 
                                            onClick={() => deleteUser(user.id)}> 
                                            Delete 
                                        </Link>

                                        {/* <FontAwesomeIcon icon="fa-thin fa-trash" />  */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
