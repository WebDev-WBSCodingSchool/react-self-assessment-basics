import { Button, Greeting } from './ components';

const App = () => {
  return (
    <div>
      <h2>
        All components below (see <code>src/App.jsx</code>) return <code>null</code> for now, your
        task is to implement the TODO tasks in each component.
      </h2>
      <Greeting name='Ada' />
      <Greeting />
      <Button label='Click Me' onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
