
Template.takePollPage.onCreated( function() {
  this.subscribe( 'Polls' );
});

Template.takePollPage.helpers({

  polls: function(){
    return Polls.find({}, {sort: {_id : 1} })
  },

  nextPoll: function() {
    var items = Polls.find({"_id":{$nin:Session.get("PollsCompleted")}}, {sort: {_id : 1} }).fetch()
    var p = items.slice(-1)[0]
    return p
  },

  inprogress: function(){
    let pc = Session.get("PollsCompleted")
    return pc.length < 10
  }

});
