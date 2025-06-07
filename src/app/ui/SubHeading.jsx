const SubHeading = ({ text }) => {
  return(
    <>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl tracking-wide font-roboto-mono whitespace-nowrap">
            {text}
          </h3>
        </div>
        <div className="flex-grow border-b border-black"></div>
      </div>
    </>
  )
}

export default SubHeading