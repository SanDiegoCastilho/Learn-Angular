import {Spacecraft, Containership} from './base-ship'

export class MillenniumFalcon extends Spacecraft implements Containership{

  cargoContainers: number

  constructor(){
    super('hyperdrive')
    this.cargoContainers = 4
  }

  jumpIntoyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoyperspace()
    }else{
      console.log('Failed to jump into hyperspace')
    }
  }
}
