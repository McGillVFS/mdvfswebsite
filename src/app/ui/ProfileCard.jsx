const ProfileCard = ({imageUrl, name, program, title}) => {
  return (
    <div className="m-8 p-4 flex flex-wrap justify-center text-center gap-4 bg-white rounded-lg shadow-md border border-solid border-gray-300 max-w-xs min-w-40">
      <div>
        <img src={imageUrl} alt={name} className="w-40 h-40 rounded-lg mb-2" />
        <h2 className="text-lg font-bold font-tajawal">{name}</h2>
        <p className="text-sm text-gray-500 font-tajawal">{program}</p>
        <p className="text-sm text-gray-500 font-tajawal">{title}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
