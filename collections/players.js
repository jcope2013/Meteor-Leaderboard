Players = new Meteor.Collection("players");

// Allow Rules for collection (No need for Insecure Package)

Players.allow({
    update: function(userId, doc, fieldNames, modifier){
        return true;
    }
});