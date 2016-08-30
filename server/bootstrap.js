Meteor.startup(function() {

  // Polls.remove({})

  // if there are no polls available
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = getSeedPolls()

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll)
    })
  }

})
