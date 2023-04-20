function conflit( message = 'Conflit') {
    return {
        name: "ConflitError",
        message,
    }
}

function unauthorized(message = 'Unauthorized') {
    return {
        name: "UnauthorizedError",
        message,
    }
}

export default { conflit, unauthorized }