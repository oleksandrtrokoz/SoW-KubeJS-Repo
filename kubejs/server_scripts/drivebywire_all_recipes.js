ServerEvents.recipes(event => {

  // ===== WIRE CUTTER =====
  event.shaped("drivebywire:wire_cutter", [
    " I ",
    "RWI",
    " R "
  ], {
    I: "#forge:ingots/iron",
    R: "#forge:rods/iron",
    W: "#minecraft:wool"
  });

  // ===== WIRE =====
  event.shapeless("drivebywire:wire", [
    "#forge:wires/iron",
    "#minecraft:wool"
  ]);

  // ===== CONTROLLER HUB =====
  event.shaped("drivebywire:controller_hub", [
    "RBR",
    "WCW",
    "RBR"
  ], {
    R: "create:redstone_link",
    W: "drivebywire:wire",
    C: "create:linked_controller",
    B: "create:brass_casing"
  });

  // ===== TWEAKED CONTROLLER HUB =====
  event.shaped("drivebywire:tweaked_controller_hub", [
    "RHR",
    "WTW",
    "RBR"
  ], {
    H: "drivebywire:controller_hub",
    T: "create_tweaked_controllers:tweaked_linked_controller",
    B: "create:brass_casing",
    R: "create:redstone_link",
    W: "drivebywire:wire"
  });

  // ===== BACKUP BLOCK =====
  event.shaped("drivebywire:backup_block", [
    "WIW",
    "WHW",
    "WIW"
  ], {
    W: "drivebywire:wire",
    I: "minecraft:iron_block",
    H: "drivebywire:controller_hub"
  });

});