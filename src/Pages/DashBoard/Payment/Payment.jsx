import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = (props) => {
    const location = useLocation()
    console.log(props, "props");
    // const price = location.state?.price;
    const salary = location.state?.salary;
    const workingmonth = location.state?.workingmonth;
    const price = salary * workingmonth;
    console.log("price and class shown", price);

    return (
        <div>
            <Sectiontitle heading="Payment" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price}  />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
