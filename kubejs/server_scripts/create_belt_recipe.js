ServerEvents.recipes(event => {
  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:dried_kelp" },
      { item: "minecraft:dried_kelp" },
      { item: "minecraft:dried_kelp" },
      { item: "minecraft:dried_kelp" },
      { item: "minecraft:dried_kelp" },
      { item: "minecraft:dried_kelp" }
    ],
    results: [
      { item: "create:belt_connector", count: 1 }
    ]
  }).id("kubejs:create/belt_compacting");
});
