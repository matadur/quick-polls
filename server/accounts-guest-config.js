Meteor.startup(function() {

  // https://github.com/artwells/meteor-accounts-guest

  /* clean out all guest accounts more than 24 hours old */
  Accounts.removeOldGuests()
  AccountsGuest.anonymous = true
  AccountsGuest.name = true

})
