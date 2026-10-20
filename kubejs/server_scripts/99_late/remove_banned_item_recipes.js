const BANNED_RECIPE_OUTPUTS = [
  "advancedperipherals:chat_box",
  "advancedperipherals:inventory_manager",
  "advancedperipherals:memory_card",
  "advancedperipherals:overpowered_end_automata_core",
  "advancedperipherals:overpowered_husbandry_automata_core",
  "advancedperipherals:overpowered_weak_automata_core",
  "cbcmoreshells:antiblast_panel",
  "create:creative_blaze_cake",
  "create:creative_crate",
  "create:creative_fluid_tank",
  "create:creative_motor",
  "create:handheld_worldshaper",
  "create_connected:creative_fluid_vessel",
  "create_radar:creative_radar_plate",
  "createaddition:electrum_amulet",
  "createbigcannons:creative_autocannon_ammo_container",
  "createendertransmission:chunk_loader",
  "createpropulsion:creative_thruster",
  "framedblocks:framed_reinforcement",
  "mekanism:advanced_energy_cube",
  "mekanism:creative_bin",
  "mekanism:creative_chemical_tank",
  "mekanism:creative_energy_cube",
  "mekanism:creative_fluid_tank",
  "mekanism:digital_miner",
  "mekanism:electric_bow",
  "mekanism:elite_energy_cube",
  "mekanism:elite_fluid_tank",
  "mekanism:hdpe_elytra",
  "mekanism:laser",
  "mekanism:laser_amplifier",
  "mekanism:meka_tool",
  "mekanism:mekasuit_bodyarmor",
  "mekanism:mekasuit_boots",
  "mekanism:mekasuit_helmet",
  "mekanism:mekasuit_pants",
  "mekanism:module_teleportation_unit",
  "mekanism:personal_barrel",
  "mekanism:personal_chest",
  "mekanism:portable_qio_dashboard",
  "mekanism:portable_teleporter",
  "mekanism:qio_dashboard",
  "mekanism:qio_drive_array",
  "mekanism:qio_drive_base",
  "mekanism:qio_drive_hyper_dense",
  "mekanism:qio_drive_supermassive",
  "mekanism:qio_drive_time_dilating",
  "mekanism:qio_exporter",
  "mekanism:qio_importer",
  "mekanism:qio_redstone_adapter",
  "mekanism:security_desk",
  "mekanism:teleportation_core",
  "mekanism:teleporter",
  "mekanism:teleporter_frame",
  "mekanism:ultimate_energy_cube",
  "mekanism:ultimate_fluid_tank",
  "minecraft:elytra",
  "minecraft:enchanting_table",
  "minecraft:end_crystal",
  "minecraft:potion",
  "minecraft:totem_of_undying",
  "petrolsparts:hydraulic_transmission",
  "petrolsparts:pneumatic_tube",
  "s_a_b:bundeswehrcross",
  "s_a_b:copmositearmor",
  "s_a_b:nickelalloysteel",
  "some_peripherals:ballistic_accelerator",
  "some_peripherals:digitizer",
  "some_peripherals:goggle_link_port",
  "some_peripherals:projector",
  "some_peripherals:range_goggles",
  "some_peripherals:raycaster",
  "some_peripherals:status_goggles",
  "some_peripherals:world_scanner",
  "srs:hub_controller",
  "srs:hub_linker",
  "srs:hub_slave",
  "srs:ship_anchor",
  "srs:ship_namer",
  "survival_instinct:exo_boots",
  "survival_instinct:exo_chestplate",
  "survival_instinct:exo_heavy_black_boots",
  "survival_instinct:exo_heavy_black_chestplate",
  "survival_instinct:exo_heavy_black_helmet",
  "survival_instinct:exo_heavy_black_leggings",
  "survival_instinct:exo_heavy_desert_boots",
  "survival_instinct:exo_heavy_desert_chestplate",
  "survival_instinct:exo_heavy_desert_helmet",
  "survival_instinct:exo_heavy_desert_leggings",
  "survival_instinct:exo_heavy_green_boots",
  "survival_instinct:exo_heavy_green_chestplate",
  "survival_instinct:exo_heavy_green_helmet",
  "survival_instinct:exo_heavy_green_leggings",
  "survival_instinct:exo_helmet",
  "survival_instinct:exo_leggings",
  "tfmg:creative_generator",
  "tfmg:steel_helmet",
  "tfmg:steel_chestplate",
  "tfmg:steel_leggings",
  "tfmg:steel_boots",
  "valkyrien_warium:blank_engine",
  "valkyrienskies:area_assembler",
  "valkyrienskies:connection_checker",
  "valkyrienskies:physics_entity_creator",
  "valkyrienskies:ship_assembler",
  "valkyrienskies:ship_creator",
  "valkyrienskies:ship_creator_smaller",
  "valkyrienskies:ship_remover",
  "valkyrienskies:test_antigrav",
  "valkyrienskies:test_chair",
  "valkyrienskies:test_flap",
  "valkyrienskies:test_hinge",
  "valkyrienskies:test_thruster",
  "valkyrienskies:test_wing",
  "vs_clockwork:asteroid_block",
  "vs_clockwork:creative_gas_generator",
  "vs_clockwork:creative_gravitron",
  "vs_clockwork:physics_infuser",
  "vs_clockwork:wanderwand",
  "vstuff:expendable_assembler",
  "vstuff:phys_grabber"
];

