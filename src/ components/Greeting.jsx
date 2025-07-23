const Greeting = ({ name }) => {
  /* TODO: read `name` from props and render “Hello, <name>!” within a div */
  /* TODO: if no name is provided, render "Hello, stranger!" */
  /* TODO: if name is empty, render "Hello, stranger!" */
  /* TODO: if name is NOT a string, render "Hello???" */
  if (!name) return <div>Hello, stranger!</div>;
  if (!(typeof name === "string")) return <div>Hello???</div>;
  return <div>Hello, {name}!</div>;
};

export default Greeting;
