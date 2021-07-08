const filenameValidator = (filename: string): boolean => {
    const existingFiles = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
    if (existingFiles.includes(filename)) {
        return true;
    } else {
        return false;
    }
}

export default filenameValidator;
