//import React, { PureComponent } from 'react';
//import './LoginForm.css';
//import Button from '../Button';
import React, { Component } from "react";
import styles from './LoginForm.module.css';

class LoginFormField extends Component {
  state = {
      email: '',
      password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const {email, password } = this.state;
    const { authorize } = this.props;
    authorize(email, password);
  };

  render() {
    const { email, password } = this.state;
    
    return (
      <div className={styles.bg}>
        <div className={styles.form}>
          <div className={`${styles.form} t-form`}>
            <p>
              <label for="email"><span className={styles.labelText}>Почта</span></label>
              <input name='email' className={`${styles.input} t-input-email`} value={email} onChange={this.handleChange} />
            </p>
            <p>
              <label for="password"><span className={styles.labelText}>Пароль</span></label>
              <input name='password' className={`${styles.input} t-input-password`} value={password} onChange={this.handleChange}/>
            </p>

            <div className={styles.buttons}>
              <button className={`${styles.button} t-login`} onClick={this.handleSubmit} type='submit' value='Submit'>Войти</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default LoginFormField;

// const initialState = {email: '', password: ''};

// function reducer(state, newState) {
//   return {...state, ...newState}
// }

// const LoginFormField = () => {

//   const [userInput, setUserInput] = useReducer(reducer, initialState);

//   const handleChange = e => {
//     const { name, value} = e.target;
//     setUserInput({[name]: value});
//   }

//   const handleSubmit = () => {
//     const { email, password } = this.userInput
//     const { authorize } = this.props;
//     authorize(email, password);
//   };

//     return (
//       <div className="LoginForm_bg__3HpNC">
//         <div className="LoginForm_form__3dFfv t-form">
//           <p>
//             <label for="email"><span className="LoginForm_labelText__1L1gb">Почта</span></label>
//             <input name='email' className='LoginForm_input__18lH8 t-input-email' value={userInput.email} onChange={handleChange} />
//           </p>
//           <p>
//             <label for="password"><span className="LoginForm_labelText__1L1gb">Пароль</span></label>
//             <input name='password' className='LoginForm_input__18lH8 t-input-password' value={userInput.password} onChange={handleChange}/>
//           </p>
  
//           <div className="LoginForm_buttons__67s-u">
//             <button className='LoginForm_button__2irSw t-login' onClick={handleSubmit} type='submit' value='Submit'>Войти</button>
//           </div>
//         </div>
//       </div>
//       );
// }

// export default LoginFormField;
