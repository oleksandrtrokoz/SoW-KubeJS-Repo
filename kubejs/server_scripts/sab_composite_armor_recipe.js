ServerEvents.recipes(event => {
  // COMPOSITE ARMOR: 3x hard steel armor blocks -> 1x composite armor block
  event.remove({ output: "s_a_b:copmositearmor" });
  event.remove({ output: "s_a_b:steelblockstone" });

  event.shapeless(
    "s_a_b:copmositearmor",
    [
      "#s_a_b:hard_steel_blocks",
      "#s_a_b:hard_steel_blocks",
      "#s_a_b:hard_steel_blocks"
    ]
  );

  event.shapeless(
    Item.of("s_a_b:steelblockstone", 8),
    [
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "#createbigcannons:block_steel",
      "minecraft:clay_ball"
    ]
  );
});
