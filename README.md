# FriendFinder

<img src="/images/FriendFinderTitle.png">


FriendFinder is a full stack compatibility app that uses several Node.js packages and Express to handle server requests and routing. The application accepts user responses to several personality questions and compares them to the responses received by previous users. Once the user completes the survey and receives their match, that users' responses are then added to the list of friends and used in future comparisons. 

One of the largest challenges was deciding how to calculate the compatibility rating between two sets of user responses. This was accomplished by giving all of the responses a value of 1-5 and then comparing the absolute value of the user response compare to every other response submitted previously. The final sum of these absolute values are compared against every response in the database. The lowest sum is then matched with the user. 


Dummy data was entered at first in order to test functionality prior to deployment, hence our adorable friend Jack Danger, Wonderpug.

<img src="/images/FriendFinderMatch.png" width = 420px; height = 300px; align = center> 
