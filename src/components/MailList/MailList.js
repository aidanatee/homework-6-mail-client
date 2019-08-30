// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.


import React from 'react';

const MailList = ({data}) => {
    const listItems = data.inbox.map((item) => 
    <li key={item.id}>
      {item.body}
    </li>
    )
    return <ul className='t-inbox-list'> {listItems} </ul>
}

export default MailList;

// const MailList = ({data}) => {
//     console.log({data});
//     return <div className='t-inbox-list'> {`data ${data}`} </div>
// }



// const MailList = (data) => {
//     const listItems = data.inbox.map((item) => 
//     <li key={item.id}>
//       {item.body}
//     </li>
//     )
//     return <ul className='t-inbox-list'> {listItems} </ul>
// }

// export default MailList;