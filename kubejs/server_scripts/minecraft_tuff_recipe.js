ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    ['minecraft:tuff'],
    [
      'minecraft:cobblestone',
      Fluid.of('minecraft:water', 50)
    ]
  )
})