import React from 'react';

export default function HomePage(props) {
  const onClick = () => {
    props.setToggleCreateTask((prevData) => {
      return !prevData;
    });
  };
  return (
    <div>
      <div className="Logo">
        <img src="https://i.ibb.co/4pytLpb/logo.png" alt="EIKA logo" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="Home-page-container">
        <h4> EIKA's Shopping List</h4>

        <p>
          Welcome to EIKA's shopping list. Here you will be able to create a
          todo list with for the furniture you want to buy.{' '}
        </p>

        <img
          src="https://i.ibb.co/DKZXzv7/Furniture2.jpg"
          alt="A collention of differnt types of funrniture"
        />
        <br />
        <br />

        <p>
          To get started click on the 'START NOW' button to open the input form.
        </p>
      </div>
      <br />
      <button className="Main-button" onClick={onClick}>
        START NOW
      </button>
    </div>
  );
}
