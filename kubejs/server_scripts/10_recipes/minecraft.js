ServerEvents.recipes(event => {

  ;(() => {

      event.recipes.create.mixing(
        ['minecraft:tuff'],
        [
          'minecraft:cobblestone',
          Fluid.of('minecraft:water', 50)
        ]
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:dirt' })

      event.recipes.create.mixing(
        ['minecraft:dirt'],
        [
          'minecraft:gravel',
          'minecraft:sand'
        ]
      ).id('kubejs:minecraft/dirt_mixing')
  })()

  ;(() => {

      event.remove({ id: "create_netherless:netherite_fragment_by_crushing" });
      event.remove({ id: "create_ultimate_factory:crushing_netherite" });
  })()

  ;(() => {

      event.remove({ output: 'minecraft:diamond_axe' })

      event.shaped(
        Item.of('minecraft:diamond_axe', 1),
        [
          'AA ',
          'AB ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )

      event.shaped(
        Item.of('minecraft:diamond_axe', 1),
        [
          ' AA',
          ' BA',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:diamond_hoe' })

      event.shaped(
        Item.of('minecraft:diamond_hoe', 1),
        [
          'AA ',
          ' B ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )

      event.shaped(
        Item.of('minecraft:diamond_hoe', 1),
        [
          ' AA',
          ' B ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:diamond_pickaxe' })

      event.shaped(
        Item.of('minecraft:diamond_pickaxe', 1),
        [
          'AAA',
          ' B ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:diamond_shovel' })

      event.shaped(
        Item.of('minecraft:diamond_shovel', 1),
        [
          ' A ',
          ' B ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:diamond_sword' })

      event.shaped(
        Item.of('minecraft:diamond_sword', 1),
        [
          ' A ',
          ' A ',
          ' B '
        ],
        {
          A: 'minecraft:diamond',
          B: '#forge:rods/steel'
        }
      )
  })()

  ;(() => {

      event.recipes.createHaunting(
        'minecraft:end_stone',
        'minecraft:sandstone'
      ).id('kubejs:minecraft/end_stone_from_haunting_sandstone')
  })()

  ;(() => {

      event.recipes.createHaunting(
        'minecraft:ender_pearl',
        'minecraft:slime_ball'
      ).id('kubejs:minecraft/ender_pearl_from_haunting_slime_ball')
  })()

  ;(() => {

      event.remove({ id: 'create:splashing/crushed_raw_zinc' })
      event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'create:crushed_raw_zinc'
          }
        ],
        results: [
          {
            count: 9,
            item: 'create:zinc_nugget'
          }
        ]
      }).id('create:splashing/crushed_raw_zinc')

      event.remove({ id: 'createmetallurgy:splashing/dirty_zinc_dust' })
      event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'createmetallurgy:dirty_zinc_dust'
          }
        ],
        results: [
          {
            item: 'createmetallurgy:zinc_dust'
          }
        ]
      }).id('createmetallurgy:splashing/dirty_zinc_dust')

      event.remove({ id: 'create:filling/gunpowder' })
      event.remove({ id: 'mekanism:crushing/flint_to_gunpowder' })

      event.remove({ type: 'minecraft:crafting_shaped', output: 'minecraft:gunpowder' })
      event.remove({ type: 'minecraft:crafting_shapeless', output: 'minecraft:gunpowder' })

      event.shaped(
        'minecraft:gunpowder',
        [
          'PPP',
          'PPP',
          'PPP'
        ],
        {
          P: 'createbigcannons:gunpowder_pinch'
        }
      ).id('createbigcannons:gunpowder_from_pinches')
  })()

  ;(() => {

      event.recipes.create.mixing(
        [
          Item.of('minecraft:moss_block', 1)
        ],
        [
          '#minecraft:saplings',
          'minecraft:dirt'
        ]
      ).id('kubejs:minecraft/mixing/moss_block_from_sapling_and_dirt')
  })()

  ;(() => {

      event.shaped(
        Item.of('minecraft:saddle', 1),
        [
          'L L',
          'LLL',
          'N N'
        ],
        {
          L: 'minecraft:leather',
          N: 'minecraft:iron_nugget'
        }
      )
  })()

  ;(() => {

      event.shapeless('2x minecraft:string', [
        {
        tag: 'mekanism:colorable/wool'
        }
      ])
  })()

  ;(() => {

      event.remove({ id: 'create:splashing/gravel' })

      event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'minecraft:gravel'
          }
        ],
        results: [
          {
            chance: 0.1,
            item: 'minecraft:flint'
          },
          {
            chance: 0.5,
            item: 'minecraft:iron_nugget'
          }
        ]
      }).id('kubejs:create/splashing/gravel')
  })()

  ;(() => {

      event.remove({ output: 'minecraft:crimson_stem' })

      event.recipes.createHaunting(
        'minecraft:crimson_stem',
        '#minecraft:logs_that_burn'
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:warped_stem' })

      event.recipes.createHaunting(
        'minecraft:warped_stem',
        'minecraft:crimson_stem'
      )
  })()

  ;(() => {

      event.remove({ output: 'minecraft:ochre_froglight' })

      event.shapeless('1x minecraft:ochre_froglight', [
        'minecraft:glowstone',
        'minecraft:yellow_dye'
      ])
  })()

  ;(() => {

      event.remove({ output: 'minecraft:pearlescent_froglight' })

      event.shapeless('1x minecraft:pearlescent_froglight', [
        'minecraft:glowstone',
        'minecraft:purple_dye'
      ])
  })()

  ;(() => {

      event.remove({ output: 'minecraft:verdant_froglight' })

      event.shapeless('1x minecraft:verdant_froglight', [
        'minecraft:glowstone',
        'minecraft:green_dye'
      ])
  })()

  ;(() => {

      event.shaped('1x minecraft:suspicious_sand', [
        'SG'
      ], {
        S: 'minecraft:sand',
        G: 'minecraft:gravel'
      }).id('kubejs:minecraft/suspicious_sand_from_sand_and_gravel')
  })()

})
