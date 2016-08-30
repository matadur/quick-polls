
Template.poll.events({
  'click .select-choice': function(event) {
    event.preventDefault()

    clearSelections()

    $(event.currentTarget)
    .addClass('btn-success')
    .addClass('selected')

  },

  'click .more-info': function(event) {
    event.preventDefault()
    window.open(this.infoUrl, '_blank')
  },

  'click .submit-choice': function(event) {
    event.preventDefault()

    // get the parent (poll) id
    var pollID = $('.select-choice.selected').parent('.poll').data('id')
    var voteID = $('.select-choice.selected').data('id')

    if(!pollID){
      alert('Please select a choice!')
      return
    }

    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes'
    var action = {}
    action[voteString] = 1

    // increment the number of votes for this choice
    Polls.update(
      { _id: pollID },
      { $inc: action }
    )

    var pc = Session.get("PollsCompleted")
    pc.push(pollID)
    Session.set("PollsCompleted", pc)

    clearSelections()

  }

});

clearSelections = function(){
  $('.select-choice.selected')
  .removeClass('btn-success')
  .removeClass('selected')
  .addClass('btn-primary')
}
