/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";


const AllTrainerCard = ({profile}) => {
  const{profileImage ,name ,workingmonth,salary}=profile;
  const [classPrice, setClassPrice] = useState(0)
  const [data, setData] = useState({})
  const [totalSalary, setTotalSalary] = useState(0);
  const calculateTotalPay = () => {
    return salary * workingmonth;
};
const handlePrice = (workingmonth,salary) => {
  console.log("price dekhooo", salary, workingmonth);
  // const totalPay = calculateTotalPay();
  const price = salary * workingmonth;
  // console.log("Total Pay:", totalPay);
  setTotalSalary(price)
const paymentData= {salary, workingmonth}
  
  // setClassPrice(totalPay);
  // console.log(classPrice);

  // const classData = { price: totalPay };
  setData(paymentData);
  console.log(paymentData);
};

    return (
        
            <tr  className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={profileImage} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{workingmonth}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{salary}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"> {calculateTotalPay(profile)}</td>

                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <Link to="/dashboard/payment" state={{ workingmonth: workingmonth, salary: salary }}>
          <button onClick={()=>handlePrice(workingmonth,salary)} className="btn bg-blue-400 text-white btn-xs">
            Pay
          </button>
        </Link>
      </td>
                                        </tr>
        
    );
};

export default AllTrainerCard;