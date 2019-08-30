// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import LoginFormField from './LoginFormField.js';

const LoginForm = ({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/app" />
  ) : (
    <LoginFormField authorize={authorize}/>
  )

export default withAuth(LoginForm);



