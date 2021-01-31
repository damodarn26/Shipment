# DemoProject
    This test automation project is developed using cypress
  
# Tests location
    The tests can be found in location  
    Shipment\cypress\integration\functional
    
# The test data is stored in files in location
    Shipment\cypress\fixtures\testData.json
    Shipment\cypress\fixtures\errorMessages.json
    
# The selectors is stored in location
    Shipment\TestProject\cypress\support\selectors.js
    
  
#  Running tests in command prompt
    npm install
    cypress:run
    
#  Running tests in Cypress Window
    Open cypress window using command 'npx cypress open'
    Go to folder functional and click on the tests to run
    
#  Running tests in CI environemnt
   Tests can be run using the cypress docker image using below command in a shell
   
      $ docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0

# videos of the test execution are generated in the below folder
    Shipment\cypress\videos\functional
