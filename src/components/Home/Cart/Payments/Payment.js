import axios from "axios";

const Payment = ({ cartItems }) => {
  const handleCheckout = () => {
    axios
      .post(`https://dokan-backend.onrender.com/create-checkout-session`, {
        cartItems,
      })
      .then(response => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch(err => console.log(err.message));
    console.log(cartItems);
  };

  return (
    <>
      <button
        type="submit"
        className="btn btn-active btn-neutral rounded-full text-white px-10 mt-10"
        onClick={() => handleCheckout()}
      >
        save and next to payment
      </button>
    </>
  );
};

export default Payment;
