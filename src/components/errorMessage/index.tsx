type ErrorMessageProps = {
    message: string,
    testId: string,
    show: boolean
}

const ErrorMessage = ({ message, testId, show }: ErrorMessageProps) => {
    return (
        <>
            {show && (
                <span data-testid={"errorMessage"+testId} className="text-red-600 text-sm">
                    {message}
                </span>
            )}
        </>
    );
}

export default ErrorMessage;
