
Accounts.onCreateUser(function (options, user) {

    if (Meteor.users.find().count()===0) {
      user.roles = ['admin']
    }

    return user;
});
