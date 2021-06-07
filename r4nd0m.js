
//topic of all messages
const topic = "computer messages";


//holds components to create a new message
let Messages = {
    
    //components stores variables for templates.
    Components : {
        
        //partChosen variables
        Parts : [

            "CPU", "GPU", "CPU Cooler",
            "Motherboard", "Random Access Memory", "System Fans",
            "PSU", "SSD-1", "SSD-2",
        ],

        //eventChosen variables 
        Events : {

            Critical : [

                "above 90 degrees Fareignheight",
                "not connected properly",
                "recieving a high voltage",
            ],
            
            Concern : [

                "operating below expectation",
                "at 99% utilization",
                "not responding",

            ],
            
            Casual : [

                "at 30% utilization",
                "working efficiently",
                "operating normally",

            ], 

        },

        //action chosen variables
        Actions : {
            
            Critical : [

                "turn off the computer",
                "call for help",
                "buy a new machine",

            ],
            
            Concern : [

                "troubleshoot the issue",
                "check part connection",
                "revert to original settings",

            ],
            
            Casual : [

                "sit back and relax",
                "watch a movie",
                "code up a new project",

            ],

        },
    },

    templates : ["Critical", "Concern", "Casual"],

    //templates take in component's variables to create a message.
    makeTemplates (partPassed, eventPassed, actionPassed){
        
        let Template = {

            partChosen : partPassed,
            eventChosen : eventPassed,
            actionChosen : actionPassed,
            
            Critical : `${this.partChosen} is in critical condition! it is ${this.eventChosen}. You should ${this.actionChosen}!`,
            Concern : `The ${this.partChosen} is acting strange. It is ${this.eventChosen}. You should ${this.actionChosen}.`,
            Casual :  `${this.partChosen} is working properly. It is ${this.eventChosen}, You should ${this.actionChosen}.`,
        };
        
        return Template;
    },
};

const chooseRandTemplate = () => {

    //variable for templates array
    templateArray = Messages.templates;
    //random index and templateArray length
    templateArrLength = templateArray.length;
    templateIndex = Math.floor(Math.random() * templateArrLength);

    //assigning random template indicator
    templateChosen = templateArray[templateIndex];

    return templateChosen;
}

//FIXME : need to modify for new method.

const generateComponents = (templateChosen) => {

    //variable for Components object
    messageComponents = Messages.Components;

    //getting parts component
    partsLength = messageComponents.Parts.length;
    partIndex = Math.floor(Math.random() * partsLength);
    partChosen = messageComponents.Parts[partIndex];


    //getting event component
    events = messageComponents.Events[templateChosen];
    eventsLength = events.length;
    eventIndex = Math.floor(Math.random() * eventsLength);
    eventChosen = events[eventIndex];

    //getting action component
    actions = messageComponents.Actions[templateChosen];
    actionLength = actions.length;
    actionIndex = Math.floor(Math.random() * actionLength);
    actionChosen = actions[actionIndex];

    componentsChosen = [partChosen, eventChosen, actionChosen];

    return componentsChosen;
}

