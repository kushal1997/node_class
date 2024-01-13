import * as Event from 'events'

export class UserEvents extends Event.EventEmitter{
    //event
    createPost(content){
        console.log('Post is created');
        this.emit('postCreacted')
    }
}