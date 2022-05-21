import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [loadingAdmin, setLoadingAdmin] = useState(true)
    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.admin)
                    setAdmin(data.admin)
                    setLoadingAdmin(false)
                })
        }
    }, [user])
    return [admin, loadingAdmin]
}

export default useAdmin;