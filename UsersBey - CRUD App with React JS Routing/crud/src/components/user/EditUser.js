import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const {name, username, email, phone, website} = user;

    const onInputChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    useEffect( () => {
        loadUsers();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
        navigate.push("/");
    }

    const loadUsers = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(result.data);
    };

    return(
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5 mt-5'>
                <h2 className='text-center mb-4'>Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='from-group mb-4'>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value= {name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='from-group mb-4'>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your User Name"
                            name="userName"
                            value= {username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='from-group mb-4'>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            name="email"
                            value= {email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='from-group mb-4'>
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter Your phone Number"
                            name="phone"
                            value= {phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='from-group mb-4'>
                        <input
                            type="website"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value= {website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-warning btn-block'> Update User </button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;