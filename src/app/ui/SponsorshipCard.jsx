const SponsorshipCard = ({ tier, price, bullets }) => {
    
    const listItems = bullets.map((bullet, index) => (
        <li key={index} className="text-base font-tajawal py-2 text-gray-500">
            • {bullet}
        </li>
    ));

    return (
        <div className="flex p-4 bg-white rounded-lg flex-col items-center shadow-md border border-solid border-gray-300">
            <h1 className="text-lg font-bold font-tajawal text-center">{tier}</h1>
            <h2 className="text-4xl pb-2 font-bold font-tajawal text-center">{price}</h2>
            <ul className="px-8 py-3">{listItems}</ul>
        </div>

    )
}

export default SponsorshipCard;