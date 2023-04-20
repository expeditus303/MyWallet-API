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

function notFound(message = 'Not Found') {
    return {
        name: "NotFoundError",
        message,
    }
}

export default { conflit, unauthorized, notFound }