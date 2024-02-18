import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "VidDefoult",
                def: [
                    {file: "evgenParquet"},
                    {file: "evgenDefoult0"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "evgenKravat", file: "evgenKravat", check: false},
                    {id: v1(), groupElements: 0, name: "evgenMatras", file: "evgenMatras", check: true},
                    {id: v1(), groupElements: 1, name: "evgenOdeyalo", file: "evgenOdeyalo", check: true},
                    {id: v1(), groupElements: 1, name: "evgenOdeyalo2", file: "evgenOdeyalo2", check: false},
                    {id: v1(), groupElements: 2, name: "evgenPodushka1", file: "evgenPodushka1", check: true},
                    {id: v1(), groupElements: 2, name: "evgenPodushka2", file: "evgenPodushka2", check: false},
                    {id: v1(), groupElements: 2, name: "evgenPodushka3", file: "evgenPodushka3", check: false},
                    {id: v1(), groupElements: 3, name: "evgenPotolok", file: "evgenPotolok", check: false},
                    {id: v1(), groupElements: 3, name: "evgenWallOne", file: "evgenWallOne", check: false},
                    {id: v1(), groupElements: 3, name: "evgenWallTwo", file: "evgenWallTwo", check: false},
                    {id: v1(), groupElements: 3, name: "evgenWallThree", file: "evgenWallThree", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "VidOne",
                def: [
                    {file: "davidVidoneDefoultWall"},
                    {file: "evgenVidoneDefolultParquett"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "VidOneVarOne", file: "VidOneVarOne", check: true},
                    {id: v1(), groupElements: 0, name: "VidOneVarTwo", file: "VidOneVarTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "VidTwo",
                def: [
                    {file: "evgenParquet"},
                    {file: "evgenDefoult0"},
                ],
                components: [
                ]
            },
        ]
    },
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "lockerVarOne",
                def: [
                    {file: "lockerDefoult1"},
                    {file: "lockerDefoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "lockerViewOne", file: "lockerViewOne", check: false},
                    {id: v1(), groupElements: 0, name: "lockerViewTwo", file: "lockerViewTwo", check: true},
                    {id: v1(), groupElements: 0, name: "lockerViewThree", file: "lockerViewThree", check: false},
                    // {id: v1(), groupElements: 1, name: "evgenOdeyalo", file: "evgenOdeyalo", check: true},
                    // {id: v1(), groupElements: 1, name: "evgenOdeyalo2", file: "evgenOdeyalo2", check: false},
                    // {id: v1(), groupElements: 2, name: "evgenPodushka1", file: "evgenPodushka1", check: true},
                    // {id: v1(), groupElements: 2, name: "evgenPodushka2", file: "evgenPodushka2", check: false},
                    // {id: v1(), groupElements: 2, name: "evgenPodushka3", file: "evgenPodushka3", check: false},
                    // {id: v1(), groupElements: 3, name: "evgenPotolok", file: "evgenPotolok", check: false},
                    // {id: v1(), groupElements: 3, name: "evgenWallOne", file: "evgenWallOne", check: false},
                    // {id: v1(), groupElements: 3, name: "evgenWallTwo", file: "evgenWallTwo", check: false},
                    // {id: v1(), groupElements: 3, name: "evgenWallThree", file: "evgenWallThree", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "VidOne",
                def: [
                    {file: "davidVidoneDefoultWall"},
                    {file: "evgenVidoneDefolultParquett"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "VidOneVarOne", file: "VidOneVarOne", check: true},
                    {id: v1(), groupElements: 0, name: "VidOneVarTwo", file: "VidOneVarTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "VidTwo",
                def: [
                    {file: "evgenParquet"},
                    {file: "evgenDefoult0"},
                ],
                components: [
                ]
            },
        ]
    }
]