class Spacecraft{
  constructor(public propulsor: string){}

  jumpIntoyperspace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface Containership{
  cargoContainers: number
}

export {Spacecraft, Containership}
