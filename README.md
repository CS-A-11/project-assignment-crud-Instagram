## PROJECT TITLE:
INSTAGRAM

## PROJETCT GROUP MEMBERS
1 Mehar Fatima
2 Nimra Ijaz
3 Minahil Imtiaz
4 Zarfishan Wajid
5 Shaheer Ahmad

## ABOUT PROJECT
A photo-sharing social networking service 
* Post photos you want to keep on your profile grid. 
* Browse photos from people you follow in your feed. 
* Share photos to your story. 
* Interact with posts you care about with comments.


## USE CASES

### AJAX: 
1) Auto-completion (using a search text box for searching users.)
2) Remote validation (in registration scenario, if the username in database, then inform the user)
3) Dynamic content injection (on pressing button 'showBio' the bio loads on the same page without refreshing)

### Session Management done



### CRUD Operations implemented:
1) User can upload a story, he /she can delete it. And view it on their feed. 
2) User can upload a picture with a caption, and can then view it on their profile and feed. User can delete his picture and can also edit the caption for it.
3) User can leave comments on his own picture and other peoples' pictures.
4) User can follow and unfollow people. If he follows a person, the person will be added in the User's following list and and User will be in followed person's follower list.
5) User can edit his profile: change password/ bio /picture. 
6) User can delete his information (name,username,following,follower,bio,picture).
7) User can also view his following's stories and pictures on feed.
8) View all users.

### Schema:

Collections:
1) Users Schema: username, ID, Bio, ProfilePicture, Array of Followers/Following
2) Story Schema: username, ID, PictureID(path)

Nested Schema:
1) Photo Schema: username, ID, PictureID(path), Caption

### Contributions: 

#### Nimra Ijaz
1 Session Management
2 CRUD Operations
3 AJAX

#### Mehar Fatima
1 Session Management
2 CRUD Operations
3 front-end

#### Minahil Imtiaz
1 Front-end
2 follower/following CRUDs

#### Shaheer Ahmad:
1 Front-end
2 AJAX 

#### Zarfishan Wajid
1 Front-end
2 CRUDS
