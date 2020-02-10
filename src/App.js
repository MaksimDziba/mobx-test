import React from 'react';
import { StoreProvider } from './store';
import BugsHeader from './components/bugsheader';
import BugsList from './components/bugslist';
import BugsForm from './components/bugsform';

export default function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

// const BugsHeader = () => {
//   const store = React.useContext(StoreContext);
//   return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
// };

// const BugsList = () => {
//   const store = React.useContext(StoreContext);

//   return useObserver(() => (
//     <ul>
//       {store.bugs.map(bug => (
//         <li key={bug}>{bug}</li>
//       ))}
//     </ul>
//   ));
// };

// const BugsForm = () => {
//   const store = React.useContext(StoreContext);
//   const [bug, setBug] = React.useState('');

//   return (
//     <form
//       onSubmit={e => {
//         store.addBug(bug);
//         setBug('');
//         e.preventDefault();
//       }}
//     >
//       <input
//         type="text"
//         value={bug}
//         onChange={e => {
//           setBug(e.target.value);
//         }}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default function App() {
//   return (
//     <StoreProvider>
//       <main>
//         <BugsHeader />
//         <BugsList />
//         <BugsForm />
//       </main>
//     </StoreProvider>
//   );
// }
