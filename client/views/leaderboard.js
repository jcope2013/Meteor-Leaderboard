Meteor.subscribe('newUsers');  //Subscribe to newUsers Publication

// Automatically call newUser method whenever there is a new user entered into system.

Deps.autorun( function(){
 if (Meteor.userId()){
    Meteor.call('newUser');
  }
});

// Return all players in collection 

Template.leaderboard.players = function () {
   return Players.find({}, {sort: {score: -1, name: 1}});
   };

// Finds whoever the session variable is set to and returns some of their info.

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };
  
// Using Session.equals here means that when the user clicks
// on an item and changes the selection, only the newly selected
// and the newly unselected items are re-rendered.

Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };
  
// Updates the selected player's score by 5 each time the button is clicked.

Template.leaderboard.events({
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    }
  });
  
// Set's a session variable to the player you click on.

 Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
  
  // Find's players with scores greater then 199.
  
  Template.champion.winners = function () {
   return Players.find({score: { $gt: 249}});
   };
  

  
  