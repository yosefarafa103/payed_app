const ErrorValidationInputs = ({ message }: { message: string }) => {
    return (
        <span className='font-semibold mt-[10px] block text-sm text-red-500'>{message}</span>

    )
}

export default ErrorValidationInputs