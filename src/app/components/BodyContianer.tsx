const BodyContianer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#fdfdfd] py-[20px] px-[3vw] min-h-screen lg:w-[50%] mx-auto">
            {children}
        </div>
    )
}

export default BodyContianer