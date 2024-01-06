import { RAZOR_PAY_ID, RAZOR_PAY_URL } from "../../Constants";
import { loadScipt } from "../../Helpers";

const RazorPayThings = () => {
  const handleRazorPay = async (amount) => {
    const res = await loadScipt(RAZOR_PAY_URL);
    if (!res) return alert("You're offline");

    const options = {
      key: RAZOR_PAY_ID,
      currency: "INR",
      amount: amount * 100,
      name: "TS Razor Pay Test",
      description: "Thanks for purchasing",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmoney-png&psig=AOvVaw0DHOrpgot4oisKFiTZcdl6&ust=1691130308942000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMigubztv4ADFQAAAAAdAAAAABAE",
      order_id: "",
      // callback_url: "",
      modal: {
        ondismiss() {
          alert("Modal Closed by the User");
        }
      },
      handler: (res) => {
        console.log("Response : ", res);
        const list = document.createElement("li");
        list.innerHTML = res.razorpay_payment_id;
        document.querySelector(".transaction").append(list);
      },
      prefill: {
        name: "Testing Purpose"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      {"Razor Pay "}
      <button onClick={() => handleRazorPay(1000)}>Payment</button>
      <ul className="transaction"></ul>
    </div>
  );
};

export default RazorPayThings;
