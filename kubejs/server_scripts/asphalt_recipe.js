ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    ["crusty_chunks:asphalt"],
    [
      "minecraft:gravel",
      "crusty_chunks:shale_oil"
    ]
  ).id("kubejs:crusty_chunks/asphalt_mixing");
});
