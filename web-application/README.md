# Mini web application

 Create a mini IMDB kind of web application 

Create a simple webpage which allows the user to search using the IMDB title ID and see the movie details.

The page can contain a search bar when the user opens the web app enters the IMDB title ID and hits the search/enter button to trigger the search.

Once the search action is triggered, make an API call to the below API by replacing the IMDB title ID typed by the user. For example, if the user entered the IMDB title ID as tt3896198 then the Ajax API call should be GET http://www.omdbapi.com/?apikey=b31db97e&i=tt3896198, similarly, if the user entered 123 then the Ajax API call should be GET http://www.omdbapi.com/?apikey=b31db97e&i=123

On Ajax Success, use the information returned by the API and update the movie details section on the page along with the poster image.



Acceptance Criteria:

The Page should be responsive, for both desktop and mobile

Users should be able to search using the keyboard Enter key and by clicking the Search button

Movie details should contain the basic movie details like Movie Name, Year, Poster Image, Director, Cast related information, Movie description, etc.,

When you load a new movie title, show a loader while fetching the details from the API

Show a Not Found Page if the IMDB title is not found

Attachments (3)
