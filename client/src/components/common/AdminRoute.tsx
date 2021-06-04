import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//type
import { IRootState } from '../../store/store';
import { IUserState } from '../../store/user-auth/userAuthTypes';

interface Props extends RouteProps {}

const AdminRoute = (props: Props) => {
  const { component, ...rest } = props;

  const { user } = useSelector<IRootState, IUserState>(state => state.userAuth);

  if (!user) return <Redirect to='/login' />;

  return user.isAdmin ? <Route {...rest} component={component} /> : <Redirect to='/' />;
};

export default AdminRoute;
