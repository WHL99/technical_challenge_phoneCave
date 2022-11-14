# The Challenge
At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## Setup

- Clone this repo
- Open the file and start:

  ```bash
  cd technical_challenge_phone_cave
  ```
  First install all npm package in root folder (backend) and run it: 
  ```bash
  npm install
  npm run dev
  ```
  Second install all npm package in client folder (frontend) and run it:
  ```bash
  cd client
  npm install
  npm start
  ```
  
- Create ```.env``` file in root folder with the following variables:
  ```
  PORT=5005
  ORIGIN=http://localhost:3000
  ```
  
- Create ```.env``` file in root folder with the following variables:
  ```
  REACT_APP_APIURL=http://localhost:5005/api/phones/
  ```

## Stack 

- Frontend: React
- Backend: Express and Node
