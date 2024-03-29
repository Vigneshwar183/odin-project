const mongoose = require('mongoose');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const User = require('./models/User');
require('dotenv').config();

passport.serializeUser((user, done)=>{
    return done(null, user)
})

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err, user)
    })
})

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_API_ID,
    clientSecret: process.env.FACEBOOK_API_SECRET,
    callbackURL: 'http://localhost:3000/auth/login/facebook'
  },
  async function(accessToken, refreshToken, profile, cb) {    
    const userExists = await User.findOne({facebookId: profile.id})

    if (userExists){
        const user= userExists
        return cb(null, user)
    } else {
        var user = new User({
            username: profile.displayName,
            facebookId: profile.id,
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            posts: [],
            friendList: [],
            profilePicture: '',
            coverPhoto: '',
            notifications: []
        })
        user.save((err)=>{
            if (err) return next(err)
        })
        return cb(null, user)

    }
  }
));

module.export = passport