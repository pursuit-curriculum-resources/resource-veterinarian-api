# Veterinarian API

This server is intended to be used with the Emagi Project.

## Implementation

This server is created using the [`json-server`](https://www.npmjs.com/package/json-server) NPM package.

Some of the data came from [this Kaggle dataset.](https://www.kaggle.com/aaronschlegel/seattle-pet-licenses)

### Resources

The following resources exist:

- Pets: `/api/pets`
- Owners: `/api/owners`
- Owners/Pets: `/api/owners_pets`
- Employees: `/api/employees`

## Installation

1. Clone the repository.
1. `npm install`
1. `npm start`

## Deployment with Heroku

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
1. Login to your Heroku CLI with `heroku login`.
1. `heroku create`
1. `git push heroku main`
