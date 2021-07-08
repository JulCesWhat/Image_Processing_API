import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use('/api', routes);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('main :)');
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
