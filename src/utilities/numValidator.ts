const numberValidator = (stringNumber: string): boolean => {
    if ((stringNumber as string).match(/^\d+$/)) {
        const num = parseInt(stringNumber);
        if (num > 0) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }
}

export default numberValidator;
