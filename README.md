# Natural Disaster Tracker API
> The backend API for the [Natural Disaster Tracker](https://github.com/tarandeept/natural-disaster-tracker)

## Table of Contents
1. [Usage](#Usage)
    1. [Routes](#Routes)
2. [Development](#development)
    1. [Install Dependencies](#development)
    2. [Run the API](#development)
3. [Contributing](#contributing)

## Usage
> The API is deployed on Heroku at https://afternoon-ocean-07073.herokuapp.com/

### Routes
  - GET `/api/events/`
    - Returns current natural disasters using the [NASA EONET API](https://eonet.sci.gsfc.nasa.gov/docs/v3)

## Development
> Must have node and npm installed
1. Install Dependencies
  ```sh
  npm install
  ```

2. Run the API
  ```sh
  npm run start
  ```

## Contributing
1. Fork it (<https://github.com/tarandeept/natural-disaster-tracker-backend>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request