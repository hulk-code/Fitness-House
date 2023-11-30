
// import { useLocation } from "react-router-dom";
// import useAuth from "../../../Hook/UseAuth/UseAuth";
// import useAxiosPublic from "../../../Hook/UseAxiousPublic/UseAxiousPublic";
// import { useEffect, useState } from "react";
// const Booking = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const selectedSlot = queryParams.get("slot");
  
//     const { user } = useAuth();
  
//     const [premiumPlan, setPremiumPlan] = useState([]);
//     const axiosPublic = useAxiosPublic();
  
//     useEffect(() => {
//       axiosPublic.get('/premimu')
//         .then(res => {
//           setPremiumPlan(res.data)
//         })
//     }, []);
  
//     console.log(premiumPlan[0]?.primium);
  
//     const [selectedPlans, setSelectedPlans] = useState(null);
  
//     const handlePlansSelection = (e) => {
//       const selectedValue = e.target.value;
//       console.log("Selected Plan (Event Value):", selectedValue);
//       setSelectedPlans(selectedValue);
//     };
  
//     useEffect(() => {
//       console.log("Selected Plans (State):", selectedPlans);
//     }, [selectedPlans]);

//     const booking = {
//         slot: selectedSlot,
//         plan: selectedPlans,
//         userName: user?.displayName,
//         userEmail: user?.email
//       };
  
//       console.log("Booking Data:", booking);
  
//     const handleBookingSubmit = (e) => {
//       e.preventDefault();

//       axiosPublic.post('/bookings', booking)
//         .then(response => {
//           console.log(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     };
  
//     return (
//       <div className="min-h-screen ">
//         <form onSubmit={handleBookingSubmit} className="flex justify-center pt-32">
//           <div>
//             <select id="timeSlot" onChange={handlePlansSelection}>
//               <option value="" disabled selected>Select a time slot</option>
//               {premiumPlan[0]?.primium.map((plan, index) => (
//                 <option key={index} value={Object.keys(plan)[0]}>
//                   {Object.keys(plan)[0]}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default Booking;
  
import { useLocation } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth/UseAuth";
import useAxiosPublic from "../../../Hook/UseAxiousPublic/UseAxiousPublic";
import { useEffect, useState, useRef } from "react";

const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedSlot = queryParams.get("slot");

    const { user } = useAuth();

    const [premiumPlan, setPremiumPlan] = useState([]);
    const axiosPublic = useAxiosPublic();
    const selectRef = useRef(null);

    useEffect(() => {
        axiosPublic.get('/premimu')
            .then(res => {
                setPremiumPlan(res.data)
            })
    }, []);

    const [selectedPlans, setSelectedPlans] = useState(null);

    const handlePlansSelection = (e) => {
        const selectedValue = e.target.value;
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

    const handleSelectHover = () => {
        if (selectRef.current) {
            selectRef.current.focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleBookingSubmit} className="bg-white p-8 shadow-md rounded-md transition-transform duration-300 transform hover:scale-105">
                <div className="mb-4" onMouseEnter={handleSelectHover}>
                    <label htmlFor="timeSlot" className="block text-gray-700 text-sm font-bold mb-2">
                    Select Your Plan
                    </label>
                    <select
                        id="timeSlot"
                        ref={selectRef}
                        onChange={handlePlansSelection}
                        className="w-full p-2 border rounded-md transition-shadow duration-300 focus:outline-none focus:shadow-outline-blue hover:shadow-md"
                    >
                        <option value="" disabled selected>
                            Select Your Plan
                        </option>
                        {premiumPlan[0]?.primium.map((plan, index) => (
                            <option key={index} value={Object.keys(plan)[0]}>
                                {Object.keys(plan)[0]}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Booking;