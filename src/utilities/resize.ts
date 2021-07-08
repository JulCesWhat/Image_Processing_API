import sharp from 'sharp';
// const fs = require('fs');
import fs from 'fs';


const myFunc = (filename: string, width: number, height: number): Promise<string> => {
    const orgFilename = 'images/' + filename + '.jpg';
    const newFilename = 'thumbs/' + filename + '_' + width + '_' + height + '.jpg';

    if (fs.existsSync(newFilename)) {
        return Promise.resolve(newFilename);
    }

    return new Promise((resolve, reject) => {
        sharp(orgFilename)
            .resize(width, height)
            .toFile(newFilename, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(newFilename);
                }
            });
    });
};

export default myFunc;
