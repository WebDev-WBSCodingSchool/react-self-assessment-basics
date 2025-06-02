import { Button } from './ components';

const App = () => {
  return (
    <div>
      Hello there
      <Button label='Click Me' onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
