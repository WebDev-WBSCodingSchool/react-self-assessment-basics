const UserList = ({ users }) => {
  // TODO: If users prop is not provided or is an empty array, render:
  //       <div>No users found.</div>
  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }
  // TODO: Otherwise, render a <ul> with one <li> per user
  // TODO: Each <li> should include:
  //       - An <img> with `src` set to user's picture and `alt` set to their name
  //       - The user's name as text
  const ListItem = ({ prop }) => {
    return (
      <li>
        <img src={prop.picture} alt={prop.name} />
        <p>{prop.name}</p>
      </li>
    );
  };
  return (
    <ul>
      {users.map((prop) => (
        <ListItem key={prop.id} prop={prop} />
      ))}
    </ul>
  );
};

export default UserList;
