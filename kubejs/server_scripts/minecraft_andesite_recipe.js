ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:andesite', 2),
    [
      'minecraft:gravel',
      'minecraft:cobblestone'
    ]
  )
})