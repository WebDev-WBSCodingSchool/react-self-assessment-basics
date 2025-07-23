const Button = ({ label, onClick, disabled }) => {
  // TODO: Render a <button> element
  // TODO: Use the `label` prop as the button's text
  // TODO: Call the `onClick` handler when clicked
  // TODO: Apply the `disabled` prop if provided

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
