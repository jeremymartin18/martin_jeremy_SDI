
 /*Jeremy Martin
SDI Section 2
Tire Pressure
09-15-2015

  To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec.


  Given:
  Pressure for each tire of the car (in psi) in an array.

  Result To Print Out:
  “The tires pass spec!” Or  “ Get your tires checked out!”
 */

 var tirePressure = [35, 33, 40, 40];

 if(tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
     console.log("The tires pass spec!");
 }else{
     console.log("Get your tires checked out!");
 }