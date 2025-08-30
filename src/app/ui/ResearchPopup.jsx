import ImgCaption from "./ImgCaption";

const ResearchPopup = ({ year, type, subject, presented_by, advised_by, abstract, figures }) => {
    return (
        <div>
            <p className="text-2xl font-bold text-white font-tajawal">{subject}</p>
            <div className="py-5">
                <p className="text-base text-white font-tajawal">Presented by: {presented_by}</p>
                <p className="text-base text-white font-tajawal">Advised by: {advised_by}</p>
            </div>
            
            <div className="flex pb-5 space-x-2">
                <p className="text-sm text-white font-tajawal">{type}</p>
                <p className="text-sm italic text-white font-tajawal">{year}</p>
            </div>

            <div>
                <p className="text-sm text-white font-tajawal">{abstract}</p>
            </div>  

            <div className="flex items-center flex-col">
                {figures && figures.map((figure, index) => (
                    <div key={index} className="pt-5">
                        <ImgCaption src={figure.src} Text={figure.caption} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResearchPopup;