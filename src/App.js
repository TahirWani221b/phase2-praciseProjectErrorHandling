import React, { useState } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Button from './components/FormControls/Button/Button';
import Input from './components/FormControls/Input/Input';
import Label from './components/FormControls/Label/Label';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [username, setUsername] = useState('');
  const [listData, setListData] = useState([]);
  const [age, setAge] = useState('');

  const handleAddUser = (event) => {
    event.preventDefault();
    setListData(prevData => {
      return [...prevData, username + `(${age} years old)`]
    });
    setUsername('');
    setAge('');
  };
  return (
    <>
      <Wrapper>
        <Form>
          <Label htmlFor="username" text='Username' />
          <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

          <Label htmlFor="age" text='Age (Years)' />
          <Input id="age" value={age} onChange={(e) => setAge(e.target.value)} type='number' />

          <Button text='Add User' type='button' id="button" onClick={(event) => handleAddUser(event)} />
        </Form>
      </Wrapper>
      {
        listData.length && (
          <Wrapper>
            <Container>
              <UsersList listData={listData} />
            </Container>
          </Wrapper>)
      }

    </>
  );
}

export default App;
