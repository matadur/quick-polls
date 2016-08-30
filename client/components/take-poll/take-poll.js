
Template.takePollPage.onCreated( function() {
  this.subscribe( 'Polls' );
  Session.set("PollsCompleted",[])
});

Template.takePollPage.helpers({

  nextPoll: function() {
    var items = Polls.find({"_id":{$nin:Session.get("PollsCompleted")}}, {sort: {_id : 1} }).fetch()
    var np = items.slice(-1)
    var poll = np[0]
    return np
  },

  inprogress: function(){
    var pc = Session.get("PollsCompleted")
    return pc.length < 10
  }

});
