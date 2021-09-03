module LuciansLusciousLasagna

let expectedMinutesInOven = 40

let remainingMinutesInOven elapsed = expectedMinutesInOven - elapsed

let preparationTimeInMinutes layers = 2 * layers

let elapsedTimeInMinutes layers cookingTime = cookingTime + preparationTimeInMinutes layers