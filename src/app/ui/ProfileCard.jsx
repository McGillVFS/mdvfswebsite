const ProfileCard = ({icon, title, description}) => {
  return (
    <>
      <div className="flex p-4 bg-white rounded-lg shadow-md border border-solid border-gray-300">

        <div className="pl-4">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm text-gray-500 font-tajawal">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