const BANNED_NBT_RECIPE_OUTPUTS = [
  {
    item: "tacz:modern_kinetic_gun",
    nbt: '{GunId:"tacz:rpg7"}',
    requiredText: "tacz:rpg7"
  },
  {
    item: "vs_clockwork:wanderwand",
    nbt: "{hasLoaded:1}",
    requiredText: "hasLoaded"
  }
];

const BANNED_RECIPE_OUTPUT_SET = {};
const BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM = {};

BANNED_RECIPE_OUTPUTS.forEach(function(output) {
  BANNED_RECIPE_OUTPUT_SET[output] = true;
});

BANNED_NBT_RECIPE_OUTPUTS.forEach(function(output) {
  if (!BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM[output.item]) {
    BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM[output.item] = [];
  }

  BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM[output.item].push(output);
});

let BrewingRecipeRegistry = null;

try {
  BrewingRecipeRegistry = Java.loadClass("net.minecraftforge.common.brewing.BrewingRecipeRegistry");
} catch (error) {
  console.warn("[KubeJS] Could not load Forge BrewingRecipeRegistry: " + error);
}

function removeBannedRecipeOutputs(event) {
  BANNED_RECIPE_OUTPUTS.forEach(function(output) {
    event.remove({ output: output });
  });

  BANNED_NBT_RECIPE_OUTPUTS.forEach(function(output) {
    event.remove({ output: Item.of(output.item, output.nbt) });
  });
}

function clearBrewingRecipes(source) {
  if (BrewingRecipeRegistry == null) {
    return;
  }

  try {
    if (BrewingRecipeRegistry.getRecipes().size() > 0) {
      console.info("[KubeJS] Removed " + BrewingRecipeRegistry.getRecipes().size() + " brewing recipes from Forge registry during " + source + ".");
      BrewingRecipeRegistry.getRecipes().clear();
    }
  } catch (error) {
    console.warn("[KubeJS] Could not clear brewing recipes during " + source + ": " + error);
  }
}

function isBrewingStyleRecipe(recipe) {
  const type = getRecipeType(recipe);

  return type.indexOf("brew") !== -1 || type.indexOf("brewing") !== -1 || type.indexOf("potion") !== -1;
}

function getRecipeType(recipe) {
  try {
    if (recipe.getType) {
      return String(recipe.getType()).toLowerCase();
    }
  } catch (ignored) {
  }

  try {
    if (recipe["kjs$getType"]) {
      return String(recipe["kjs$getType"]()).toLowerCase();
    }
  } catch (ignored) {
  }

  try {
    if (recipe.type) {
      return String(recipe.type).toLowerCase();
    }
  } catch (ignored) {
  }

  return "";
}

