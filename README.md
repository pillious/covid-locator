## Inspiration

With the recent COVID-19 pandemic, people fear that going to the supermarket or just going on a walk will cause them to contract coronavirus. Because the actual risk of getting coronavirus differs greatly by state, and even by city, we wanted to build an app that can report out the risk at the current user’s location in real-time.  Additionally, we wanted to create an alternative solution to contact tracing.  Because privacy is a hot topic, especially in the tech industry, we looked to develop a pseudo-contract tracing method that allows the user to both keep his privacy and check locations he might have come in contact with a COVID-19 carrier.

## What it does

The app keep a log of all the places the user has been to recently.  In those logs, each location is displayed with the current risk of that place and when the user was last there.  Along with the map, the app also provides a real-time risk assessment of the user’s current location.  By retrieving data from an existing COVID-19 API, an algorithm is able to convert the complicated data into a single, easy to interpret, risk score.

## How we built it

We used Visual Studio Code and Android Studio to create a React Native Phone Application using JavaScript, Google Maps, and a custom COVID-19 API.

## Challenges we ran into

Besides the difficulties that came along with using a new technology, React Native, we faced challenges that involved linking up the server-side code with the front-end React Native code. We needed to figure out a way to use data from our existing MongoDB database and integrate that with a custom algorithm for generating a single value between 0 and 10 as a COVID-19 risk factor for a specific location. Lastly, as we are in the midst of an epidemic, we were unable to bring our mobile devices to others locations besides our home to test, so we had to use coordinates for cities to test other locations.

## Accomplishments that we're proud of (What we learned)

Before this week, we had no experience developing mobile applications. Within a week, we had to quickly follow online courses to learn the ins and out of react-native. During the development process, we also learned how to integrate a Node.js backend with the react-native front end. We’re most proud of the fact that we tried our best to learn a completely new technology in a couple of days just so we could implement this project!

## What's next for Coronacator

Some additional features we would add to our application are web scraping, heat maps, and global coverage.
We would scrape the web for news articles about locations that have high COVID-19 risks and check if you ever went to one of those locations.
We would put heat maps on the google maps which show COVID-19 severity by darkening colors.
We would get more COVID-19 data from countries other than the United States.
