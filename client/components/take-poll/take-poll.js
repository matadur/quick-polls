
Template.takePollPage.onCreated( function() {
  this.subscribe( 'Polls' );
  Session.set("PollsCompleted", [])
});

Template.takePollPage.helpers({

  polls: function(){
    return Polls.find({}, {sort: {_id : 1} })
  },

  nextPoll: function() {
    var items = Polls.find({"_id":{$nin:Session.get("PollsCompleted")}}, {sort: {_id : 1} }).fetch()
    return items.slice(-1)
  },

  finished: function(){
    let pc = Session.get("PollsCompleted")
    return pc.length >= 2
  }

});
