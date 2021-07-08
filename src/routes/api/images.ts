import express from 'express';
import resize from '../../utilities/resize';
import streamResponse from '../../utilities/streamResponse';
import validator from '../../utilities/validator';
const routes = express.Router();

routes.get('/', validator, async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = req.query as { filename: string, width: string, height: string };
    if (filename && width && height) {
        try {
            const numWidth = parseInt(width);
            const numHeight = parseInt(height);
            const newFilename = await resize(filename, numWidth, numHeight);
            streamResponse(newFilename, res);
        } catch (e) {
            res.status(404).send('Oops!');
        }
    } else {
        res.status(404).send('Invalid Query Parameter');
    }
});

export default routes;
