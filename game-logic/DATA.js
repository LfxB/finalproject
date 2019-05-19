let defaultTile = {
  id: "ID_NOT_GIVEN",
  pos: { x: -999, y: -999 },
  type: "default"
};
let defaultArmyA = [
  {
    charType: "pawn",
    actions: ["move"],
    static: false,
    pos: { x: 7, y: 0 },
    actorType: "char",
    health: 100,
    moveSpeed: 1
  },
  {
    charType: "pawn",
    actions: ["move"],
    static: false,
    pos: { x: 7, y: 7 },
    actorType: "char",
    moveSpeed: 1
  }
];
let defaultArmyB = [
  {
    charType: "pawn",
    actions: ["move"],
    static: false,
    pos: { x: 0, y: 1 },
    actorType: "char",
    moveSpeed: 1
  },
  {
    charType: "knight",
    actions: ["move"],
    static: false,
    pos: { x: 1, y: 1 },
    actorType: "char",
    moveSpeed: 1
  },
  {
    charType: "archer",
    actions: ["move"],
    static: false,
    pos: { x: 1, y: 1 },
    actorType: "char",
    moveSpeed: 1
  },
  {
    charType: "legionary",
    actions: ["move"],
    static: false,
    pos: { x: 1, y: 1 },
    actorType: "char",
    moveSpeed: 1
  },
  {
    charType: "catapult",
    actions: ["move"],
    static: false,
    pos: { x: 2, y: 1 },
    actorType: "char",
    moveSpeed: 1
  }
];
let unitTypes = {
  pawn: {
    charType: "pawn",
    actions: ["move"],
    static: false,
    pos: { x: -1, y: -1 },
    actorType: "char",
    moveSpeed: 1,
    points: 100
  },
  archer: {
    charType: "archer",
    actions: ["move-passive", "ranged-shot"],
    static: false,
    pos: { x: -1, y: -1 },
    actorType: "char",
    moveSpeed: 1,
    points: 100,
    range: 3
  },
  legionary: {
    charType: "legionary",
    actions: ["move"],
    static: false,
    pos: { x: -1, y: -1 },
    actorType: "char",
    moveSpeed: 1,
    points: 100
  },
  knight: {
    charType: "knight",
    actions: ["move", "charge"],
    static: false,
    pos: { x: -1, y: -1 },
    actorType: "char",
    moveSpeed: 1,
    points: 100,
    range: 3
  },
  catapult: {
    charType: "catapult",
    actions: ["move-passive", "bombard"],
    static: false,
    pos: { x: -1, y: -1 },
    actorType: "char",
    moveSpeed: 1,
    points: 100,
    range: 3
  }
};
let defaultArmy = [
  [
    "knight",
    "knight",
    "archer",
    "catapult",
    "catapult",
    "archer",
    "knight",
    "knight"
  ],
  [
    "legionary",
    "pawn",
    "legionary",
    "pawn",
    "pawn",
    "legionary",
    "pawn",
    "legionary"
  ],
  ["", "", "", "", "", "", "", ""]
];
let charTypes = ["pawn", "knight", "archer", "catapult", "legionary"];
let moveinput = { type: "move", actorId: "", dest: { x: 0, y: 0 } };
module.exports = {
  moveinput,
  defaultArmyA,
  defaultArmyB,
  unitTypes,
  defaultArmy,
  charTypes
};
