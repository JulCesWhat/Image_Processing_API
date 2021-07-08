import express from 'express';
import resize from '../../utilities/resize';
import streamResponse from '../../utilities/streamResponse';
import validator from '../../utilities/validator';
import numValidator from '../../utilities/numValidator';
const routes = express.Router();

routes.get('/', validator, async (req, res) => {
    const { filename, width, height } = req.query;
    if (filename && width && height) {
        try {
            const numWidth = parseInt(width as string);
            const numHeight = parseInt(height as string);
            const newFilename = await resize(filename as string, numWidth, numHeight);
            streamResponse(newFilename, res);
        } catch (e) {
            res.status(404).send('Oops!');
        }
    } else {
        res.status(404).send('Invalid Query Parameter');
    }
});

export default routes;
