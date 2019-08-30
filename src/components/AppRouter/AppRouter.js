// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';
import { withData } from '../../context/Data';

let title = 'title';

export default ({ match }) => (
  
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={`${styles.navList} t-nav-list`}>
            <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-home`} to="/app">Home</Link>
            </li>
            <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-inbox`} to={`${match.url}/inbox`}>Inbox</Link>
            </li>
            <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-outbox`} to={`${match.url}/outbox`}>Outbox</Link>
            </li>
          </ul>
        </nav>
   
        <div className={styles.content}>
          <h3 className={`${styles.title} t-greeting`}>{title}</h3>
            <Switch>
              <Route path="/app" component={Home} exact />
              <Route path={`${match.path}/inbox`} component={withData(InboxList)} />
              <Route path={`${match.path}/inbox/:id`} component={withData(InboxMail)} />
              <Route path={`${match.path}/outbox`} component={withData(OutboxList)} />
              <Route path={`${match.path}/outbox/:id`} component={withData(OutboxMail)} />
              <Redirect to="/app" />
            </Switch>
        </div>
      </div>
 
    </div>
)




