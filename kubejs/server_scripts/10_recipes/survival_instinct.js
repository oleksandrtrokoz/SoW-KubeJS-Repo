ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ id: 'survival_instinct:energy_storage_battery_recipe' })
      event.shaped(
        Item.of('survival_instinct:energy_storage_battery', 1),
        [
          'EAE',
          'BCB',
          'RBR'
        ],
        {
          E: 'survival_instinct:electronic_scrap',
          A: '#forge:ingots/aluminum',
          B: 'survival_instinct:batteries',
          C: 'survival_instinct:can',
          R: 'minecraft:redstone'
        }
      ).id('kubejs:survival_instinct/energy_storage_battery_from_tagged_aluminum')

      event.remove({ id: 'survival_instinct:electronic_scrap_recipe' })
      event.shapeless(
        Item.of('survival_instinct:electronic_scrap', 1),
        [
          '#forge:wires/copper',
          '#forge:wires/electrum',
          '#forge:wires/gold',
          '#forge:wires/iron',
          'survival_instinct:wire'
        ]
      ).id('kubejs:survival_instinct/electronic_scrap_from_mixed_wires')

      event.remove({ id: 'survival_instinct:batteries_recipe' })
      event.shaped(
        Item.of('survival_instinct:batteries', 1),
        [
          ' I ',
          'CEC',
          ' I '
        ],
        {
          I: 'create:iron_sheet',
          C: '#forge:nuggets/copper',
          E: '#forge:storage_blocks/electrum'
        }
      ).id('kubejs:survival_instinct/batteries_from_electrum_block')

      event.remove({ id: 'survival_instinct:can_recipe' })
      event.shaped(
        Item.of('survival_instinct:can', 1),
        [
          'A',
          'A'
        ],
        {
          A: '#forge:ingots/aluminum'
        }
      ).id('kubejs:survival_instinct/can_from_tagged_aluminum')

      event.recipes.create.mixing(
        [
          Item.of('tfmg:aluminum_ingot', 1)
        ],
        [
          '#forge:ingots/iron',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz',
          '#forge:dusts/quartz'
        ]
      ).id('kubejs:tfmg/mixing/aluminum_ingot_from_iron_and_quartz_dust')
  })()

  ;(() => {

      event.remove({ output: 'survival_instinct:gasoline_can' })
      event.shaped(
        Item.of('survival_instinct:gasoline_can', 1),
        [
          ' I ',
          'IBI',
          ' I '
        ],
        {
          I: 'create:iron_sheet',
          B: '#forge:buckets/gasoline'
        }
      ).id('kubejs:survival_instinct/gasoline_can_from_iron_sheets_and_gasoline')

      event.remove({ output: 'survival_instinct:cloth' })
      event.shaped(
        Item.of('survival_instinct:cloth', 1),
        [
          'WW',
          'WW'
        ],
        {
          W: '#minecraft:wool'
        }
      ).id('kubejs:survival_instinct/cloth_from_wool')

      const exoRecipeIds = [
        'survival_instinct:exo_boots',
        'survival_instinct:exo_chestplate',
        'survival_instinct:exo_helmet',
        'survival_instinct:exo_leggings',
        'survival_instinct:exo_heavy_boots_black',
        'survival_instinct:exo_heavy_boots_desert',
        'survival_instinct:exo_heavy_boots_green',
        'survival_instinct:exo_heavy_helmet_black',
        'survival_instinct:exo_heavy_helmet_desert',
        'survival_instinct:exo_heavy_helmet_green',
        'survival_instinct:exo_heavy_leggings_black',
        'survival_instinct:exo_heavy_leggings_desert',
        'survival_instinct:exo_heavy_leggings_green',
        'survival_instinct:exo_heavy_vest_black',
        'survival_instinct:exo_heavy_vest_desert',
        'survival_instinct:exo_heavy_vest_green'
      ]

      exoRecipeIds.forEach(recipeId => {
        event.remove({ id: recipeId })
      })

      const exoArmorOutputs = [
        'survival_instinct:exo_boots',
        'survival_instinct:exo_chestplate',
        'survival_instinct:exo_helmet',
        'survival_instinct:exo_leggings',
        'survival_instinct:exo_heavy_black_boots',
        'survival_instinct:exo_heavy_black_chestplate',
        'survival_instinct:exo_heavy_black_helmet',
        'survival_instinct:exo_heavy_black_leggings',
        'survival_instinct:exo_heavy_desert_boots',
        'survival_instinct:exo_heavy_desert_chestplate',
        'survival_instinct:exo_heavy_desert_helmet',
        'survival_instinct:exo_heavy_desert_leggings',
        'survival_instinct:exo_heavy_green_boots',
        'survival_instinct:exo_heavy_green_chestplate',
        'survival_instinct:exo_heavy_green_helmet',
        'survival_instinct:exo_heavy_green_leggings'
      ]

      exoArmorOutputs.forEach(output => {
        event.remove({ output: output })
      })

      event.replaceInput(
        { mod: 'survival_instinct' },
        'survival_instinct:steellium',
        '#forge:ingots/steel'
      )
  })()

  ;(() => {

      event.replaceInput(
        { id: 'survival_instinct:polyethylenesheet_recipe' },
        'survival_instinct:aluminium',
        '#forge:ingots/aluminum'
      )

      event.replaceInput(
        { id: 'survival_instinct:polyethylenesheet_recipe' },
        'survival_instinct:sulfur_dust',
        '#forge:dusts/sulfur'
      )
  })()

  ;(() => {

      const steelliumCrushingResults = [
        Item.of('minecraft:iron_ingot', 1),
        Item.of('minecraft:coal', 1)
      ]

      event.recipes.create.crushing(
        steelliumCrushingResults,
        'survival_instinct:steellium'
      ).id('kubejs:survival_instinct/crushing/steellium')

      event.recipes.create.crushing(
        steelliumCrushingResults,
        'survival_instinct:raw_steellium'
      ).id('kubejs:survival_instinct/crushing/raw_steellium')
  })()

  ;(() => {

      event.remove({ output: 'survival_instinct:steellium_pipe_mace' })

      event.shaped(
        Item.of('survival_instinct:steellium_pipe_mace', 1),
        [
          'RRR'
        ],
        {
          R: '#forge:rods/steel'
        }
      ).id('kubejs:survival_instinct/steellium_pipe_from_steel_rods')
  })()

  ;(() => {

      event.remove({ id: 'survival_instinct:kevlar_iii_recipe' })
      event.remove({ id: 'survival_instinct:kevlar_iii_leather_recipe' })
      event.remove({ id: 'survival_instinct:kevlar_iii_kevlar_recipe' })

      event.shapeless(Item.of('survival_instinct:tier_iii_kevlar', 2), [
        'survival_instinct:cloth',
        'minecraft:string',
        '#forge:ingots/aluminum',
        'minecraft:diamond'
      ]).id('kubejs:survival_instinct/kevlar_iii_cloth_from_tagged_aluminum')

      event.shapeless(Item.of('survival_instinct:tier_iii_kevlar', 2), [
        'minecraft:leather',
        'minecraft:string',
        '#forge:ingots/aluminum',
        'minecraft:diamond'
      ]).id('kubejs:survival_instinct/kevlar_iii_leather_from_tagged_aluminum')

      event.shapeless(Item.of('survival_instinct:tier_iii_kevlar', 2), [
        'survival_instinct:tier_ii_kevlar',
        '#forge:ingots/aluminum',
        'minecraft:diamond'
      ]).id('kubejs:survival_instinct/kevlar_iii_upgrade_from_tagged_aluminum')
  })()

})
