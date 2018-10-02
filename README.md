# Finimize Full-Stack Development Challenge

This repo is intended to be forked and uploaded to your own Github account in
order to form the submission for the challenge. Once cloned, it will give you a basic Node server with a React app, so you don't have to spend time writing
boilerplate code. Feel free to make any changes you wish - the existing code is purely intended to get you going faster.

## Run Instructions

To run the app, `cd` into the project root directory and run `yarn install` & `yarn start`
(install Yarn [here](https://yarnpkg.com/en/docs/install)).

There is one basic test written in the client, which you can run by performing
`cd client` and then `yarn test`. Any new client tests can be added using Jest.

Mocha has been installed on the server to allow you to create server tests,
although none have been written yet.

## The Challenge

Create a web-app that shows how much you can expect to make from your savings
over time.

The app must satisfy the following Acceptance Criteria (ACs):

- It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
- It should display how much the user's initial savings amount will be worth
  over the next 50 years, to a monthly precision. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied.
- It should allow the user to select how often interest is paid - either 'Monthly', 'Quarterly' or 'Annually'
- All calculations must take place server-side, and all monthly projection data should be returned via an endpoint
- The calculations must be triggered onChange of any input, to give live feedback on the input data. The performance (try the slider) should be reasonable.
- You can use any tech stack on the client you like to manage app state and server communication (e.g. Redux with Thunk/Saga/other API client, Relay/Apollo/GraphQL etc.)

### Our Guidance

The challenge should not take any more than 2-4 hours. You do not need to complete the challenge in one go.

Although the API might be returning relatively straightforward content, please try and write the API code as if you were building something more complex. We would like to gain an idea of how you would go about structuring API code.

Feel free to make any changes to the UI you see fit, although please don't prioritise styling! Something basic will do just fine.

Do you test drive your code? This is something we value - any indicator of BDD/TDD would make us smile.

When you are finished, you should send us a link to the codebase, preferably via git (e.g. github) showing multiple commits, so we can see its evolution.

### The redux story

Could have added redux. Made no sense for this app. Makes no sense in general. Let's all get over it and use better solutions like `setState` 😀
