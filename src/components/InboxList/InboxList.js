// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import styles from '../AppRouter/AppRouter.module.css';


const InboxList = ({ data, match }) => (
    <div>
      <h3 className={`${styles.title} t-greeting`}>Inbox</h3>
      <div className="t-inbox-list">
        <MailList data={data.inbox} match={match} />
      </div>
    </div>
 )

export default withData(InboxList);

// const withData = WrappedComponent => {
//     return class DataHOC extends Component {
//       render() {
//         const { ...rest } = this.props;
//         return (
//           <Consumer>
//             {({ data }) => <WrappedComponent {...rest} data={data} />}
//           </Consumer>
//         );
//       }
//     };
//   };

// 1. export default withData(InboxList);

// 2. <Consumer>
//     {({ data }) => <InboxList {...rest} data={data} />}
//    </Consumer>

// 3. return <MailList />



