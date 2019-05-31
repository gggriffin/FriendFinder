const friends = require('../app/data/friends')

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log('POST successful');

        var friendMatch = {
            name: '',
            photo: '',
            scoreDifference: Infinity
        };

        var newFriend = req.body;
        var newScore = newFriend.scores;

        console.log(newScore);

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            var totalDifference = 0;

            console.log(currentFriend.name);
            console.log(currentFriend.scores);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = newScore[j];
                console.log('currentUserScore:' + currentUserScore);

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                console.log('totalDifference: ' + totalDifference);
            }
            if (totalDifference <= friendMatch.scoreDifference) {
                friendMatch.name = currentFriend.name;
                friendMatch.photo = currentFriend.photo;
                friendMatch.scoreDifference = totalDifference;
            }
        }
        friends.push(newFriend);

        res.json(friendMatch);


        console.log('newFriend name: ' + newFriend.name);
        console.log('friendMatch name: ' + friendMatch.name);
    });

};