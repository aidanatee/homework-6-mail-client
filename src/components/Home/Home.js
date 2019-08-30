// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
//import title from '../AppRouter/AppRouter.module.css';
import styles from './Home.module.css';

const Home = (props) => (
    <div>
    <h3 className={props.header}>Home</h3>
        <div className={styles.container}>
            <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
        </div>
    </div>

);

export default Home;