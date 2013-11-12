Messages = new Meteor.Collection('messages');
if (Meteor.isClient) {
    Template.messages.messages = function(){
        return Messages.find({}, { sort: { time: -1 }});
    }

    Template.entryfield.events = {
        "keydown #message": function(event){
            if(event.which == 13){
                // Submit the form
                var name = document.getElementById('name');
                var message = document.getElementById('message');

                if(name.value != '' && message.value != ''){
                    Messages.insert({
                        name: name.value,
                        message: message.value,
                        time: Date.now()
                    });

                    name.value = '';
                    message.value = '';

                }
            }
        }
    }
}
