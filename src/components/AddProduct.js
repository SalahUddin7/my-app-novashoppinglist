import { Form, Button } from 'react-bootstrap';
import { createRef } from 'react';

export default function AddProduct(props) {
  // let initialValue = [];
  // const [products, setProduct] = useState(initialValue);
  const formData = createRef();

  const add = (event) => {
    event.preventDefault();
    const name = formData.current.product_name.value.toLowerCase();
    const newProduct = {
      product_name: name,
      price: formData.current.price.value,
      qty: Number(formData.current.qty.value),
      // Key: uuidv4()
    };

    // setProduct([...products, newProduct]);
    props.onChange(newProduct);
  };

  return (
    <div>
      <div className="Logo-Page2">
        <img src="https://i.ibb.co/4pytLpb/logo.png" alt="EIKA logo" />
      </div>
      <h3>Shopping List</h3>
      <hr />

      <p>
        Please complete all three required fields.
        <br />
        Later, you can mark them as completed.
        <br />
        You can also view all the completed items.
      </p>

      <Form onSubmit={add} ref={formData}>
        <Form.Control
          type="text"
          placeholder="Type name of the item .  .  .  .  .  .  ."
          name="product_name"
        />

        <br />

        <Form.Control
          type="number"
          placeholder="Price of the above item in SEK  _ _  :-"
          name="price"
        />

        <br />

        <Form.Control
          type="number"
          placeholder="How many do you want?"
          name="qty"
        />
        <br />

        <Button variant="primary" type="submit">
          Add
        </Button>

        <br />
        <br />
      </Form>
    </div>
  );
}
