import React, { useEffect, useState } from "react";
import discount from "../../../images/discount.jpg";
const AddsModel = () => {
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!modalShown) {
      const timer = setTimeout(() => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
          modal.showModal(); // Show the modal after 5 seconds
          setModalShown(true); // Update state to indicate that the modal has been shown
        }
      }, 5000); // 5 seconds in milliseconds

      return () => clearTimeout(timer);
    }
  }, [modalShown]);

  return (
    <div>
      {/* Other content of your app */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* If there is a button in the form, it will close the modal */}
            <button className="bg-red text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <img src={discount} alt="img" />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddsModel;
