import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser } from '../../store/admin/user/adminUserActions';
//types
import { IAdminUserState } from '../../store/admin/user/adminUserTypes';
//hooks
import useAlertify from '../../hooks/useAlertify';
//components
import { IRootState } from '../../store/store';
import Loader from '../../components/common/Loader';
import Message from '../../components/common/Message';

interface Props {

}

const UserListPage = (props: Props) => {

  const dispatch = useDispatch();
  const {users, error, loading} = useSelector<IRootState, IAdminUserState>(state => state.adminUser)
  const {confirm, success: alertSuccess, error: alertError} = useAlertify()

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch])

  const deleteHandler = (userId: string) => {
    confirm('Are you sure you want to delete this user',
      function(){
        dispatch(deleteUser(userId))
        alertSuccess('Delete is success');
      },
      function(){
        alertError('Cancel');
      });
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
