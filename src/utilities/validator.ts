import express from 'express';
import numValidator from './numValidator';
import filenameValidator from './filenameValidator';

const validator = (req: express.Request, res: express.Response, next: Function): void => {
    const { filename, width, height } = req.query;
    if (filename && width && height) {
        if (!filenameValidator(filename as string)) {
            const existingImages = 'Please try one of the following encenadaport, fjord, icelandwaterfall, palmtunnel, and santamonica';
            res.status(400).send(`The file name ${filename} does not exist. ${existingImages}`);
        } else if(numValidator(width as string) && numValidator(height as string)) {
            next();
        } else {
            res.status(400).send('The query parameters width and height have to be whole positive numbers');
        }
    } else {
        res.status(400).send('The query parameters filename, width, and height are required');
    }
}

export default validator;
