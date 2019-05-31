const friends = require('../app/data/friends')

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log('POST successful');

        let friendMatch = {
            name: '',
            photo: '',
            scoreDifference: Infinity
        };

        let newFriend = req.body;
        let newScore = newFriend.scores;

        for (var i = 0; i < friends.length; i++) {
            let currentFriend = friends[i];
            totalDifference = 0;

            for (var j = 0; j < currentFriend.scores.length; j++) {
                let currentFriendScore = currentFriend.scores[j];
                let currentUserScore = newScore[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= friendMatch.scoreDifference) {
                friendMatch.name - currentFriend.name;
                friendMatch.photo = currentFriend.photo;
                friendMatch.friendDifference = totalDifference;
            }
        }
        friends.push(newFriend);

        res.json(friendMatch);


        console.log('newFriend name: ' + newFriend.name);
        console.log('friendMatch name: ' + friendMatch.name);
    });

};