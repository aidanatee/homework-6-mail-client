// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ data, match }) => {
  const listItems = data.map((item) => 
      <li className={styles.link} key={item.id}>
        <Link to={`${match.url}/${item.id}`}>
          {item.body}</Link>
      </li>
  )
  return <ul className={styles.container}>{listItems}</ul>
}

export default MailList;