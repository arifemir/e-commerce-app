import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../../components/common/Loader';
import Message from '../../components/common/Message';
import { allUsers } from '../../store/admin/user/adminUserActions';
import { IAdminUserState } from '../../store/admin/user/adminUserTypes';
import { IRootState } from '../../store/store';

interface Props {
  
}

const UserListPage = (props: Props) => {
  
  const dispatch = useDispatch();
  const {users, error, loading} = useSelector<IRootState, IAdminUserState>(state => state.adminUser)

  useEffect(() => {
    dispatch(allUsers());  
  }, [dispatch])

  const deleteHandler = (userId: string) => {

  }

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(({_id, email, name, isAdmin}) => (
            <tr key={_id}>
              <td>{_id}</td>
              <td>{name}</td>
              <td><a href={`mailto:${email}`}>{email}</a></td>
              <td>{isAdmin ? <i className='fas fa-check' style={{color: 'green'}} /> : <i className='fas fa-times' style={{color: 'red'}} />}</td>
              <td>
                <LinkContainer to={`/user/${_id}/edit`}>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'/>
                  </Button>
                </LinkContainer>
                <Button 
                  variant='danger' 
                  className='btn-sm' 
                  onClick={() => deleteHandler(_id)}
                >
                  <i className='fas fa-trash'/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </>
  )
}

export default UserListPage
