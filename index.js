const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="Container">
    <div className="content-Container">
      <h1 className="heading">Social Buttons</h1>
      <div class="buttons-container">
        <Button className="like-Button" buttonText="Like" />
        <Button className="Comment-Button" buttonText="Comment" />
        <Button className="Share-Button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
