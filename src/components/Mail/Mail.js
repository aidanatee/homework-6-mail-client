// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import styles from './Mail.module.css';


const Mail = (props) => {
    const { type, header, email, body } = props;
    return (
        <div className={styles.container}>
          <p className={type}>{header}: <b>{email}</b></p>
          <p className="t-mail-body">{body}</p>
        </div> 
    )
}

export default Mail;

//const mail = data.inbox.find(mail => mail.id === id);

    //return <Mail {...mail} />;

    //mail.from mail.body
