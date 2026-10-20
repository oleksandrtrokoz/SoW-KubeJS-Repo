ServerEvents.recipes(event => {
  const transitional = "crusty_chunks:bent_component";
  const bombTransitional = "crusty_chunks:small_bomb";
  const clusterBombTransitional = "crusty_chunks:cluster_of_bombs";
  const mediumBombTransitional = "crusty_chunks:redstone_tnt";
  const ordinanceNoseTransitional = "crusty_chunks:ordinance_heavy_warhead";
  const ordinanceCoreTransitional = "crusty_chunks:ordinance_core";
  const steelPlateTransitional = "crusty_chunks:steelplate";
  const precisionMechanismTransitional = "create:precision_mechanism";
  const sulfurDust = "#forge:dusts/sulfur";
  const copperDust = "#forge:dusts/copper";
  const zincIngot = "#forge:ingots/zinc";
  const zincDust = "#forge:dusts/zinc";
  const ironDust = "#forge:dusts/iron";
  const ironPressurePlate = "minecraft:heavy_weighted_pressure_plate";
  const disabledWariumOutputs = [
    "crusty_chunks:advanced_alloy_block",
    "crusty_chunks:advanced_alloy_ingot",
    "crusty_chunks:advanced_alloy_mixture",
    "crusty_chunks:advanced_automatic_rifle_receiver",
    "crusty_chunks:advanced_component",
    "crusty_chunks:advanced_pistol_receiver",
    "crusty_chunks:after_burner",
    "crusty_chunks:aimer",
    "crusty_chunks:aimer_node",
    "crusty_chunks:aluminum_ac_barrel",
    "crusty_chunks:aluminum_ac_barrel_dark_gray",
    "crusty_chunks:aluminum_block",
    "crusty_chunks:aluminum_dust",
    "crusty_chunks:aluminum_ingot",
    "crusty_chunks:aluminum_plating",
    "crusty_chunks:aluminum_plating_dark_gray",
    "crusty_chunks:aluminum_plating_slab",
    "crusty_chunks:aluminum_plating_slab_dark_gray",
    "crusty_chunks:aluminum_plating_stairs",
    "crusty_chunks:aluminum_plating_stairs_dark_gray",
    "crusty_chunks:aluminum_plating_trapdoor",
    "crusty_chunks:aluminum_plating_trapdoor_dark_gray",
    "crusty_chunks:aluminum_side_panel",
    "crusty_chunks:aluminum_side_panel_dark_gray",
    "crusty_chunks:aluminum_tiny_dust",
    "crusty_chunks:ap_large_bullet",
    "crusty_chunks:ap_shell",
    "crusty_chunks:apfsds_projectile",
    "crusty_chunks:armor_peeler_animated",
    "crusty_chunks:armor_peeler_rocket",
    "crusty_chunks:armor_peeler_unloaded",
    "crusty_chunks:artillery_autoloader",
    "crusty_chunks:artillery_barrel",
    "crusty_chunks:artillery_charge_loader",
    "crusty_chunks:artillery_shell",
    "crusty_chunks:artillery_solid_shell",
    "crusty_chunks:artillerybreech",
    "crusty_chunks:asphalt_slab",
    "crusty_chunks:assembly_centrifuge_bottom",
    "crusty_chunks:assembly_centrifuge_middle",
    "crusty_chunks:assembly_centrifuge_top",
    "crusty_chunks:assembly_circuit_fabricator",
    "crusty_chunks:assembly_crusher",
    "crusty_chunks:assembly_depot",
    "crusty_chunks:assembly_furnace",
    "crusty_chunks:assembly_machine",
    "crusty_chunks:assembly_mechanical_fabricator",
    "crusty_chunks:auto_pistol",
    "crusty_chunks:autocannon",
    "crusty_chunks:autocannon_barrel",
    "crusty_chunks:autocannon_drum",
    "crusty_chunks:autoloader",
    "crusty_chunks:automatic_rifle",
    "crusty_chunks:automatic_rifle_receiver",
    "crusty_chunks:basic_receiver",
    "crusty_chunks:battle_cannon_barrel",
    "crusty_chunks:battle_cannon_breech",
    "crusty_chunks:battle_cannon_mantlet",
    "crusty_chunks:battle_rifle",
    "crusty_chunks:bauxite_digester",
    "crusty_chunks:beryllium_block",
    "crusty_chunks:beryllium_ingot",
    "crusty_chunks:bird_shot",
    "crusty_chunks:blast_armor_boots",
    "crusty_chunks:blast_armor_chestplate",
    "crusty_chunks:blast_armor_helmet",
    "crusty_chunks:blast_armor_leggings",
    "crusty_chunks:blast_clay",
    "crusty_chunks:blast_funnel",
    "crusty_chunks:blast_furnace",
    "crusty_chunks:blast_furnace_brick",
    "crusty_chunks:blast_furnace_bricks",
    "crusty_chunks:body_armor_chestplate",
    "crusty_chunks:bolt_action_receiver",
    "crusty_chunks:bolt_action_rifle_animated",
    "crusty_chunks:brass_block",
    "crusty_chunks:brass_fitting",
    "crusty_chunks:brass_ingot",
    "crusty_chunks:brass_plate",
    "crusty_chunks:break_action_shotgun_animated",
    "crusty_chunks:breech_rifle",
    "crusty_chunks:breeder_reactor_core",
    "crusty_chunks:breeder_reactor_interface",
    "crusty_chunks:breeder_reactor_port",
    "crusty_chunks:bullet",
    "crusty_chunks:bullet_resistant_helmet_2_helmet",
    "crusty_chunks:bullet_resistant_helmet_3_helmet",
    "crusty_chunks:bullet_resistant_helmet_4_helmet",
    "crusty_chunks:bullet_resistant_helmet_helmet",
    "crusty_chunks:burst_rifle",
    "crusty_chunks:cable",
    "crusty_chunks:chaff_charge",
    "crusty_chunks:chisel",
    "crusty_chunks:combustion_cylinder",
    "crusty_chunks:component_foundry_template",
    "crusty_chunks:compressed_advanced_mixture",
    "crusty_chunks:concrete_wall",
    "crusty_chunks:control_rod",
    "crusty_chunks:conveyor",
    "crusty_chunks:conveyor_splitter",
    "crusty_chunks:copper_plate",
    "crusty_chunks:copper_wire",
    "crusty_chunks:countermeasure_dispenser",
    "crusty_chunks:covered_flame_thrower_barrel",
    "crusty_chunks:covered_machine_gun_barrel",
    "crusty_chunks:cut_component",
    "crusty_chunks:cutters",
    "crusty_chunks:cylinder_foundry_template",
    "crusty_chunks:drive_shaft",
    "crusty_chunks:electric_firebox",
    "crusty_chunks:electric_motor",
    "crusty_chunks:empty_fuel_rods",
    "crusty_chunks:energy_battery",
    "crusty_chunks:energy_distribution_node",
    "crusty_chunks:energy_meter",
    "crusty_chunks:energy_node",
    "crusty_chunks:engine_component",
    "crusty_chunks:engine_cyllinder",
    "crusty_chunks:enriched_lithium_ingot",
    "crusty_chunks:enriched_lithium_nugget",
    "crusty_chunks:era_2",
    "crusty_chunks:era_4",
    "crusty_chunks:era_tile",
    "crusty_chunks:extension_shaft",
    "crusty_chunks:extra_large_bullet",
    "crusty_chunks:extra_large_casing",
    "crusty_chunks:extra_large_projectile_template",
    "crusty_chunks:fire_artillery_shell",
    "crusty_chunks:fire_spear_rocket",
    "crusty_chunks:firebox",
    "crusty_chunks:firing_mechanism",
    "crusty_chunks:firing_pin",
    "crusty_chunks:fission_bomb",
    "crusty_chunks:fission_core",
    "crusty_chunks:flak_projectile",
    "crusty_chunks:flak_shell",
    "crusty_chunks:flame_thrower",
    "crusty_chunks:flame_thrower_animated",
    "crusty_chunks:flame_thrower_barrel",
    "crusty_chunks:flame_thrower_tank_chestplate",
    "crusty_chunks:flare_charge",
    "crusty_chunks:flare_pistol",
    "crusty_chunks:foundry",
    "crusty_chunks:foundry_template",
    "crusty_chunks:fuel_hose",
    "crusty_chunks:fuel_rod",
    "crusty_chunks:fuel_tank",
    "crusty_chunks:fuel_tank_input",
    "crusty_chunks:fuel_tank_module",
    "crusty_chunks:fusion_bomb",
    "crusty_chunks:fusion_core",
    "crusty_chunks:gas_artillery_shell",
    "crusty_chunks:gas_mask_helmet",
    "crusty_chunks:gas_mask_helmet_helmet",
    "crusty_chunks:geiger_counter",
    "crusty_chunks:generator",
    "crusty_chunks:giant_coil",
    "crusty_chunks:glass_trapdoor",
    "crusty_chunks:grenade",
    "crusty_chunks:grenade_launcher",
    "crusty_chunks:grenade_shell",
    "crusty_chunks:hammer",
    "crusty_chunks:hand_drill",
    "crusty_chunks:he_projectile",
    "crusty_chunks:heat_projectile",
    "crusty_chunks:heat_shell",
    "crusty_chunks:heavy_machine_gun",
    "crusty_chunks:hollowed_extra_large_projectile",
    "crusty_chunks:hollowed_huge_projectile",
    "crusty_chunks:hollowed_large_projectile",
    "crusty_chunks:huge_barrel_foundry_template",
    "crusty_chunks:huge_bored_barrel",
    "crusty_chunks:huge_bullet",
    "crusty_chunks:huge_cannon_foundry_template",
    "crusty_chunks:huge_casing",
    "crusty_chunks:huge_he_bullet",
    "crusty_chunks:huge_projectile_foundry_template",
    "crusty_chunks:implosion_lens",
    "crusty_chunks:implosion_module",
    "crusty_chunks:incendiary_bottle",
    "crusty_chunks:incendiary_grenade",
    "crusty_chunks:irongear",
    "crusty_chunks:item_incinerator",
    "crusty_chunks:jet_compressor",
    "crusty_chunks:jet_exhaust",
    "crusty_chunks:jet_gearbox",
    "crusty_chunks:jet_turbine",
    "crusty_chunks:large_barrel_template",
    "crusty_chunks:large_bored_barrel",
    "crusty_chunks:large_bullet",
    "crusty_chunks:large_cannon_foundry_template",
    "crusty_chunks:large_casing",
    "crusty_chunks:large_electric_motor",
    "crusty_chunks:large_engine_smokestack",
    "crusty_chunks:large_foundry_template",
    "crusty_chunks:large_magazine",
    "crusty_chunks:large_projectile_foundry_template",
    "crusty_chunks:large_rocket_pod",
    "crusty_chunks:large_rocket_pod_chamber",
    "crusty_chunks:large_shell",
    "crusty_chunks:lead_block",
    "crusty_chunks:lead_ingot",
    "crusty_chunks:lead_nugget",
    "crusty_chunks:lever_rifle",
    "crusty_chunks:light_autocannon",
    "crusty_chunks:light_machine_gun",
    "crusty_chunks:light_wood_block",
    "crusty_chunks:light_wood_frame",
    "crusty_chunks:light_wood_side_panel",
    "crusty_chunks:light_wood_slab",
    "crusty_chunks:light_wood_stairs",
    "crusty_chunks:light_wood_trapdoor",
    "crusty_chunks:lithium_block",
    "crusty_chunks:lithium_deuteride",
    "crusty_chunks:lithium_ingot",
    "crusty_chunks:lithium_nugget",
    "crusty_chunks:lmg_animated",
    "crusty_chunks:lmg_magazine",
    "crusty_chunks:machine_carbine",
    "crusty_chunks:machine_gun",
    "crusty_chunks:machine_gun_barrel",
    "crusty_chunks:machine_gun_box",
    "crusty_chunks:manual_aimer",
    "crusty_chunks:manual_crank",
    "crusty_chunks:mechanical_bore",
    "crusty_chunks:mechanical_extruder",
    "crusty_chunks:mechanical_press",
    "crusty_chunks:mechanical_shear",
    "crusty_chunks:medium_ap_bullet",
    "crusty_chunks:medium_barrel_template",
    "crusty_chunks:medium_bored_barrel",
    "crusty_chunks:medium_cannon_foundry_template",
    "crusty_chunks:medium_casing",
    "crusty_chunks:medium_diesel_engine",
    "crusty_chunks:medium_magazine",
    "crusty_chunks:medium_petrol_engine",
    "crusty_chunks:medium_projectile_foundry_template",
    "crusty_chunks:medium_stealth_bullet",
    "crusty_chunks:mg_receiver",
    "crusty_chunks:mineral_grinder",
    "crusty_chunks:mini_gun_barrel",
    "crusty_chunks:minigun",
    "crusty_chunks:mortar",
    "crusty_chunks:mortar_shell",
    "crusty_chunks:neutron_reflector",
    "crusty_chunks:nickel_block",
    "crusty_chunks:nickel_ingot",
    "crusty_chunks:niobium_block",
    "crusty_chunks:niobium_dust",
    "crusty_chunks:niobium_ingot",
    "crusty_chunks:niobium_tiny_dust",
    "crusty_chunks:nitrate",
    "crusty_chunks:nitrate_block",
    "crusty_chunks:node_trigger",
    "crusty_chunks:nvd_helmet_helmet",
    "crusty_chunks:offset_era_4",
    "crusty_chunks:oil_firebox",
    "crusty_chunks:ordinance_fission_initiator_head",
    "crusty_chunks:ordinance_inline_fission_warhead",
    "crusty_chunks:ordinance_inline_fusion_warhead_stage_1",
    "crusty_chunks:ordinance_inline_fusion_warhead_stage_2",
    "crusty_chunks:ordinance_relocator",
    "crusty_chunks:paint_tool",
    "crusty_chunks:passenger_seat",
    "crusty_chunks:phosphate_block",
    "crusty_chunks:phosphorus_dust",
    "crusty_chunks:pistol_receiver",
    "crusty_chunks:plutonium_block",
    "crusty_chunks:plutonium_ingot",
    "crusty_chunks:plutonium_nugget",
    "crusty_chunks:polished_bauxite",
    "crusty_chunks:polished_trinitite",
    "crusty_chunks:powder_charge",
    "crusty_chunks:power_cell",
    "crusty_chunks:power_reactor_interface",
    "crusty_chunks:power_reactor_port",
    "crusty_chunks:production_input",
    "crusty_chunks:production_output",
    "crusty_chunks:pump_action_shotgun_animated",
    "crusty_chunks:pyrochlore",
    "crusty_chunks:pyrochlore_block",
    "crusty_chunks:rac_barrel",
    "crusty_chunks:radar_spear_missile",
    "crusty_chunks:raw_beryllium",
    "crusty_chunks:raw_beryllium_block",
    "crusty_chunks:raw_lead",
    "crusty_chunks:raw_lead_block",
    "crusty_chunks:raw_lithium",
    "crusty_chunks:raw_lithium_block",
    "crusty_chunks:raw_nickel",
    "crusty_chunks:raw_nickel_block",
    "crusty_chunks:raw_uranium",
    "crusty_chunks:raw_uranium_block",
    "crusty_chunks:raw_zinc",
    "crusty_chunks:raw_zinc_block",
    "crusty_chunks:razor_wire",
    "crusty_chunks:reaction_chamber",
    "crusty_chunks:reactioncomponent",
    "crusty_chunks:reactor_casing",
    "crusty_chunks:rebar",
    "crusty_chunks:redirector_shaft",
    "crusty_chunks:reenforced_concrete",
    "crusty_chunks:refinery",
    "crusty_chunks:refinery_tower",
    "crusty_chunks:reinforced_glass",
    "crusty_chunks:reinforced_glass_stairs",
    "crusty_chunks:reinforced_glass_trapdoor",
    "crusty_chunks:revolver_animated",
    "crusty_chunks:revolver_receiver",
    "crusty_chunks:rifle_stock",
    "crusty_chunks:rocket_pod",
    "crusty_chunks:rocket_pod_chamber",
    "crusty_chunks:rotary_auto_cannon",
    "crusty_chunks:sand_bags",
    "crusty_chunks:scoped_bolt_action_rifle_animated",
    "crusty_chunks:scoped_breech_rifle",
    "crusty_chunks:seeker_spear_rocket",
    "crusty_chunks:semi_automatic_pistol_animated",
    "crusty_chunks:semi_automatic_rifle_animated",
    "crusty_chunks:shale_oil",
    "crusty_chunks:shaped_charge_fuze",
    "crusty_chunks:sheet_metal",
    "crusty_chunks:sheet_metal_pane",
    "crusty_chunks:sheet_metal_slab",
    "crusty_chunks:sheet_metal_stairs",
    "crusty_chunks:shielding_component",
    "crusty_chunks:shotgun_casing",
    "crusty_chunks:shotgun_shell",
    "crusty_chunks:single_shot_rifle",
    "crusty_chunks:slug_shell",
    "crusty_chunks:small_ap_shell",
    "crusty_chunks:small_barrel_template",
    "crusty_chunks:small_bored_barrel",
    "crusty_chunks:small_cannon_foundry_template",
    "crusty_chunks:small_casing",
    "crusty_chunks:small_diesel_engine",
    "crusty_chunks:small_engine",
    "crusty_chunks:small_flak_projectile",
    "crusty_chunks:small_flak_shell",
    "crusty_chunks:small_he_projectile",
    "crusty_chunks:small_hollow_point_bullet",
    "crusty_chunks:small_petrol_engine",
    "crusty_chunks:small_projectile_foundry_template",
    "crusty_chunks:small_shell",
    "crusty_chunks:small_stealth_bullet",
    "crusty_chunks:smallbullet",
    "crusty_chunks:smallmagazine",
    "crusty_chunks:smg_animated",
    "crusty_chunks:smg_magazine",
    "crusty_chunks:smg_receiver",
    "crusty_chunks:smoke_grenade",
    "crusty_chunks:smoke_grenade_shell",
    "crusty_chunks:smoke_launcher",
    "crusty_chunks:smoke_mortar_shell",
    "crusty_chunks:smoke_projectile",
    "crusty_chunks:smoke_shell",
    "crusty_chunks:solar_generator",
    "crusty_chunks:solid_rocket_fuel_pack",
    "crusty_chunks:solid_shell",
    "crusty_chunks:stealth_large_bullet",
    "crusty_chunks:stealth_pistol",
    "crusty_chunks:steel_block",
    "crusty_chunks:steel_crushing_wheel",
    "crusty_chunks:steel_door",
    "crusty_chunks:steel_gear",
    "crusty_chunks:steel_ingot",
    "crusty_chunks:steel_optic",
    "crusty_chunks:steel_plating",
    "crusty_chunks:steel_plating_slab",
    "crusty_chunks:steel_plating_stairs",
    "crusty_chunks:steel_spring",
    "crusty_chunks:steel_trapdoor",
    "crusty_chunks:steel_truss",
    "crusty_chunks:steel_tube",
    "crusty_chunks:steel_wire",
    "crusty_chunks:strike_spear_missile",
    "crusty_chunks:sulfur",
    "crusty_chunks:sulfur_block",
    "crusty_chunks:tar",
    "crusty_chunks:thermal_furnace",
    "crusty_chunks:thermal_shell",
    "crusty_chunks:thermo_nuclear_fuel",
    "crusty_chunks:thick_battle_cannon_barrel",
    "crusty_chunks:timed_fuze",
    "crusty_chunks:tinted_glass_stairs",
    "crusty_chunks:tinted_glass_trapdoor",
    "crusty_chunks:tiny_lithium_deuteride",
    "crusty_chunks:trinitite",
    "crusty_chunks:trinitite_glass",
    "crusty_chunks:trinitite_glass_stairs",
    "crusty_chunks:trinitite_glass_trapdoor",
    "crusty_chunks:turbine_rotor",
    "crusty_chunks:type_1_bc_muzzle_brake",
    "crusty_chunks:type_2_bc_muzzle_brake",
    "crusty_chunks:unfabricated_tech_component",
    "crusty_chunks:uranium_depleted_block",
    "crusty_chunks:uranium_depleted_dust",
    "crusty_chunks:uranium_depleted_ingot",
    "crusty_chunks:uranium_depleted_tiny_dust",
    "crusty_chunks:uranium_enriched_block",
    "crusty_chunks:uranium_enriched_dust",
    "crusty_chunks:uranium_enriched_ingot",
    "crusty_chunks:uranium_enriched_tiny_dust",
    "crusty_chunks:uranium_neural_ingot",
    "crusty_chunks:uranium_neutral_block",
    "crusty_chunks:uranium_neutral_dust",
    "crusty_chunks:uranium_neutraltiny_dust",
    "crusty_chunks:weapon_bolt",
    "crusty_chunks:weapon_supressor",
    "crusty_chunks:welder",
    "crusty_chunks:wire_fence",
    "crusty_chunks:wood_component",
    "crusty_chunks:zinc_block",
    "crusty_chunks:zinc_ingot"
  ];

  event.remove({ id: "crusty_chunks:impact_fuze_recipe" });
  event.remove({ id: "crusty_chunks:small_bomb_recipe" });
  event.remove({ id: "crusty_chunks:cluster_bomb_recipe" });
  event.remove({ id: "crusty_chunks:medium_bomb_recipe" });
  event.remove({ id: "crusty_chunks:gas_bomb_recipe" });
  event.remove({ id: "crusty_chunks:toxic_agent_recipe" });
  event.remove({ id: "crusty_chunks:smoke_agent_recipe" });
  event.remove({ id: "crusty_chunks:smoke_bomb_recipe" });
  event.remove({ id: "crusty_chunks:landmine_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_heavy_warhead_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_fire_warhead" });
  event.remove({ id: "crusty_chunks:ordinance_core_recipe" });
  event.remove({ id: "crusty_chunks:steel_component_recipe" });
  event.remove({ id: "crusty_chunks:fire_agent_recipe" });
  event.remove({ id: "crusty_chunks:propellent_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_rocket_recipe" });
  event.remove({ id: "crusty_chunks:torpedo_thruster_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_fin_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_cluster_warhead_recipe" });
  event.remove({ id: "crusty_chunks:sarh_head_recipe" });
  event.remove({ id: "crusty_chunks:radar_component_recipe" });
  event.remove({ id: "crusty_chunks:ir_component_recipe" });
  event.remove({ id: "crusty_chunks:seeker_head_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_kinetic_warhead_recipe" });
  event.remove({ id: "crusty_chunks:ordinance_inline_warhead_recipe" });
  event.remove({ id: "crusty_chunks:missile_hardpoint_recipe" });
  event.remove({ id: "crusty_chunks:asphalt_recipe" });
  event.remove({ output: "crusty_chunks:bored_component" });
  disabledWariumOutputs.forEach(function(output) {
    event.remove({ output: output });
  });

  event.shaped("crusty_chunks:hammer", [
    " I ",
    " sI",
    "s  "
  ], {
    s: "minecraft:stick",
    I: "minecraft:iron_ingot"
  }).id("kubejs:crusty_chunks/hammer");

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:impact_fuze",
    transitional,
    [
      event.recipes.create.deploying(transitional, [
        transitional,
        "minecraft:gunpowder"
      ]),
      event.recipes.create.deploying(transitional, [
        transitional,
        "minecraft:flint"
      ])
    ]
  ).transitionalItem(transitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:small_bomb",
    transitional,
    [
      event.recipes.create.deploying(transitional, [
        transitional,
        "crusty_chunks:volatile_dust"
      ]),
      event.recipes.create.deploying(transitional, [
        transitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(transitional, [
        transitional,
        "crusty_chunks:impact_fuze"
      ]),
      event.recipes.create.pressing(transitional, transitional)
    ]
  ).transitionalItem(transitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:cluster_of_bombs",
    transitional,
    [
      event.recipes.create.deploying(transitional, [
        transitional,
        "crusty_chunks:small_bomb"
      ]),
      event.recipes.create.deploying(transitional, [
        transitional,
        "minecraft:redstone"
      ])
    ]
  ).transitionalItem(transitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:redstone_tnt",
    bombTransitional,
    [
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:volatile_dust"
      ]),
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:impact_fuze"
      ]),
      event.recipes.create.pressing(bombTransitional, bombTransitional)
    ]
  ).transitionalItem(bombTransitional).loops(1);

  event.recipes.create.mixing(
    [Item.of("crusty_chunks:toxic_agent")],
    [
      sulfurDust,
      copperDust,
      "crusty_chunks:smoke_agent"
    ]
  );

  event.recipes.create.crushing(
    [Item.of("crusty_chunks:zinc_dust")],
    zincIngot
  );

  event.shapeless(
    Item.of("crusty_chunks:bored_component"),
    [
      "crusty_chunks:steelplate",
      "tfmg:screw"
    ]
  );

  event.recipes.create.mixing(
    [Item.of("crusty_chunks:smoke_agent")],
    [
      zincDust,
      copperDust,
      "minecraft:gunpowder"
    ]
  );

  event.recipes.create.mixing(
    [Item.of("crusty_chunks:fire_agent", 4)],
    [
      "minecraft:gunpowder",
      sulfurDust,
      zincDust,
      ironDust
    ]
  );

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "minecraft:gunpowder" },
      { item: "minecraft:gunpowder" },
      { item: "minecraft:redstone" },
      { item: "minecraft:redstone" },
      { amount: 10, fluidTag: "forge:gasoline" }
    ],
    results: [
      { item: "crusty_chunks:propellent", count: 4 }
    ]
  });

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:gas_bomb",
    bombTransitional,
    [
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:toxic_agent"
      ])
    ]
  ).transitionalItem(bombTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:smoke_bomb",
    bombTransitional,
    [
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:smoke_agent"
      ])
    ]
  ).transitionalItem(bombTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:land_mine",
    bombTransitional,
    [
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        ironPressurePlate
      ])
    ]
  ).transitionalItem(bombTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_heavy_warhead",
    mediumBombTransitional,
    [
      event.recipes.create.deploying(mediumBombTransitional, [
        mediumBombTransitional,
        "crusty_chunks:large_volatile_pile"
      ]),
      event.recipes.create.deploying(mediumBombTransitional, [
        mediumBombTransitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(mediumBombTransitional, [
        mediumBombTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(mediumBombTransitional, mediumBombTransitional)
    ]
  ).transitionalItem(mediumBombTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_cluster_warhead",
    clusterBombTransitional,
    [
      event.recipes.create.deploying(clusterBombTransitional, [
        clusterBombTransitional,
        "crusty_chunks:large_volatile_pile"
      ]),
      event.recipes.create.deploying(clusterBombTransitional, [
        clusterBombTransitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(clusterBombTransitional, [
        clusterBombTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(clusterBombTransitional, clusterBombTransitional)
    ]
  ).transitionalItem(clusterBombTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_incendiary_warhead",
    ordinanceNoseTransitional,
    [
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "crusty_chunks:fire_agent"
      ])
    ]
  ).transitionalItem(ordinanceNoseTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_sarh_seeker",
    ordinanceNoseTransitional,
    [
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "create:precision_mechanism"
      ]),
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "crusty_chunks:radar_component"
      ])
    ]
  ).transitionalItem(ordinanceNoseTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:radar_component",
    precisionMechanismTransitional,
    [
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "crusty_chunks:copper_coil"
      ]),
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "create_radar:data_link"
      ])
    ]
  ).transitionalItem(precisionMechanismTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ir_component",
    precisionMechanismTransitional,
    [
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "crusty_chunks:copper_coil"
      ]),
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "crusty_chunks:bent_component"
      ]),
      event.recipes.create.deploying(precisionMechanismTransitional, [
        precisionMechanismTransitional,
        "minecraft:amethyst_shard"
      ])
    ]
  ).transitionalItem(precisionMechanismTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_ir_seeker_head",
    ordinanceNoseTransitional,
    [
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "create:precision_mechanism"
      ]),
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "crusty_chunks:ir_component"
      ])
    ]
  ).transitionalItem(ordinanceNoseTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_kinetic_head",
    ordinanceNoseTransitional,
    [
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "crusty_chunks:impact_fuze"
      ]),
      event.recipes.create.deploying(ordinanceNoseTransitional, [
        ordinanceNoseTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(ordinanceNoseTransitional, ordinanceNoseTransitional)
    ]
  ).transitionalItem(ordinanceNoseTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_core",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:large_volatile_pile"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steel_component"
      ]),
      event.recipes.create.pressing(steelPlateTransitional, steelPlateTransitional)
    ]
  ).transitionalItem(steelPlateTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_inline_warhead",
    ordinanceCoreTransitional,
    [
      event.recipes.create.deploying(ordinanceCoreTransitional, [
        ordinanceCoreTransitional,
        "crusty_chunks:ordinance_heavy_warhead"
      ]),
      event.recipes.create.pressing(ordinanceCoreTransitional, ordinanceCoreTransitional)
    ]
  ).transitionalItem(ordinanceCoreTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:steel_component",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "create:cogwheel"
      ]),
      event.recipes.create.pressing(steelPlateTransitional, steelPlateTransitional)
    ]
  ).transitionalItem(steelPlateTransitional).loops(1);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_thruster",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:propellent"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "minecraft:redstone"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(steelPlateTransitional, steelPlateTransitional)
    ]
  ).transitionalItem(steelPlateTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:torpedo_thruster",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "create:propeller"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:propellent"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(steelPlateTransitional, steelPlateTransitional)
    ]
  ).transitionalItem(steelPlateTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:ordinance_fins",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steel_component"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steelplate"
      ]),
      event.recipes.create.pressing(steelPlateTransitional, steelPlateTransitional)
    ]
  ).transitionalItem(steelPlateTransitional).loops(4);

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:empty_missile_hardpoint",
    steelPlateTransitional,
    [
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "minecraft:redstone"
      ]),
      event.recipes.create.deploying(steelPlateTransitional, [
        steelPlateTransitional,
        "crusty_chunks:steel_component"
      ])
    ]
  ).transitionalItem(steelPlateTransitional).loops(3);

  [
    {
      output: "crusty_chunks:seeker_spear_rocket",
      scanner: "crusty_chunks:ir_component"
    },
    {
      output: "crusty_chunks:radar_spear_missile",
      scanner: "crusty_chunks:radar_component"
    }
  ].forEach(function(missile) {
    event.recipes.create.sequenced_assembly(
      missile.output,
      bombTransitional,
      [
        event.recipes.create.deploying(bombTransitional, [
          bombTransitional,
          missile.scanner
        ]),
        event.recipes.create.deploying(bombTransitional, [
          bombTransitional,
          "crusty_chunks:propellent"
        ]),
        event.recipes.create.deploying(bombTransitional, [
          bombTransitional,
          steelPlateTransitional
        ]),
        event.recipes.create.deploying(bombTransitional, [
          bombTransitional,
          "crusty_chunks:bent_component"
        ]),
        event.recipes.create.pressing(bombTransitional, bombTransitional)
      ]
    ).transitionalItem(bombTransitional).loops(1);
  });

  event.recipes.create.sequenced_assembly(
    "crusty_chunks:strike_spear_missile",
    bombTransitional,
    [
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:propellent"
      ]),
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        "crusty_chunks:steel_component"
      ]),
      event.recipes.create.deploying(bombTransitional, [
        bombTransitional,
        steelPlateTransitional
      ]),
      event.recipes.create.pressing(bombTransitional, bombTransitional)
    ]
  ).transitionalItem(bombTransitional).loops(1);
});

