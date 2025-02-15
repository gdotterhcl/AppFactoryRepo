var userReporter = {
   jasmineStarted: function(suiteInfo) {
       voltmx.printprint('Running suite with total specs ' + suiteInfo.totalSpecsDefined);
   },
   
   suiteStarted: function(result) {
       voltmx.printprint('Test Suite: ' + result.description);
   },
   
   specStarted:function (result) {
       voltmx.print('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
   },
   
   specDone: function(result) {
       voltmx.print('Spec: ' + result.description + ' Execution status: ' + result.status);
       for(var i = 0; i < result.failedExpectations.length; i++) {
           voltmx.print('Failure: ' + result.failedExpectations[i].message + ' at ' + result.failedExpectations[i].stack);
       }
       voltmx.print('Spec: ' + result.description + 'Total passed expectations: ' + result.passedExpectations.length);
   },

   suiteDone: function(result) {
       voltmx.print('Suite: ' + result.description + ' was ' + result.status);
       for(var i = 0; i < result.failedExpectations.length; i++) {
            voltmx.print('Failure: ' + result.failedExpectations[i].message + ' at ' + result.failedExpectations[i].stack);
       }
   },

   jasmineDone: function() {
       voltmx.print('Finished suite');
   }
};