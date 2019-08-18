import {Spacecraft, Containership} from './base-ship'
import {MillenniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 50, "="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon is good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)
