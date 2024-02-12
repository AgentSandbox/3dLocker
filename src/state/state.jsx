import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "cube",
                def: "davidCubeDef",
                components: [
                    [
                        {id: v1(), name: "cubeHandle1", file: "davidCubeA1", check: false},
                        {id: v1(), name: "cubeHandle2", file: "davidCubeA2", check: false},
                        {id: v1(), name: "cubeHandle3", file: "davidCubeA3", check: false}
                    ],
                    [
                        {id: v1(), name: "cubeMdf1", file: "davidCubeB1", check: false},
                        {id: v1(), name: "cubeMdf2", file: "davidCubeB2", check: true},
                        {id: v1(), name: "cubeMdf3", file: "davidCubeB3", check: false}
                    ],
                    [
                        {id: v1(), name: "cubeLock1", file: "davidCubeC1", check: false},
                        {id: v1(), name: "cubeLock2", file: "davidCubeC2", check: false},
                        {id: v1(), name: "cubeLock3", file: "davidCubeC3", check: true}
                    ]
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "sphere",
                def: "davidSphereDef",
                components: [
                    [
                        {id: v1(), name: "sphereHandle1", file: "davidSphereA1", check: false},
                        {id: v1(), name: "sphereHandle2", file: "davidSphereA2", check: true},
                        {id: v1(), name: "sphereHandle3", file: "davidSphereA3", check: false}
                    ],
                    [
                        {id: v1(), name: "sphereMdf1", file: "davidSphereB1", check: true},
                        {id: v1(), name: "sphereMdf2", file: "davidSphereB2", check: false},
                        {id: v1(), name: "sphereMdf3", file: "davidSphereB3", check: false}
                    ],
                    [
                        {id: v1(), name: "sphereLock1", file: "davidSphereC1", check: false},
                        {id: v1(), name: "sphereLock2", file: "davidSphereC2", check: false},
                        {id: v1(), name: "sphereLock3", file: "davidSphereC3", check: true}
                    ]
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "cone",
                def: "davidConeDef",
                components: [
                    [
                        {id: v1(), name: "coneHandle1", file: "davidConeA1", check: false},
                        {id: v1(), name: "coneHandle2", file: "davidConeA2", check: true},
                        {id: v1(), name: "coneHandle3", file: "davidConeA3", check: false}
                    ],
                    [
                        {id: v1(), name: "coneMdf1", file: "davidConeB1", check: true},
                        {id: v1(), name: "coneMdf2", file: "davidConeB2", check: false},
                        {id: v1(), name: "coneMdf3", file: "davidConeB3", check: false}
                    ],
                    [
                        {id: v1(), name: "coneLock1", file: "davidConeC1", check: false},
                        {id: v1(), name: "coneLock2", file: "davidConeC2", check: false},
                        {id: v1(), name: "coneLock3", file: "davidConeC3", check: true}
                    ]
                ]
            }
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
                    {id: v1(), groupElements: 2, name: "maxcubeLock1", file: "davidCubeC1", check: true},
                    {id: v1(), groupElements: 2, name: "maxcubeLock2", file: "davidCubeC2", check: false},
                    {id: v1(), groupElements: 2, name: "maxcubeLock3", file: "davidCubeC3", check: false},
                    {id: v1(), groupElements: 0, name: "maxCubeHandle1", file: "davidCubeA1", check: true},
                    {id: v1(), groupElements: 0, name: "maxCubeHandle2", file: "davidCubeA2", check: false},
                    {id: v1(), groupElements: 0, name: "maxCubeHandle3", file: "davidCubeA3", check: false},
                    {id: v1(), groupElements: 1, name: "maxcubeMdf1", file: "davidCubeB1", check: true},
                    {id: v1(), groupElements: 1, name: "maxcubeMdf2", file: "davidCubeB2", check: false},
                    {id: v1(), groupElements: 1, name: "maxcubeMdf3", file: "davidCubeB3", check: false},

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