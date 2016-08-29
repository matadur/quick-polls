
function publishPolls(){

  Meteor.publish('Polls', function () {
    return Polls.find();
  });

}

publishPolls();
