import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/admin/user/adminUserActions';
//types
import { IRootState } from '../../store/store';
import { IAdminUserState } from '../../store/admin/user/adminUserTypes';
import { match } from 'react-router-dom';
//components
import Message from '../../components/common/Message';
import Loader from '../../components/common/Loader';
import FormContainer from '../../components/common/FormContainer';

interface params {
  id: string;
}

interface Props {
  match: match<params>
}

const UserEditPage = (props: Props) => {
  const {match} = props;
  const userId = match.params.id

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector<IRootState, IAdminUserState>(state => state.adminUser);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [isAdmin, setIsAdmin] = useState(user?.isAdmin);

  useEffect(() => {
    if(user?._id !== userId || !user)
      dispatch(getUserDetails(userId))
    else {
      setName(user?.name)
      setEmail(user?.email)
      setIsAdmin(user?.isAdmin)
    }
  }, [userId, dispatch, user]);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <>
      <Link to={'/admin/userlist'} className='btn btn-primary my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {error && <Message variant='danger'>{error.message}</Message>}
        {loading && <Loader />}
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} type='text' placeholder='Enter name' onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control value={email} type='email' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='isadmin'>
            <Form.Label>Password</Form.Label>
            <Form.Check checked={isAdmin} type='checkbox' placeholder='Enter is admin' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsAdmin(e.target.checked)} />
          </Form.Group>
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default UserEditPage;
