Expensify v0.1

Welcome to Expensify - a simple expense tracking app. This app
is built using React, Redux and various modules, which are outlined below. This is a practice project in order to learn how various components integrate with each other and use props, how to set up global application state and how to test components. 

*--- THIS IS A REACT & REDUX BASED PROJECT ---*

List of used modules:

-- React (including various React modules)
-- Redux
-- Enzyme
-- Express
-- Moment
-- UUID
-- AirBnB Date picker

This application is deliberately not styled as it is purposed to demonstrate functionality and is not meant to present itself as a styled web app. Running app can be found here:

https://ambi-expensify-app.herokuapp.com/ 




*** Core functionality ***

Application starts in src/index.js, where document render takes place. Provider element is wrapping AppRouter component which holds all the routes for the application and pulls all other components to the top of the application.

All components are then responsible for their individual functionality as per best React practices. They can be found in src/components. Each component is trying to be as reusable as possible. For example, ExpenseForm component is using conditional component state in order to be reused in both AddExpensePage and EditExpensePage components. 

State communication between components is provided for Redux Store, except for the instances where local component state is necessary. ExpenseForm component would be an example, as there is no need to dispatch it's field checking state to the Store. 

Application allows for making expense list and supports filtering options. You can filter by date(default), amount, expense start date or expense end date. Filters code can be found in src/ExpenseListFIlters.js component.

When creating an expense, application will check the inputted information and validate it. More specifically, expense name is necesary and amount can only be a number in a specific format (filed will only accept digits and will allow only two digits after decimal). Note is not compulsory.

Finally, for development purposes, application has a handful of test cases to monitor it's health in case any code has been changed. Test cases can be accessed here src/tests. Testing is performed by Jest, which is built in via create-react-app.

For Heroku deployment application has a basic Express server set up to monitor route requests. In essence, for any route request Express pushes index.html file and AppRouter serves the reuired route afterwards.

!! IMPORTANT !!

Application does not have a database connected, no data is saved and all expenses will be wiped after page reload.

Puropose of this application is demonstration only and hence database connection was not planned from the beginning.
