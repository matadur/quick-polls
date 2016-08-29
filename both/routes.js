
var homeRoute = {
  action() {
    BlazeLayout.render('masterLayout',{
      content: 'takePollPage'
    });
  }
};

var addPollRoute = {
  action() {
    BlazeLayout.render('masterLayout', {
      content: 'addPollPage'
    });
  }
};

var mapRoutes = function () {
  FlowRouter.route('/', homeRoute);
  FlowRouter.route('/add-poll', addPollRoute);
}

mapRoutes();
