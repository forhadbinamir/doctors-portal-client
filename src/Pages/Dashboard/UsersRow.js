import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const UsersRow = () => {
    const { data: users, isLoading } = useQuery('user', () => fetch('http://localhost:5000/user')
        .then(res => res.json())
    )
    console.log(users)
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a, index) => <tr key={index} className='active'>
                                <th>{users.indexOf(a) + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td><button class="btn btn-xs">Make Admin</button></td>
                                <td><button class="btn btn-xs">Remove User</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersRow;