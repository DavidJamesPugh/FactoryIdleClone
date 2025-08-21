// Resources configuration extracted from app.js
// This contains all game resources, their properties, and visual representations

const resources = [
  { 
    id: "ironOre", 
    idNum: 1, 
    name: "Iron ore", 
    nameShort: "Iron ore", 
    spriteX: 0, 
    spriteY: 0 
  },
  { 
    id: "iron", 
    idNum: 2, 
    name: "Iron", 
    nameShort: "Iron", 
    spriteX: 1, 
    spriteY: 0 
  },
  { 
    id: "coal", 
    idNum: 3, 
    name: "Coal", 
    nameShort: "Coal", 
    spriteX: 2, 
    spriteY: 0 
  },
  { 
    id: "steel", 
    idNum: 4, 
    name: "Steel", 
    nameShort: "Steel", 
    spriteX: 3, 
    spriteY: 0 
  },
  { 
    id: "oil", 
    idNum: 5, 
    name: "Oil", 
    nameShort: "Oil", 
    spriteX: 4, 
    spriteY: 0 
  },
  { 
    id: "plastic", 
    idNum: 6, 
    name: "Plastic", 
    nameShort: "Plastic", 
    spriteX: 5, 
    spriteY: 0 
  },
  { 
    id: "silicon", 
    idNum: 7, 
    name: "Silicon", 
    nameShort: "Silicon", 
    spriteX: 6, 
    spriteY: 0 
  },
  { 
    id: "electronics", 
    idNum: 8, 
    name: "Electronics", 
    nameShort: "Electronics", 
    spriteX: 7, 
    spriteY: 0 
  },
  { 
    id: "aluminium", 
    idNum: 9, 
    name: "Aluminium", 
    nameShort: "Alu", 
    spriteX: 0, 
    spriteY: 1 
  },
  { 
    id: "engine", 
    idNum: 10, 
    name: "Engine", 
    nameShort: "Engine", 
    spriteX: 1, 
    spriteY: 1 
  },
  { 
    id: "explosives", 
    idNum: 11, 
    name: "Explosives", 
    nameShort: "Explosives", 
    spriteX: 2, 
    spriteY: 1 
  },
  { 
    id: "bullets", 
    idNum: 12, 
    name: "Bullets", 
    nameShort: "Bullets", 
    spriteX: 3, 
    spriteY: 1 
  },
  { 
    id: "guns", 
    idNum: 13, 
    name: "Guns", 
    nameShort: "Guns", 
    spriteX: 4, 
    spriteY: 1 
  },
  { 
    id: "tankHull", 
    idNum: 14, 
    name: "Tank hull", 
    nameShort: "Tank hull", 
    spriteX: 5, 
    spriteY: 1 
  },
  { 
    id: "tankTurret", 
    idNum: 15, 
    name: "Tank turret", 
    nameShort: "Tank turret", 
    spriteX: 6, 
    spriteY: 1 
  },
  { 
    id: "tank", 
    idNum: 16, 
    name: "Tank", 
    nameShort: "Tank", 
    spriteX: 7, 
    spriteY: 1 
  },
  { 
    id: "rocketHull", 
    idNum: 17, 
    name: "Rocket hull", 
    nameShort: "Rocket hull", 
    spriteX: 1, 
    spriteY: 2 
  },
  { 
    id: "warhead", 
    idNum: 18, 
    name: "Warhead", 
    nameShort: "Warhead", 
    spriteX: 2, 
    spriteY: 2 
  },
  { 
    id: "rocket", 
    idNum: 19, 
    name: "Rocket", 
    nameShort: "Rocket", 
    spriteX: 3, 
    spriteY: 2 
  },
  { 
    id: "waste", 
    idNum: 20, 
    name: "Waste", 
    nameShort: "Waste", 
    spriteX: 4, 
    spriteY: 2 
  },
  { 
    id: "gas", 
    idNum: 21, 
    name: "Gas", 
    nameShort: "Gas", 
    spriteX: 6, 
    spriteY: 2 
  },
  { 
    id: "jetFuel", 
    idNum: 22, 
    name: "Jet fuel", 
    nameShort: "Jet fuel", 
    spriteX: 7, 
    spriteY: 2 
  },
  { 
    id: "diesel", 
    idNum: 23, 
    name: "Diesel", 
    nameShort: "Diesel", 
    spriteX: 5, 
    spriteY: 2 
  },
  { 
    id: "drone", 
    idNum: 27, 
    name: "Drone", 
    nameShort: "Drone", 
    spriteX: 4, 
    spriteY: 3 
  },
  { 
    id: "droneControlRoom", 
    idNum: 28, 
    name: "Drone control rooms", 
    nameShort: "Drone CR", 
    spriteX: 5, 
    spriteY: 3 
  },
  { 
    id: "report1", 
    idNum: 24, 
    name: "Metal report", 
    nameShort: "Metal report", 
    spriteX: 0, 
    spriteY: 3 
  },
  { 
    id: "report2", 
    idNum: 25, 
    name: "Gas&oil report", 
    nameShort: "Gas&oil report", 
    spriteX: 1, 
    spriteY: 3 
  },
  { 
    id: "report3", 
    idNum: 26, 
    name: "Big report", 
    nameShort: "Big report", 
    spriteX: 2, 
    spriteY: 3 
  },
  { 
    id: "report4", 
    idNum: 29, 
    name: "Quality report", 
    nameShort: "Quality report", 
    spriteX: 3, 
    spriteY: 3 
  },
];

// Helper functions to get resource information
export function getResourceById(resourceId) {
  return resources.find(resource => resource.id === resourceId);
}

export function getResourceByIdNum(idNum) {
  return resources.find(resource => resource.idNum === idNum);
}

export function getAllResources() {
  return resources;
}

export function getResourcesByCategory(category) {
  // Group resources by logical categories
  const categories = {
    raw: ["ironOre", "coal", "oil", "gas", "silicon", "aluminium"],
    processed: ["iron", "steel", "plastic", "electronics"],
    military: ["explosives", "bullets", "guns", "tankHull", "tankTurret", "tank", "rocketHull", "warhead", "rocket"],
    fuel: ["diesel", "jetFuel"],
    advanced: ["engine", "drone", "droneControlRoom"],
    research: ["report1", "report2", "report3", "report4"],
    waste: ["waste"]
  };
  
  return categories[category] ? 
    resources.filter(resource => categories[category].includes(resource.id)) : 
    [];
}

export function getResourceSprite(resourceId) {
  const resource = getResourceById(resourceId);
  return resource ? { x: resource.spriteX, y: resource.spriteY } : null;
}

export function getResourceName(resourceId, useShort = false) {
  const resource = getResourceById(resourceId);
  return resource ? (useShort ? resource.nameShort : resource.name) : null;
}

export default resources;
