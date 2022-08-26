

# Full stack developer test for Bluewinds

This test is for a career position at BlueWinds and will test your back-end skills.

## Purpose
The intended purpose is to test your backend skills, ranging from System design, and API development.


## Design tasks

1. Create an Express project [Express](https://expressjs.com/).
2. Create simple end-points in which a user can register and login
3. Use MongoDb as backend database put a .env file from which you will load the database path

## API tasks

1. You need to create an end-pooint called 'load_categories'
2. You need to integrate this [API](https://demo2.meals4u.net/fe/api.test.php), so whenever I hit the end-point it will return me the result from this api.
3. The end-point should be auth protected, so it can't be accessed publicly 

## Tools and technologies

1. Express
2. Mongoose
3. JWT auth (Recommened) 
4. MongoDb

## How to submit?
1. Fork this repository
2. Do your tasks
3. Commit your changes
4. Push them
5. Add "How to run instruction" in the area below

## How to run?
First Create .env file in server folder and add the following details 
DB = "Your database link"
JWTPRIVATEKEY = "Json Web token Secret Key"
SALT = 10
Then run 
"npm install"
command to install the dependencies in server folder.
And then run 
"node index.js"
command to run the backend of Web app

After this
Move into client folder run 
"npm install"
command to install the dependencies in client folder.
And then run 
"npm start"
command to run the frontend of Web app.

## Deadline
Please complete it within 3 days of assignment. 

## Popular resources
1. [Express](https://expressjs.com/en/starter/installing.html)
2. [Mongoose](https://www.npmjs.com/package/mongoose) (Hint: this can make your life really easier and will give you additional points)
