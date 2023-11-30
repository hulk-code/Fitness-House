import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Sectiontitle from "../../Home/SharedPage/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/UseAuth/UseAuth";

const KnowMore = () => {
  const KnowMore = useLoaderData();
 
  return (
    <div className=" pt-32">
      <Sectiontitle heading={KnowMore.name}></Sectiontitle>
      <div className="flex justify-end mb-10 px-5 md:px-10">
        <Link to="/beatrainer">
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">

{/* purple box */}
<span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
<span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
 BE_A_TRAINER
</span>
</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-10 mb-16">
        {KnowMore?.availableTimeSlots.map((slot) => (
          <div
            key={slot}
            className="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]"
          >
            <div className="p-4 py-5 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                <Link
                   to={{
                    pathname: `/booking`,
                    search: `?slot=${encodeURIComponent(slot)}`,
                    
                  }}
                  onClick={() =>
                    navigate(`/booking?slot=${encodeURIComponent(slot)}`)
                  }
                >
                  {slot}
                </Link>
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowMore;
