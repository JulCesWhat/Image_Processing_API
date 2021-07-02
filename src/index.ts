import express from 'express';
// import logger from './'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('running :)')
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
});
