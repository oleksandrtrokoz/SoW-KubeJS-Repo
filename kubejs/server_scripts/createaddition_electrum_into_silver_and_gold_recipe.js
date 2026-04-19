ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    [
      Item.of('minecraft:gold_ingot').withChance(0.75),
      Item.of('superbwarfare:silver_ingot').withChance(0.75)
    ],
    [
      'createaddition:electrum_ingot',
      'createaddition:electrum_ingot'
    ]
  ).heated()
})