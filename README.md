-->AJAX: 
1) Auto-completion (using a search text box for searching users.)
2) Remote validation (in registration scenario, if the username in database, then inform the user)

-->Session Management done

-->CRUD Operations implemented:
1) User can upload a story, he /she can delete it. And view it on their feed. 
2) User can upload a picture with a caption, and can then view it on their profile and feed. User can delete his picture and can also edit the caption for it.
3) User can leave comments on his own picture and his followers' picture.
4) User can follow and unfollow people. If he follows them, they'll be added in his following lists and said person's follower list.
5) User can edit his profile: change password/ bio /picture. 
6) User can delete his profile.
7) User can also view his following's stories and pictures on feed.

Schema:

1) Users Schema: username, ID, Bio, ProfilePicture, Array of Followers/Following
2) Photo Schema: username, ID, PictureID(path), Caption
3) Story Schema: username, ID, PictureID(path)


Division: 

Nimra Ijaz : Session Management and AJAX

Mehar Fatima: Session Management, CRUD Operations, and front-end

Minahil Imtiaz: Front-end and follower/following CRUDs

Shaheer:Front-end and AJAX 

Zarfishan:Front-end and CRUDS
