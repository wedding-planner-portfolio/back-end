# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

### Endpoints

#### Register a new user
`POST` to `https://wedding-planner-build-week.herokuapp.com/auth/register`
The request body requires the following:
```
{
    "firstName": "Ronny",
    "lastName": "Alvarado",
    "email": "Rsalvarado777@gmail.com",
    "password": "abc123",
    "phone": "9999999999"
}
```

#### Login using an existing user
`POST` to `https://wedding-planner-build-week.herokuapp.com/auth/login`
The request body requires a username and password:
```
{
    "username": "Rsalvarado777@gmail.com",
    "password": "abc123"
}
``` 
#### Add a post 
`POST` to `https://wedding-planner-build-week.herokuapp.com/api/post`
The request body requires the following:
```
{
    "userId": 1,
    "imageURL": "some link",
    "description": "some description",
    "location": "some location",
    "theme": "some theme",
    "pricing": "some pricing",
    "features": "some features",
    "vendors": "some vendors"
}
```
#### Delete a post
`DELETE` to `https://wedding-planner-build-week.herokuapp.com/api/post/${postid}`
For delete requests, send the id of that post.

#### Edit a post
`PUT` to `https://wedding-planner-build-week.herokuapp.com/api/post/${postid}`
For put request to update the particular post, pass the postid as the first argument and the body as the second (body matches the same as adding a post).

