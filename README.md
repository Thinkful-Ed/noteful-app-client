# Noteful App Client

This app is a GUI client that can be used with any REST API that implements [the noteful API spec](https://documenter.getpostman.com/view/1161985/RVu4GVFE).

# Running the app

To run this app, you'll need to point it at a noteful API. By default, this app expects to find the API running at `http://localhost:8080`.  

If you need to point it elsewhere, you can do this by modifying `<meta name="API_ROOT" content="http://localhost:8080">` in the `index.html` file.

To run locally, you can use [http-server](https://www.npmjs.com/package/http-server) or an equivalent. Keep in mind that the client will need to run on a different port than the API. So with http-server, you might run `http-server -p 8081`.

