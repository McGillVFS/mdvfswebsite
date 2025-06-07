const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md border border-solid border-gray-300">
        <div className="p-2">
            {icon}
        </div>

        <div className="pl-4">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
        </div>

    </div>
  );
}

export default InfoCard;