import { Button, Greeting, UserList } from './ components';

const sampleUsers = [
  { id: 1, name: 'Ada Lovelace', picture: 'ada.png' },
  { id: 2, name: 'Grace Hopper', picture: 'grace.png' }
];

const App = () => {
  return (
    <div>
      <h2>
        All components below (see <code>src/App.jsx</code>) return <code>null</code> for now, your
        task is to implement the TODO tasks in each component.
      </h2>
      <Greeting name='Ada' />
      <Greeting />
      <UserList users={sampleUsers} />
      <UserList users={123} />
      <Button label='Click Me' onClick={() => alert('This shows')} />
      <Button label='Click Me' onClick={() => alert('This does not')} disabled />
    </div>
  );
};

export default App;
