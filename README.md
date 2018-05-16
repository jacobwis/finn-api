# Finn API

This is the repository for the [Finn](https://finnreading.com) GraphQL API.

### Setup

**Note:** Running Finn requires a PostgeSQL database as well as Redis.

1.  Clone the repository `git clone https://github.com/wisniewskij26/finn-api.git`
2.  Install dependencies: `yarn install`
3.  Set the proper environment variables:

```
PORT=
DB_URL=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
```

3.  Run the database migrations using `yarn run migrate`
4.  Start the app using `yarn run start`
