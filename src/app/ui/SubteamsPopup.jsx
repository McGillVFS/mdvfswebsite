const ResearchPopup = ({ title, project_leads, content }) => {
    return (
        <div>
            <p className="text-2xl font-bold text-white font-tajawal">{title}</p>
            <div className="pt-5">
                <p className="text-base text-white font-tajawal">Project Leads:</p>
            </div>
            
            <div className="flex space-x-2 py-5">
                {
                    project_leads.map((leader, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img 
                                src={leader.img} 
                                alt={`Project Lead`} 
                                className="object-cover size-14 rounded-full aspect-square">
                            </img>
                            <p className="text-xs text-white font-tajawal text-light pt-2">{leader.name}</p>
                        </div> 
                    ))
                }
            </div>

            <div>
                <p className="text-sm text-white font-tajawal py-2">{content}</p>
            </div>
            
        </div>
    )
}

export default ResearchPopup;