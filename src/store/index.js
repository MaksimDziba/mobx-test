import React from 'react';
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ['Centipede'],
    addBug: bug => {
      console.log(bug);
      store.bugs.push(bug);
    },
    removeBug: idx => {
      console.log(idx);
      store.bugs.splice(idx, 1);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
