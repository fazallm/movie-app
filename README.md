# Movie app
This repository contain a web application to display top 10 movies in 2019 and see information regarding the movie. This web application  satisfy this use-case: 
- Discovery - users of your website can view the top 10 movies of the year at a glance
- Research - users can compare movie metadata, such as ratings, actors, etc. in order to select
a film to screen
- Booking - users are able to proceed to purchase tickets to the desired movie via a button (the button’s implementation is not required, the button can redirect the user to or another 3rd-party website)

## Set up
### App
This web application use React.js as frontend and express.js for backend. To view deployed app, you can access via this [link](https://top10-movie-app.herokuapp.com/).
To deploy locally, you can clone this repository and run it on your local:
```
git clone https://github.com/fazallm/movie-app.git
cd movie-app
npm run install-all
npm run dev
```
Then open [localhost:3000](http://localhost:3000)

### Test
Backend unit test is implementing using chai and mocha. To run the test, you can type this command on root directory
```
npm run test
```
