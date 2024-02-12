import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "evgen",
                def: [
                    {file: "evgenDefoult1"},
                    {file: "evgenDefoult2"},
                    {file: "evgenDefoult3"},
                    {file: "evgenDefoult4"},
                    {file: "evgenDefoult5"},
                    {file: "evgenDefoult6"},
                    {file: "evgenDefoult7"},
                    {file: "evgenDefoult8"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "maxconeHandle1", file: "davidConeA1", check: false},
                    {id: v1(), groupElements: 0, name: "maxconeHandle2", file: "davidConeA2", check: true},
                    {id: v1(), groupElements: 0, name: "maxconeHandle3", file: "davidConeA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf1", file: "davidConeB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxconeMdf2", file: "davidConeB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf3", file: "davidConeB3", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock1", file: "davidConeC1", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock2", file: "davidConeC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock3", file: "davidConeC3", check: true}
                ]
            },
        ]
    },
    {
        id: v1(),
        name: "max",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "maxCube",
                def: "davidCubeDef",
                components: [
                    {id: v1(), groupElements: 0, name: "maxsphereHandle1", file: "davidSphereA1", check: true},
                    {id: v1(), groupElements: 0, name: "maxsphereHandle2", file: "davidSphereA2", check: false},
                    {id: v1(), groupElements: 0, name: "maxsphereHandle3", file: "davidSphereA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf1", file: "davidSphereB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf2", file: "davidSphereB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf3", file: "davidSphereB3", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock1", file: "davidSphereC1", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock2", file: "davidSphereC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock3", file: "davidSphereC3", check: true}
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "maxsphere",
                def: "davidSphereDef",
                components: [
                    {id: v1(), groupElements: 0, name: "maxsphereHandle1", file: "davidSphereA1", check: true},
                    {id: v1(), groupElements: 0, name: "maxsphereHandle2", file: "davidSphereA2", check: false},
                    {id: v1(), groupElements: 0, name: "maxsphereHandle3", file: "davidSphereA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf1", file: "davidSphereB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf2", file: "davidSphereB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxsphereMdf3", file: "davidSphereB3", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock1", file: "davidSphereC1", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock2", file: "davidSphereC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxsphereLock3", file: "davidSphereC3", check: true}
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "maxcone",
                def: "davidConeDef",
                components: [
                    {id: v1(), groupElements: 0, name: "maxconeHandle1", file: "davidConeA1", check: false},
                    {id: v1(), groupElements: 0, name: "maxconeHandle2", file: "davidConeA2", check: true},
                    {id: v1(), groupElements: 0, name: "maxconeHandle3", file: "davidConeA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf1", file: "davidConeB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxconeMdf2", file: "davidConeB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf3", file: "davidConeB3", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock1", file: "davidConeC1", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock2", file: "davidConeC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock3", file: "davidConeC3", check: true}
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "BW",
                def: "evgenWhile",
                components: [
                    {id: v1(), groupElements: 0, name: "maxconeHandle1", file: "davidConeA1", check: false},
                    {id: v1(), groupElements: 0, name: "maxconeHandle2", file: "davidConeA2", check: true},
                    {id: v1(), groupElements: 0, name: "maxconeHandle3", file: "davidConeA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf1", file: "davidConeB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxconeMdf2", file: "davidConeB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxconeMdf3", file: "davidConeB3", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock1", file: "davidConeC1", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock2", file: "davidConeC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxconeLock3", file: "davidConeC3", check: true}
                ]
            }
        ]
    }
]