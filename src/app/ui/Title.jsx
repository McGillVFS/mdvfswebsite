const Title = ({ text }) => {
    return (
        <div>
            <div className="h-40 w-full flex items-center justify-center">
                <p className="text-7xl font-bold">{text}</p>
            </div>
            <div className="h-5 w-full bg-red-600" />
        </div>
    )
}

export default Title;