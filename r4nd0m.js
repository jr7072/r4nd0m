
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
        Event : {

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
        Action : {
            
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

    //templates take in component's variables to create a message.
    Templates : {

        Critical : `${partChosen} is in critical condition! it is ${eventChosen}. You should ${actionChosen}!`,
        Concern : `The ${partChosen} is acting strange. It is ${eventChosen}. You should ${actionChosen}.`,
        Casual :  `${partChosen} is working properly. It is ${eventChosen}, You should ${actionChosen}.`,
    },

};
