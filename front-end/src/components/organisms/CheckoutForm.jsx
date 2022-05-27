import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { Button, Fieldset } from '../atoms';
import { TextInputLabel } from '../molecules';

/* Services */
import { getAllSellers, createSale } from '../../services/request';

function CheckoutForm() {
  const navigate = useNavigate();

  // State
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNum, setAddressNum] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const { cart, totalPrice } = useSelector((state) => state.checkout);

  // Redirect
  useEffect(() => {
    if (seller && address && addressNum && totalPrice) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [seller, address, addressNum, totalPrice]);

  // Get Sellers
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = localStorage.getItem('user');
      const { token, id } = JSON.parse(user);

      const sale = {
        userId: id,
        sellerId: seller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: addressNum,
      };

      const products = cart.map(({ id: productId, quantity }) => ({
        productId: Number(productId),
        quantity,
      }));

      const { id: orderId } = await createSale(token, { sale, products });

      navigate(`/customer/orders/${orderId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form id="checkout-form" action="">
      <div />
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
              <option
                key={ id }
                value={ id }
              >
                { name }
              </option>
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
          handleOnChange={ setAddress }
        />

        <TextInputLabel
          id="customer_checkout__input-address_number"
          type="text"
          dataTestId="customer_checkout__input-addressNumber"
          label="Address Number"
          placeholder="Address Number"
          value={ addressNum }
          handleOnChange={ setAddressNum }
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
    </form>
  );
}

export default CheckoutForm;
