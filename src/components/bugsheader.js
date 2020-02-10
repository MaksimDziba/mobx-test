import React from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../store';

const BugsHeader = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
};

export default BugsHeader;
