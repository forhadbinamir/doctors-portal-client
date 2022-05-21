import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const UsersRow = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/login')
            }
            return res.json()
        })
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-center text-2xl p-3 rounded-lg bg-primary text-white'>All User list : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                const { email, role } = user
                                const makeAdmin = () => {
                                    fetch(`http://localhost:5000/user/admin/${email}`, {
                                        method: 'PUT',
                                        headers: {
                                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                        }
                                    })
                                        .then(res => {
                                            if (res.status === 403) {
                                                return toast.error('Field to make an admin')
                                            }
                                            return res.json()
                                        })

                                        .then(data => {
                                            if (data.acknowledged) {
                                                refetch()
                                                toast.success('Success fully mede an admin')
                                            }
                                        })
                                }

                                return (
                                    <tr

                                        key={index} className='active'>
                                        <th>{users.indexOf(user) + 1}</th>
                                        <td>{user.email}</td>
                                        <td>{
                                            role ? <button onClick={makeAdmin} className="btn btn-xs">Admin</button>
                                                :
                                                <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                                        }</td>
                                        <td><button className="btn btn-xs bg-red-500">Remove User</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersRow;