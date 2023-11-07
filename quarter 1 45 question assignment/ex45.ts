interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    optionalFeature?: string;
  }
  
  function createCar(manufacturer: string, model: string, ...options: Car[]): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    options.forEach(option => {
      if (option.color) {
        car.color = option.color;
      }
  
      if (option.optionalFeature) {
        car.optionalFeature = option.optionalFeature;
      }
    });
  
    return car;
  }
  
  // Create a car object with manufacturer, model, color, and optional feature
  const myCar = createCar("Toyota", "Camry", );
  
  // Print the car object
  console.log(myCar);