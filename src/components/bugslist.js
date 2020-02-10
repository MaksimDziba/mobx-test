import React from 'react';
import { StoreContext } from '../store';
import { useObserver } from 'mobx-react';

const BugsList = () => {
  const store = React.useContext(StoreContext);
  const [bug, removeBug] = React.useState('');

  return useObserver(() => (
    <ul>
      {store.bugs.map((it, idx) => (
        <li key={idx}>
          {it}
          <button
            onClick={e => {
              store.removeBug(idx);
              removeBug('');
              e.preventDefault();
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  ));
};

export default BugsList;