ServerEvents.recipes(event => {

  ;(() => {

      const allowedItems = [
        'valkyrien_warium:flight_hud_block',
        'valkyrien_warium:control_trigger_off',
        'valkyrien_warium:axis_trigger_off',
        'valkyrien_warium:small_radar',
        'valkyrien_warium:slim_landing_gear_bay',
        'valkyrien_warium:advanced_warning_system',
        'valkyrien_warium:landing_gear',
        'valkyrien_warium:toggle_trigger_off',
        'valkyrien_warium:drag_handle',
        'valkyrien_warium:laser_designator',
        'crusty_chunks:fire_spear_rocket',
        'crusty_chunks:seeker_spear_rocket',
        'crusty_chunks:smoke_bomb',
        'crusty_chunks:gas_bomb',
        'crusty_chunks:empty_missile_hardpoint',
        'crusty_chunks:grenade',
        'crusty_chunks:radar_spear_missile',
        'crusty_chunks:armor_peeler_rocket',
        'crusty_chunks:strike_spear_missile',
        'crusty_chunks:small_bomb',
        'crusty_chunks:cluster_of_bombs',
        'crusty_chunks:redstone_tnt',
        'crusty_chunks:bored_component',
        'crusty_chunks:fire_agent',
        'crusty_chunks:hammer',
        'crusty_chunks:impact_fuze',
        'crusty_chunks:ir_component',
        'crusty_chunks:ordinance_core',
        'crusty_chunks:ordinance_thruster',
        'crusty_chunks:torpedo_thruster',
        'crusty_chunks:ordinance_fins',
        'crusty_chunks:ordinance_heavy_warhead',
        'crusty_chunks:ordinance_incendiary_warhead',
        'valkyrien_warium:vehicle_control_node',
        'valkyrien_warium:control_seat',
        'crusty_chunks:land_mine',
        'crusty_chunks:ordinance_relocator',
        'crusty_chunks:ordinance_cluster_warhead',
        'crusty_chunks:ordinance_sarh_seeker',
        'crusty_chunks:ordinance_ir_seeker_head',
        'crusty_chunks:ordinance_kinetic_head',
        'crusty_chunks:ordinance_inline_warhead',
        'crusty_chunks:propellent',
        'crusty_chunks:radar_component',
        'crusty_chunks:smoke_agent',
        'crusty_chunks:steel_component',
        'crusty_chunks:steelplate',
        'crusty_chunks:bent_component',
        'crusty_chunks:toxic_agent',
        'crusty_chunks:zinc_dust'
      ]

      function removeDisallowedOutputs(namespace) {
        Ingredient.of('@' + namespace).itemIds.forEach(itemId => {
          const id = String(itemId)
          if (allowedItems.indexOf(id) !== -1) {
            return
          }

          event.remove({ output: id })
        })
      }

      removeDisallowedOutputs('valkyrien_warium')
      removeDisallowedOutputs('crusty_chunks')
  })()

  ;(() => {

      event.remove({ id: 'valkyrien_warium:laser_designator_recipe' })

      event.shaped(
        Item.of('valkyrien_warium:laser_designator', 1),
        [
          'SSS',
          'SFS',
          'SLS'
        ],
        {
          S: '#forge:plates/steel',
          F: 'createpropulsion:focus_lens',
          L: 'minecraft:redstone_lamp'
        }
      ).id('kubejs:valkyrien_warium/laser_designator')
  })()

  ;(() => {

      event.remove({ output: 'crusty_chunks:bent_component' })
      event.recipes.create.pressing(
        'crusty_chunks:bent_component',
        'crusty_chunks:steelplate'
      ).id('kubejs:crusty_chunks/bent_component_from_steelplate')
  })()

  ;(() => {

      event.remove({ id: 'crusty_chunks:volatile_dust_recipe' })
      event.remove({ id: 'crusty_chunks:volatile_grow' })
      event.remove({ id: 'crusty_chunks:volatile_shrink' })
      event.remove({ output: 'crusty_chunks:volatile_dust' })
      event.remove({ output: 'crusty_chunks:large_volatile_pile' })

      event.custom({
        type: 'minecraft:crafting_shapeless',
        group: 'volatile',
        category: 'misc',
        ingredients: [
          {
            item: 'minecraft:gunpowder'
          },
          {
            item: 'minecraft:gunpowder'
          },
          {
            item: 'minecraft:redstone'
          },
          {
            item: 'minecraft:gunpowder'
          }
        ],
        result: {
          item: 'crusty_chunks:volatile_dust',
          count: 1
        }
      }).id('crusty_chunks:volatile_dust_recipe')

      event.custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        pattern: [
          'aa',
          'aa'
        ],
        key: {
          a: {
            item: 'crusty_chunks:volatile_dust'
          }
        },
        result: {
          item: 'crusty_chunks:large_volatile_pile',
          count: 1
        }
      }).id('crusty_chunks:volatile_grow')

      event.custom({
        type: 'minecraft:crafting_shapeless',
        group: 'volatile',
        category: 'misc',
        ingredients: [
          {
            item: 'crusty_chunks:large_volatile_pile'
          }
        ],
        result: {
          item: 'crusty_chunks:volatile_dust',
          count: 4
        }
      }).id('crusty_chunks:volatile_shrink')
  })()

})
