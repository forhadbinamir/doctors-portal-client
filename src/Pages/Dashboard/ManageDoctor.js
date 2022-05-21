import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () =>
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>doctors List: {doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Avatar</th>
                            <th>Doctors</th>
                            <th>Specialty</th>
                            <th>Remove Doctor</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorsRow>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;