// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import styles from '../AppRouter/AppRouter.module.css';

const OutboxList = ({ data, match }) => (
    <div>
      <h3 className={`${styles.title} t-greeting`}>Outbox</h3>
      <div className="t-outbox-list">
        <MailList data={data.outbox} match={match} />
      </div>
    </div>
 )


export default withData(OutboxList);
