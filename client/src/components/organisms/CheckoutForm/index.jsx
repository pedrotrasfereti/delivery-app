import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts } from '../../../redux/features/productsSlice';

/* Children */
import { Button, Select, TextInput } from '../../atoms';

/* Services */
import { getAllSellers, createSale } from '../../../services/request';

/* Styles */
import Styled from './Styled';

export default function CheckoutForm() {
  const dispatch = useDispatch();
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
        setSeller(String(sellersData[0].id)); // default select value
        setSellers(sellersData);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  // Handle Submit
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

      // Clear Cart
      dispatch(clearProducts());

      // Create Sale
      const { id: orderId } = await createSale(token, { sale, products });

      // Redirect to Order Details
      navigate(`/customer/orders/${orderId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styled id="checkout-form" action="">
      <Select
        name="select-seller"
        value={ String(seller) }
        handleOnChange={ (e) => setSeller(e.target.value) }
      >
        <option value="-1" disabled>=== Select Seller ===</option>
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
      </Select>

      <div className="InputGroup">
        <TextInput
          type="text"
          placeholder="Address Line"
          value={ address }
          onChange={ (e) => setAddress(e.target.value) }
        />

        <TextInput
          type="text"
          placeholder="Apt No."
          value={ addressNum }
          onChange={ (e) => setAddressNum(e.target.value) }
        />
      </div>

      <Button
        type="sumbit"
        disabled={ submitDisabled }
        handleOnClick={ (e) => handleSubmit(e) }
      >
        Confirm Order
      </Button>
    </Styled>
  );
}
