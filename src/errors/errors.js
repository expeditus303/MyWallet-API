function conflit( message = 'Conflit') {
    return {
        name: "ConflitError",
        message,
    }
}

export default { conflit, }