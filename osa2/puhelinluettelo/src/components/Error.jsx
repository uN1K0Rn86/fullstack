const Error = ({ message }) => {
    if (message === null) {
        return null
    }
    
    const errorStyle = {
        color: 'red',
        borderStyle: 'solid',
        borderRadius: 3,
        fontSize: 20,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={errorStyle}>
            {message}
        </div>
    )
}

export default Error
