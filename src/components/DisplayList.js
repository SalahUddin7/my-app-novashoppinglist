import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export default function DisplayList(props) {
  const [completedProducts, setCompletedProducts] = useState([]);
  const [toggleCompletedList, setToggleCompletedList] = useState(false);
  const onChange = (item) => {
    setCompletedProducts((prevData) => {
      return [item, ...prevData];
    });

    console.log(props.products);

    const newList = props.products.filter(
      (product) => product.product_name !== item.product_name
    );
    props.setProducts(newList);
  };

  const onClick = () => {
    setToggleCompletedList((prevData) => {
      return !prevData;
    });
  };

  // Sort by

  const OnclickForName = () => {
    const copy = [...props.products];
    const sortedByName = copy.sort((a, b) => {
      if (a.product_name < b.product_name) {
        return -1;
      } else if (a.product_name > b.product_name) {
        return 1;
      } else {
        return 0;
      }
    });

    props.setProducts(sortedByName);
  };

  const OnClickForPrice = () => {
    const copy = [...props.products];
    const sortPrice = copy.sort((a, b) => {
      return a.price - b.price;
    });
    console.log(sortPrice);
    props.setProducts(sortPrice);
  };

  return (
    <>
      <hr />
      <h5>List of Pending Task</h5>

      <button onClick={OnclickForName}> Sort by Name </button>
      <button onClick={OnClickForPrice}> Sort by Price </button>

      <br />
      <br />

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            {/* <th> </th>
            <th> Name </th>
            <th> Price </th>
            <th> Quanity </th>
            <th> Image </th> */}
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={item}>
                <td>
                  {<input type="checkbox" onChange={() => onChange(item)} />}
                </td>
                <td>{item.product_name}</td>
                <td>{item.price} :-</td>
                <td> quantity: {item.qty}</td>

                <td>{<input type="image" alt="add image" />}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <button onClick={onClick}>
          {toggleCompletedList === false
            ? 'View completed items'
            : 'Hide completed items'}
        </button>
      </div>

      {/* This is list for COMPLETED items */}
      <Table
        className={toggleCompletedList === false ? 'hidden' : 'visible'}
        striped
        // bordered
        hover
        variant="light"
      >
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {completedProducts.map((item, index) => {
            return (
              <tr className="completed" key={index}>
                <td></td>
                <td>{item.product_name}</td>
                <td>{item.price} :-</td>
                <td>quantity: {item.qty}</td>

                <td>{<input type="image" alt="." />}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