function recipeHasBannedOutputInJson(recipe) {
  try {
    if (jsonRecipeHasBannedOutput(recipe.json)) {
      return true;
    }
  } catch (ignored) {
  }

  try {
    if (jsonRecipeHasBannedOutput(recipe.originalJson)) {
      return true;
    }
  } catch (ignored) {
  }

  return false;
}

function jsonRecipeHasBannedOutput(rawJson) {
  if (rawJson == null) {
    return false;
  }

  try {
    return nodeHasBannedOutput(JSON.parse(String(rawJson)), false);
  } catch (ignored) {
    return false;
  }
}

function nodeHasBannedOutput(node, outputContext) {
  if (node == null) {
    return false;
  }

  if (typeof node === "string") {
    return outputContext && isBannedItemId(node);
  }

  if (typeof node !== "object") {
    return false;
  }

  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      if (nodeHasBannedOutput(node[i], outputContext)) {
        return true;
      }
    }

    return false;
  }

  if (outputContext && nodeDirectlyNamesBannedItem(node)) {
    return true;
  }

  for (let key in node) {
    if (!Object.prototype.hasOwnProperty.call(node, key)) {
      continue;
    }

    if (nodeHasBannedOutput(node[key], outputContext || isOutputKey(key))) {
      return true;
    }
  }

  return false;
}

function nodeDirectlyNamesBannedItem(node) {
  return isBannedItemId(node.item) ||
    isBannedItemId(node.id) ||
    isBannedItemId(node.itemStack) ||
    isBannedItemId(node.result) ||
    nodeDirectlyNamesBannedNbtItem(node);
}

function nodeDirectlyNamesBannedNbtItem(node) {
  const itemId = getNodeItemId(node);

  if (itemId == null || !BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM[itemId]) {
    return false;
  }

  const nodeText = JSON.stringify(node);
  const bannedNbtOutputs = BANNED_NBT_RECIPE_OUTPUTS_BY_ITEM[itemId];

  for (let i = 0; i < bannedNbtOutputs.length; i++) {
    if (nodeText.indexOf(bannedNbtOutputs[i].requiredText) !== -1 || nodeText.indexOf(bannedNbtOutputs[i].nbt) !== -1) {
      return true;
    }
  }

  return false;
}

function getNodeItemId(node) {
  if (isItemIdString(node.item)) {
    return normalizeItemId(node.item);
  }

  if (isItemIdString(node.id)) {
    return normalizeItemId(node.id);
  }

  if (isItemIdString(node.itemStack)) {
    return normalizeItemId(node.itemStack);
  }

  if (isItemIdString(node.result)) {
    return normalizeItemId(node.result);
  }

  return null;
}

function isOutputKey(key) {
  const lowerKey = String(key).toLowerCase();

  return lowerKey === "output" ||
    lowerKey === "outputs" ||
    lowerKey === "result" ||
    lowerKey === "results" ||
    lowerKey.indexOf("output") !== -1 ||
    lowerKey.indexOf("result") !== -1;
}

function isBannedItemId(value) {
  const id = normalizeItemId(value);

  if (id == null) {
    return false;
  }

  return BANNED_RECIPE_OUTPUT_SET[id] === true;
}

function normalizeItemId(value) {
  if (!isItemIdString(value)) {
    return null;
  }

  let id = value.trim();

  if (id.indexOf("<item:") === 0 && id.charAt(id.length - 1) === ">") {
    id = id.substring(6, id.length - 1);
  }

  const nbtStart = id.indexOf("{");

  if (nbtStart !== -1) {
    id = id.substring(0, nbtStart);
  }

  const extraDataStart = id.indexOf(",");

  if (extraDataStart !== -1) {
    id = id.substring(0, extraDataStart);
  }

  return id.trim();
}

function isItemIdString(value) {
  return typeof value === "string" && value.indexOf(":") !== -1;
}

ServerEvents.recipes(event => {
  clearBrewingRecipes("recipe reload");
  removeBannedRecipeOutputs(event);
});

ServerEvents.afterRecipes(event => {
  clearBrewingRecipes("after recipes");
  removeBannedRecipeOutputs(event);
});

ServerEvents.loaded(event => {
  clearBrewingRecipes("server loaded");
});
