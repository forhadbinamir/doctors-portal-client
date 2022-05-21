import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor

    const handleRemoveDoctors = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} successfully removed`)
                }
                console.log(data)
            })
    }
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <th>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </th>
            <td>
                {specialty}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>

            <th>
                <button onClick={() => handleRemoveDoctors(email)} className="btn btn-error btn-sm text-white">remove</button>
            </th>
        </tr>
    );
};

export default DoctorsRow;