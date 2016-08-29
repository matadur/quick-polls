Meteor.startup(function() {

  // if there are no polls available
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [{
      question: 'The Taj Mahal is located where in India?',
      choices:[{text:'Chennai'},{text:'Mumbai'},{text:'Agra'},{text:'Other'}],
      infoUrl:'http://www.tajmahal.gov.in/',
      submitter:'Matt Durr'
    },{
      question: 'What name was given to Superman by his birth parents?',
      choices:[{text:'Clark Joseph Kent'},{text:'Kal-El'},{text:'Bruce Wayne'},{text:'Jor-El'}],
      infoUrl:'https://www.google.com/?ion=1&espv=2#q=superman%27s%20origin'
    }]

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll)
    })
  }

})
