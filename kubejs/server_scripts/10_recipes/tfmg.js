ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ id: 'tfmg:crushing/dirt' })

      event.custom({
        type: 'create:crushing',
        ingredients: [
          {
            item: 'minecraft:dirt'
          }
        ],
        results: [
          {
            chance: 0.2,
            item: 'tfmg:nitrate_dust'
          },
          {
            chance: 0.2,
            item: 'tfmg:sulfur_dust'
          }
        ]
      }).id('kubejs:tfmg/crushing/dirt')
  })()

  ;(() => {

      event.remove({ output: 'tfmg:steel_axe' })

      event.shaped(
        Item.of('tfmg:steel_axe', 1),
        [
          'AA ',
          'AB ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )

      event.shaped(
        Item.of('tfmg:steel_axe', 1),
        [
          ' AA',
          ' BA',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'tfmg:steel_hoe' })

      event.shaped(
        Item.of('tfmg:steel_hoe', 1),
        [
          'AA ',
          ' B ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )

      event.shaped(
        Item.of('tfmg:steel_hoe', 1),
        [
          ' AA',
          ' B ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'tfmg:steel_pickaxe' })

      event.shaped(
        Item.of('tfmg:steel_pickaxe', 1),
        [
          'AAA',
          ' B ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'tfmg:steel_shovel' })

      event.shaped(
        Item.of('tfmg:steel_shovel', 1),
        [
          ' A ',
          ' B ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'tfmg:steel_sword' })

      event.shaped(
        Item.of('tfmg:steel_sword', 1),
        [
          ' A ',
          ' A ',
          ' B '
        ],
        {
          A: '#forge:ingots/steel',
          B: '#forge:rods/iron'
        }
      )
  })()

  ;(() => {

      event.recipes.create.mixing(
        [
          Fluid.of('tfmg:sulfuric_acid', 100)
        ],
        [
          'tfmg:sulfur_dust',
          'tfmg:nitrate_dust',
          Fluid.of('minecraft:water', 100)
        ]
      ).id('kubejs:tfmg/mixing/sulfuric_acid_small_batch')
  })()

  ;(() => {

      event.remove({ output: 'tfmg:heavy_plate' })
      event.custom({
        type: 'create:compacting',
        ingredients: [
          {
            tag: 'forge:ingots/steel'
          }
        ],
        results: [
          {
            item: 'tfmg:heavy_plate'
          }
        ]
      }).id('kubejs:tfmg/heavy_plate_from_compacting_steel_ingot')
  })()

  ;(() => {

      event.remove({ output: 'tfmg:concrete' })

      event.recipes.createMixing(
        [Item.of('tfmg:concrete', 4)],
        [
          Item.of('minecraft:sand', 4),
          Item.of('minecraft:gravel', 4),
          Fluid.of('minecraft:water', 20)
        ]
      )
  })()

  ;(() => {

      const colors = [
        'white',
        'blue',
        'light_blue',
        'red',
        'green',
        'lime',
        'pink',
        'magenta',
        'yellow',
        'gray',
        'light_gray',
        'brown',
        'cyan',
        'purple',
        'orange',
        'black'
      ]

      colors.forEach(color => {
        event.remove({ output: `tfmg:${color}_concrete` })

        event.recipes.createMixing(
          [Item.of(`tfmg:${color}_concrete`, 8)],
          [
            Item.of('tfmg:concrete', 8),
            `minecraft:${color}_dye`
          ]
        )
      })
  })()

  ;(() => {

      event.remove({ output: 'tfmg:rebar_concrete' })

      event.shapeless(
        Item.of('tfmg:rebar_concrete', 1),
        [
          Item.of('tfmg:rebar', 8),
          'tfmg:concrete'
        ]
      )
  })()

  ;(() => {

      const colors = [
        'white',
        'blue',
        'light_blue',
        'red',
        'green',
        'lime',
        'pink',
        'magenta',
        'yellow',
        'gray',
        'light_gray',
        'brown',
        'cyan',
        'purple',
        'orange',
        'black'
      ]

      colors.forEach(color => {
        event.remove({ output: `tfmg:${color}_rebar_concrete` })

        event.shapeless(
          Item.of(`tfmg:${color}_rebar_concrete`, 1),
          [
            Item.of('tfmg:rebar', 8),
            `tfmg:${color}_concrete`
          ]
        )
      })
  })()

})
