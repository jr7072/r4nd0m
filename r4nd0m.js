
//topic of all messages
const topic = "computer notifications";


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

            Critical : `${partPassed} is in critical condition! it is ${eventPassed}. You should ${actionPassed}!`,
            Concern : `The ${partPassed} is acting strange. It is ${eventPassed}. You should ${actionPassed}.`,
            Casual :  `${partPassed} is working properly. It is ${eventPassed}, You should ${actionPassed}.`,
        };
        
        return Template;
    },
};

const chooseRandTemplate = () => {

    //setting variables
    let templateArray;
    let templateArrLength;
    let templateIndex

    //variable for templates array
    templateArray = Messages.templates;
    //random index and templateArray length
    templateArrLength = templateArray.length;
    templateIndex = Math.floor(Math.random() * templateArrLength);

    //assigning random template indicator
    let templateChosen = templateArray[templateIndex];

    return templateChosen;
}

//FIXME : need to modify for new method.

const generateComponents = (templateChosen) => {

    //setting variables
    let messageComponents;

    //variable for Components object
    messageComponents = Messages.Components;

    //setting variables
    let partsLength;
    let partIndex;
    let part;
    
    //getting parts component
    partsLength = messageComponents.Parts.length;
    partIndex = Math.floor(Math.random() * partsLength);
    part = messageComponents.Parts[partIndex];

    //setting variables
    let events;
    let eventsLength;
    let eventIndex;
    let event;
    
    //getting event component
    events = messageComponents.Events[templateChosen];
    eventsLength = events.length;
    eventIndex = Math.floor(Math.random() * eventsLength);
    event = events[eventIndex];

    //setting variables\
    let actions;
    let actionLength;
    let actionIndex;
    let action;

    //getting action component
    actions = messageComponents.Actions[templateChosen];
    actionLength = actions.length;
    actionIndex = Math.floor(Math.random() * actionLength);
    action = actions[actionIndex];

    let componentsChosen = [part, event, action];

    return componentsChosen;
}

const generateMessage = (templateChosen, componentsArr) => {

    //setting variables
    let partChosen;
    let eventChosen;
    let actionChosen;
    const componentsLength = componentsArr.length;
    
    for (let i = 0 ; i < componentsLength; ++i){
        
        switch (i){
            
            case 0:
                
                partChosen = componentsArr[i];
                break;
            
            case 1:

                eventChosen = componentsArr[i];
                break;

            case 2:
                
                actionChosen = componentsArr[i];
                break;
        }
    }

    //passing variables to templates
    const templates = Messages.makeTemplates(partChosen, eventChosen, actionChosen);

    //setting message
    const message = templates[templateChosen];

    return message;
}

let finalTemplate = chooseRandTemplate();
let finalComponents = generateComponents(testTemplate);
let finalMessage = generateMessage(testTemplate, testComArr);

console.log(finalMessage);