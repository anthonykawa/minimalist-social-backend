import express from 'express';
import session from 'express-session';
import passport from 'passport';
import apiRouter from './api';
import { SERVER_PORT } from './constants';

const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }, 
}));
app.use(passport.authenticate('session'));
app.use('/api', apiRouter);

app.listen(SERVER_PORT, () => {
  console.log(`listening on http://localhost:${SERVER_PORT}`);
});