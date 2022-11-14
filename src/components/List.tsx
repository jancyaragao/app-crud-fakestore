import Table from 'react-bootstrap/Table';

import Delete from './Delete';
import Edit from './Edit';

const UserItem = ({ id, email, username, password, name, phone }) => {

    const editUser = async ({ id }) => {
        fetch(`https://fakestoreapi.com/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    email: 'John@gmail.com',
                    username: 'johnd',
                    password: 'm38rmF$',
                    name: {
                        firstname: 'John',
                        lastname: 'Doe'
                    },
                    address: {
                        city: 'kilcoole',
                        street: '7835 new road',
                        number: 3,
                        zipcode: '12926-3874',
                        geolocation: {
                            lat: '-37.3159',
                            long: '81.1496'
                        }
                    },
                    phone: '1-570-236-7033'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td className='text-capitalize'>{name.firstname} {name.lastname}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{phone}</td>
                <td>
                    <Edit id={id} email={email} username={username} password={password} firstname={name.firstname} lastname={name.lastname} phone={phone} onItemEdit={(userEdit) => {
                        console.log('Data', userEdit);
                        editUser({
                            id: id
                        });
                    }}></Edit>
                </td>
                <td>
                    <Delete id={id} firstname={name.firstname} lastname={name.lastname}></Delete>
                </td>
            </tr>
        </>
    )
}

function List({ users }) {

    return (
        <>
            <h1 className="mt-4">Users</h1>
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: { id: any; email: any; username: any; password: any; name: any; phone: any; }) => {
                        return <UserItem key={user.id} id={user.id} email={user.email} username={user.username} password={user.password} name={user.name} phone={user.phone}></UserItem>
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default List;