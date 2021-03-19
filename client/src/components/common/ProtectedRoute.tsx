import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
//redux
import {useSelector} from 'react-redux';
//type
import { IRootState } from '../../store/store';
import { IUserState } from '../../store/user-auth/userAuthTypes';
//components
import Loader from './Loader';
import Message from './Message';

interface Props extends RouteProps {
  
}

const ProtectedRoute = (props: Props) => {
  const { component, ...rest } = props;

  const {user} = useSelector<IRootState, IUserState>(state => state.userAuth)

  return user ? <Route {...rest} component={component} /> : <Redirect to="/login" />;
}

export default ProtectedRoute;