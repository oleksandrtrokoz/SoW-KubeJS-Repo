ServerEvents.recipes(event => {

  ;(() => {

      event.recipes.create.mixing(
        [Item.of('create:andesite_alloy', 1)],
        [
          'minecraft:andesite',
          '#kubejs:andesitealloycheap'
        ]
      )
  })()

  ;(() => {

      event.remove({ output: 'create:basin' })

      event.shaped(
        Item.of('create:basin', 1),
        [
          'A A',
          'A A',
          'BBB'
        ],
        {
          A: 'create:iron_sheet',
          B: 'create:andesite_alloy'
        }
      )
  })()

  ;(() => {

      event.recipes.create.mixing(
        [
          Item.of('create:brass_block', 2)
        ],
        [
          'create:zinc_block',
          'minecraft:copper_block'
        ]
      ).heated().id('kubejs:create/mixing/brass_blocks_from_zinc_and_copper_blocks')
  })()

  ;(() => {

      event.remove({ output: 'create:chute' })

      event.shaped(
        Item.of('create:chute', 3),
        [
          'A',
          'I',
          'A'
        ],
        {
          A: '#forge:plates/iron',
          I: '#forge:ingots/iron'
        }
      ).id('kubejs:create/chute')
  })()

  ;(() => {

      event.remove({ output: 'create:copper_valve_handle' })

      event.shaped(
        'create:copper_valve_handle',
        [
          'CCC',
          ' S '
        ],
        {
          C: '#forge:plates/copper',
          S: 'create:shaft'
        }
      ).id('kubejs:create/copper_valve_handle')
  })()

  ;(() => {

      event.remove({ output: 'create:depot' })

      event.shapeless('1x create:depot', [
        'create:andesite_alloy',
        'create:andesite_alloy',
        'create:iron_sheet',
        'create:andesite_casing'
      ]).id('kubejs:create/depot')
  })()

  ;(() => {

      event.remove({ output: 'create:electron_tube' })

      event.shapeless('create:electron_tube', [
        'create:polished_rose_quartz',
        'createaddition:copper_wire',
        'create:iron_sheet'
      ]).id('kubejs:create/electron_tube')
  })()

  ;(() => {

      event.remove({ output: 'create:empty_blaze_burner' })

      event.shaped(
        Item.of('create:empty_blaze_burner', 1),
        [
          'RIR',
          'IAI',
          'RIR'
        ],
        {
          R: 'createaddition:iron_rod',
          I: 'create:iron_sheet',
          A: '#forge:netherrack'
        }
      ).id('kubejs:create/empty_blaze_burner')
  })()

  ;(() => {

      event.remove({ output: 'create:encased_fan' })

      event.shaped(
        Item.of('create:encased_fan', 1),
        [
          ' A ',
          'BCB',
          ' D '
        ],
        {
          A: 'create:shaft',
          B: 'create:iron_sheet',
          C: 'create:andesite_casing',
          D: 'create:propeller'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:fluid_pipe' })

      event.shaped(
        Item.of('create:fluid_pipe', 3),
        [
          'SCS'
        ],
        {
          S: '#forge:plates/copper',
          C: '#forge:ingots/copper'
        }
      ).id('kubejs:create/fluid_pipe')
  })()

  ;(() => {

      event.remove({ output: 'create:fluid_valve' })

      event.shapeless('create:fluid_valve', [
        'create:iron_sheet',
        'create:fluid_pipe',
        'create:shaft'
      ]).id('kubejs:create/fluid_valve')
  })()

  ;(() => {

      event.remove({ output: 'create:item_vault' })
      event.remove({ output: 'create_connected:item_silo' })

      event.shaped(
        Item.of('create:item_vault', 1),
        [
          ' A ',
          'ABA',
          ' A '
        ],
        {
          A: 'create:iron_sheet',
          B: '#forge:barrels/wooden'
        }
      )

      event.shapeless('1x create_connected:item_silo', [
        'create:item_vault'
      ])

      event.shapeless('1x create:item_vault', [
        'create_connected:item_silo'
      ])
  })()

  ;(() => {

      event.remove({ output: 'create:mechanical_bearing' })

      event.shaped(
        Item.of('create:mechanical_bearing', 1),
        [
          'A',
          'B',
          'C'
        ],
        {
          A: '#minecraft:wooden_slabs',
          B: 'create:andesite_casing',
          C: 'create:large_cogwheel'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:mechanical_piston' })

      event.shaped(
        Item.of('create:mechanical_piston', 1),
        [
          ' A ',
          'BCB',
          ' D '
        ],
        {
          A: '#minecraft:wooden_slabs',
          B: 'create:shaft',
          C: 'create:andesite_casing',
          D: 'create:piston_extension_pole'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:mechanical_press' })

      event.shaped(
        Item.of('create:mechanical_press', 1),
        [
          ' A ',
          'BCB',
          ' D '
        ],
        {
          A: 'create:shaft',
          B: 'create:iron_sheet',
          C: 'create:andesite_casing',
          D: 'minecraft:iron_block'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:mechanical_pump' })

      event.shaped(
        Item.of('create:mechanical_pump', 1),
        [
          ' C ',
          'APA',
          ' C '
        ],
        {
          C: 'create:cogwheel',
          A: 'create:andesite_alloy',
          P: 'create:fluid_pipe'
        }
      ).id('kubejs:create/mechanical_pump')
  })()

  ;(() => {

      event.remove({ output: 'create:piston_extension_pole' })

      event.shaped(
        Item.of('create:piston_extension_pole', 1),
        [
          'A',
          'B',
          'A'
        ],
        {
          A: '#minecraft:planks',
          B: 'create:shaft'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:propeller' })

      event.shaped(
        Item.of('create:propeller', 1),
        [
          '   ',
          'ABA',
          '   '
        ],
        {
          A: 'create:iron_sheet',
          B: 'createaddition:iron_rod'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'create:smart_chute' })

      event.shaped(
        Item.of('create:smart_chute', 1),
        [
          'ISI',
          ' P '
        ],
        {
          I: '#forge:plates/brass',
          S: 'create:chute',
          P: 'create:electron_tube'
        }
      ).id('kubejs:create/smart_chute')
  })()

  ;(() => {

      event.remove({ output: 'create:whisk' })

      event.shaped(
        Item.of('create:whisk', 1),
        [
          ' A ',
          'BCB',
          ' A '
        ],
        {
          A: 'minecraft:iron_nugget',
          B: 'create:iron_sheet',
          C: 'createaddition:iron_rod'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'createaddition:rolling_mill' })

      event.shaped(
        Item.of('createaddition:rolling_mill', 1),
        [
          'AAA',
          'BBB',
          'CDC'
        ],
        {
          A: 'create:iron_sheet',
          B: 'create:shaft',
          C: 'create:andesite_alloy',
          D: 'create:andesite_casing'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'createpropulsion:optical_lens' })

      event.shapeless('1x createpropulsion:optical_lens', [
        '#create:sandpaper',
        '#forge:glass_panes'
      ])
  })()

  ;(() => {

      event.recipes.create.sequenced_assembly(
        [
          'create:precision_mechanism'
        ],
        'create:golden_sheet',
        [
          event.recipes.create.deploying(
            'create:incomplete_precision_mechanism',
            [
              'create:incomplete_precision_mechanism',
              'create:cogwheel'
            ]
          ),

          event.recipes.create.deploying(
            'create:incomplete_precision_mechanism',
            [
              'create:incomplete_precision_mechanism',
              'create:large_cogwheel'
            ]
          ),

          event.recipes.create.deploying(
            'create:incomplete_precision_mechanism',
            [
              'create:incomplete_precision_mechanism',
              'minecraft:iron_nugget'
            ]
          )
        ]
      )
      .transitionalItem('create:incomplete_precision_mechanism')
      .loops(5)
      .id('kubejs:restored_precision_mechanism')
  })()

  ;(() => {

      event.custom({
        type: 'create:compacting',
        ingredients: [
          { item: 'minecraft:dried_kelp' },
          { item: 'minecraft:dried_kelp' },
          { item: 'minecraft:dried_kelp' },
          { item: 'minecraft:dried_kelp' },
          { item: 'minecraft:dried_kelp' },
          { item: 'minecraft:dried_kelp' }
        ],
        results: [
          { item: 'create:belt_connector', count: 1 }
        ]
      }).id('kubejs:create/belt_compacting')
  })()

})
