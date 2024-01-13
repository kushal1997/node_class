import { UserEvents } from "./userEvents.mjs";

const userEvent=new UserEvents();


function saveToDatabase(){
    console.log("Data saved to database");
}

function sendNotification(){
    console.log("Notificaiton sent")
}

function updateTimeline(){
    console.log("Updated timeline with new posts");
}

userEvent.addListener('postCreacted',saveToDatabase);
userEvent.addListener('postCreacted',sendNotification);
userEvent.addListener('postCreacted',updateTimeline);


userEvent.createPost('This is my first post');

