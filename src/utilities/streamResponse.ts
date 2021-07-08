import express from 'express';
const fs = require('fs');
const stream = require('stream');

const myFunc = (newFilename: string, res: express.Response): void => {
    const r = fs.createReadStream(newFilename); // or any other way to get a readable stream
    const ps = new stream.PassThrough(); // <---- this makes a trick with stream error handling
    stream.pipeline(
        r,
        ps, // <---- this makes a trick with stream error handling
        (err: any) => {
            if (err) {
                console.log(err) // No such file or any other kind of error
                return res.sendStatus(400);
            }
        });
    ps.pipe(res); // <---- this makes a trick with stream error handling
};

export default myFunc;
