

const RecoClass = ({recoclass}) => {
    const { className, classDetails, trainerName, trainerWeeklyTime }=recoclass;
    console.log(recoclass);
    return (
        <div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{className}</div>
        <p className="text-gray-700 text-base">{classDetails}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">Trainer: {trainerName}</p>
        <p className="text-gray-700 text-base">Weekly Schedule:</p>
        <ul className="list-disc ml-5">
        {Object.entries(trainerWeeklyTime).map(([day, time]) => (
            <li key={day}>{`${day}: ${time}`}</li>
          ))}
        </ul>
      </div>
    </div>
        </div>
    );
};

export default RecoClass;