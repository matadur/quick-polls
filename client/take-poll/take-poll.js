
Template.takePollPage.onCreated( function() {
  this.subscribe( 'Polls' );
});

Template.takePollPage.helpers({

  polls: function(){
    return Polls.find({}, {sort: {_id : 1} })
  },
  nextPoll: function() {
    var items = Polls.find({}, {sort: {_id : 1} }).fetch();
    return items.slice(-1);
  }

});
