
import { useLocation } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth/UseAuth";
import useAxiosPublic from "../../../Hook/UseAxiousPublic/UseAxiousPublic";
import { useEffect, useState } from "react";
const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedSlot = queryParams.get("slot");
  
    const { user } = useAuth();
  
    const [premiumPlan, setPremiumPlan] = useState([]);
    const axiosPublic = useAxiosPublic();
  
    useEffect(() => {
      axiosPublic.get('/premimu')
        .then(res => {
          setPremiumPlan(res.data)
        })
    }, []);
  
    console.log(premiumPlan[0]?.primium);
  
    const [selectedPlans, setSelectedPlans] = useState(null);
  
    const handlePlansSelection = (e) => {
      const selectedValue = e.target.value;
      console.log("Selected Plan (Event Value):", selectedValue);
      setSelectedPlans(selectedValue);
    };
  
    useEffect(() => {
      console.log("Selected Plans (State):", selectedPlans);
    }, [selectedPlans]);

    const booking = {
        slot: selectedSlot,
        plan: selectedPlans,
        userName: user?.displayName,
        userEmail: user?.email
      };
  
      console.log("Booking Data:", booking);
  
    const handleBookingSubmit = (e) => {
      e.preventDefault();

      axiosPublic.post('/bookings', booking)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    return (
      <div className="min-h-screen ">
        <form onSubmit={handleBookingSubmit} className="flex justify-center pt-32">
          <div>
            <select id="timeSlot" onChange={handlePlansSelection}>
              <option value="" disabled selected>Select a time slot</option>
              {premiumPlan[0]?.primium.map((plan, index) => (
                <option key={index} value={Object.keys(plan)[0]}>
                  {Object.keys(plan)[0]}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Booking;
  