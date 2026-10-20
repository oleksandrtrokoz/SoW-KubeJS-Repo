ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ output: 'crusty_chunks:asphalt' })

      event.recipes.create.mixing(
        ['crusty_chunks:asphalt'],
        [
          'minecraft:gravel',
          'crusty_chunks:shale_oil'
        ]
      ).id('kubejs:crusty_chunks/asphalt_mixing')
  })()

  ;(() => {

      event.shapeless('1x crusty_chunks:copper_coil', [
        '#forge:wires/copper',
        '#forge:wires/copper',
        '#forge:wires/copper',
        '#forge:wires/copper'
      ]).id('kubejs:crusty_chunks/copper_coil_from_copper_wires')
  })()

  ;(() => {

      event.remove({ output: 'crusty_chunks:cutters' })

      event.shaped(
        Item.of('crusty_chunks:cutters', 1),
        [
          ' A ',
          'ABC',
          ' C '
        ],
        {
          A: 'create:iron_sheet',
          B: '#kubejs:strings',
          C: 'crusty_chunks:wood_component'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'crusty_chunks:hammer' })

      event.shaped(
        Item.of('crusty_chunks:hammer', 1),
        [
          ' A ',
          'AB ',
          '  B'
        ],
        {
          A: 'minecraft:iron_ingot',
          B: 'crusty_chunks:wood_component'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'crusty_chunks:irongear' })

      event.shaped(
        Item.of('crusty_chunks:irongear', 1),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: 'minecraft:iron_nugget',
          B: 'create:iron_sheet',
          C: 'createaddition:iron_rod'
        }
      )
  })()

})
