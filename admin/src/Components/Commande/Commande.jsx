import { useState, useEffect } from 'react';
import './Commande.css';
import cross_icon from '../../assets/cross_icon.png';

const Commande = () => {
    const [getusers, setUsers] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/getusers');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const deleteUserById = async (id) => {
        try {
            await fetch('http://localhost:4000/removeuser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });
            await fetchInfo();
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        }
    };

    const fetchUserById = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/getuserbyid/${id}`);
            const userData = await response.json();
            console.log('Données utilisateur:', userData);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur par ID:', error);
        }
    };

    return (
        <div className='Commande'>
            <h1>All Client List</h1>
            <div className="Commande-format-main">
                <p>Id</p>
                <p className='header'>Name</p>
                <p className='header email'>Email</p>
                <p className='header remove'>Remove</p>
            </div>
            <div className="Commande-allusers">
                <hr />
                {getusers.map((userData, index) => (
                    <div key={index} className="Commande-format-main Commande-format">
                        <p onClick={() => fetchUserById(userData._id)}>{userData._id}</p>
                        <p className='value'>{userData.name}</p>
                        <p className='value email'>{userData.email}</p>
                        <img onClick={() => deleteUserById(userData._id)} className='listproduct-remove-icon' src={cross_icon} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commande;
