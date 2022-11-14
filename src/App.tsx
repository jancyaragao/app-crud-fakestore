import './App.css';

import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Add from './components/Add';
import List from './components/List';

function App() {

  // https://fakestoreapi.com/users'

  const [userItem, setUser] = useState<any[]>([]);
  useEffect(() => {
    listUsers();
  }, [])

  const listUsers = async () => {
    const response = await fetch('https://fakestoreapi.com/users');
    const jsonData = await response.json();
    setUser(jsonData);
  }

  const addUser = async () => {
    fetch('https://fakestoreapi.com/users', {
      method: "POST",
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
      <Container>
        <List users={userItem}></List>
        <Add onItemAdd={(itemData) => {
          console.log('Data', itemData);
          addUser();
        }}></Add>
      </Container>
    </>
  );
}

export default App;