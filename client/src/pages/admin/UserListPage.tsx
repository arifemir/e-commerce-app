import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  }, [])

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <div>
      
    </div>
  )
}

export default UserListPage
