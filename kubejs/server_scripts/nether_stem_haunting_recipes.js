ServerEvents.recipes(event => {
  // CREATE HAUNTING: Logs -> Crimson Stem (avoid nether stems to prevent recipe conflicts)
  event.recipes.createHaunting(
    "minecraft:crimson_stem",
    "#minecraft:logs_that_burn"
  );

  // CREATE HAUNTING: Crimson Stem -> Warped Stem
  event.recipes.createHaunting(
    "minecraft:warped_stem",
    "minecraft:crimson_stem"
  );
});
