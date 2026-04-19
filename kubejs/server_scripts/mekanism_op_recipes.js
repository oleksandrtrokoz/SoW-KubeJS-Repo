ServerEvents.recipes(event => {
  event.remove({ output: "mekanism:free_runners" });
  event.remove({ output: "mekanism:jetpack" });
  event.remove({ output: "mekanism:atomic_disassembler" });
  event.remove({ output: "mekanism:mekasuit_helmet" });
  event.remove({ output: "mekanism:mekasuit_bodyarmor" });
  event.remove({ output: "mekanism:mekasuit_pants" });
  event.remove({ output: "mekanism:mekasuit_boots" });

  event.custom({
    type: "mekanism:mek_data",
    key: {
      A: { tag: "mekanism:alloys/infused" },
      C: { tag: "forge:circuits/basic" },
      E: { item: "mekanism:energy_tablet" },
      N: { item: "minecraft:netherite_ingot" }
    },
    pattern: [
      "C C",
      "ANA",
      "E E"
    ],
    result: { item: "mekanism:free_runners" }
  }).id("kubejs:mekanism/free_runners_netherite");

  event.custom({
    type: "mekanism:mek_data",
    key: {
      C: { tag: "forge:circuits/basic" },
      I: { tag: "forge:ingots/tin" },
      N: { item: "minecraft:netherite_ingot" },
      S: { tag: "forge:ingots/steel" },
      T: { item: "mekanism:basic_chemical_tank" }
    },
    pattern: [
      "SCS",
      "ITI",
      " N "
    ],
    result: { item: "mekanism:jetpack" }
  }).id("kubejs:mekanism/jetpack_netherite");

  event.custom({
    type: "mekanism:mek_data",
    category: "equipment",
    key: {
      "#": { tag: "mekanism:alloys/atomic" },
      A: { tag: "mekanism:alloys/infused" },
      E: { item: "mekanism:energy_tablet" },
      N: { item: "minecraft:netherite_ingot" }
    },
    pattern: [
      "AEA",
      "A#A",
      " N "
    ],
    result: { item: "mekanism:atomic_disassembler" }
  }).id("kubejs:mekanism/atomic_disassembler_netherite");
});
