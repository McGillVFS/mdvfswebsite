const ResearchPopup = ({ year, type, subject, presented_by, advised_by, abstract }) => {
    return (
        <div>
            <p className="text-2xl font-bold text-white font-tajawal">{subject}</p>
            <div className="px-5">
                <p className="text-base text-white font-tajawal">Presented by: {presented_by}</p>
                <p className="text-base text-white font-tajawal">Advised by: {advised_by}</p>
            </div>
            
            <div className="flex space-x-2 px-5">
                <p className="text-sm text-white font-tajawal">{type}</p>
                <p className="text-sm italic text-white font-tajawal">{year}</p>
            </div>

            <div>
                <p className="text-sm text-white font-tajawal p-5">{abstract}</p>
            </div>
            
        </div>
    )
}

export default ResearchPopup;