import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

/* Children */
import { Button, Fieldset } from '../atoms';
import { TextInputLabel } from '../molecules';

/* Services */
import { getAllSellers } from '../../services/request';

function CheckoutForm() {
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNum, setAddressNum] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user);

    async function getData() {
      try {
        const sellersData = await getAllSellers(token);
        setSeller(sellersData[0].id); // default select value
        setSellers(sellersData);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    if (seller && address && addressNum) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [seller, address, addressNum]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShouldRedirect(false);

    // try {
    //   const data = await exampleRequest({});

    //   if (data) {
    //     // save data
    //     localStorage.setItem('', JSON.stringify({}));

    //     // redirect to customer products
    //     setShouldRedirect(true);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <form id="checkout-form" action="">
      <Fieldset>
        <select
          name="select-seller"
          id="customer_checkout__select-seller"
          data-testid="customer_checkout__select-seller"
          value={ seller }
          onChange={ (e) => setSeller(e.target.value) }
        >
          {
            sellers.map(({ id, name }) => (
              <option value={ id }>{ name }</option>
            ))
          }
        </select>

        <TextInputLabel
          id="customer_checkout__input-address"
          type="text"
          dataTestId="customer_checkout__input-address"
          label="Address"
          placeholder="Address"
          value={ address }
          handleOnChange={ (e) => setAddress(e.target.value) }
        />

        <TextInputLabel
          id="customer_checkout__input-address_number"
          type="text"
          dataTestId="customer_checkout__input-addressNumber"
          label="Address Number"
          placeholder="Address Number"
          value={ addressNum }
          handleOnChange={ (e) => setAddressNum(e.target.value) }
        />

        <Button
          id="customer_checkout__button-submit-order"
          type="sumbit"
          dataTestId="customer_checkout__button-submit-order"
          disabled={ submitDisabled }
          handleOnClick={ (e) => handleSubmit(e) }
        >
          Confirm Order
        </Button>
      </Fieldset>

      {/* Redirect to Products page */}
      {
        shouldRedirect && <Navigate replace to="/customer/orders" />
      }
    </form>
  );
}

export default CheckoutForm;
