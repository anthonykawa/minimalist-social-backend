import express from 'express';
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const router = express.Router();

passport.use(new FacebookStrategy({
  clientID: process.env['FACEBOOK_CLIENT_ID'] || '',
  clientSecret: process.env['FACEBOOK_CLIENT_SECRET'] || '',
  callbackURL: '/api/auth/redirect/facebook',
  display: 'page',
}, (accessToken, refreshToken, profile, cb) => {
  cb(true);
}));

router.post('/oauth', (req, res) => {
  res.status(200).json({
    user: {
      id: 1,
    }
  })
});

router.get('/login/federated/facebook', passport.authenticate('facebook'));

export default router;