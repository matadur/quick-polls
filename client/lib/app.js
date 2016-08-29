Template.takePollPage.helpers({

  polls: function(){
    return Polls.find()
  },
  nextPoll: function() {
    var items = Polls.find({}, {sort: {_id : 1} }).fetch();
    return items.slice(-1);
  }

});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
