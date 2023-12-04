## Assignment 1 - Rate limit

## Tech Stack
- NodeJs


## Requirements
- node


## Setup
1. After cloning, go to Application root Directory: 
    ```
    cd rateLimit
    ```

2. Install Project packages:
    ```
    npm install
    ``` 

3. Run the app
    ```
    node server.js
    ```

## How to test?
For example using postman tool, make a http://localhost:5000/api/notification request with GET method
As our assignment notification API(http://localhost:5000/api/notification) is set to 5 requests rate limit in 1 minute, 
then you will see a message that said, you have reach rate limit after 5 calling http://localhost:5000/api/notification requests,
but with Welcome API(http://localhost:5000/api/welcome) can be called many times because is not set on rate limit middleware.


