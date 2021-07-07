import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
    const { filename, width, height } = req.query;
    if (filename && width && height) {
        res.send('yaya!');
    } else {
        res.status(404).send('Oops!');
    }
});

export default routes;
