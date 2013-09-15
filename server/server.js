 // Create Test Data
 if (Players.find().count() === 0) {
  janeId = Meteor.users.insert({
     profile: { name: 'Jane Doe' }
  });
  jane = Meteor.users.findOne(janeId);
  
  Players.insert({
    name: jane.profile.name,
    score: Math.floor(Random.fraction()*10)*5
  });
}


// newUser Method

Meteor.methods({
      newUser: function() {
       var user = Meteor.user();
    
         userVar = {
         name: user.profile.name, 
         score: Math.floor(Random.fraction()*10)*5
         };
        
       Players.insert(userVar);
         }
       }); 


// Publication (No need for Autopublish Package)

Meteor.publish('newUsers', function() {
  return Players.find({}, {sort: {score: -1, name: 1}});
});