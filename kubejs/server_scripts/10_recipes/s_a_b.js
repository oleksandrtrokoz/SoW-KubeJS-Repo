ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ output: 's_a_b:steelblockstone' })

      event.shapeless(
        Item.of('s_a_b:steelblockstone', 8),
        [
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          '#createbigcannons:block_steel',
          'minecraft:clay_ball'
        ]
      )
  })()

  ;(() => {

      const lightSteelBlocks = [
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock',
        's_a_b:lightsteelblock'
      ]

      event.remove({ output: 's_a_b:lightsteelblockdeepslate' })
      event.shapeless(
        Item.of('s_a_b:lightsteelblockdeepslate', 8),
        lightSteelBlocks.concat('minecraft:deepslate')
      ).id('kubejs:s_a_b/lightsteelblockdeepslate')

      event.remove({ output: 's_a_b:lightsteelblockstone' })
      event.shapeless(
        Item.of('s_a_b:lightsteelblockstone', 8),
        lightSteelBlocks.concat('minecraft:stone')
      ).id('kubejs:s_a_b/lightsteelblockstone')
  })()

})
