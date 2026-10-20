ServerEvents.recipes(event => {

  ;(() => {

      const steelPlate = '#forge:plates/steel'

      function addSteelBarrelAssembly(output, input, loops, id) {
        event.recipes.create.sequenced_assembly(
          output,
          input,
          [
            event.recipes.create.deploying(input, [
              input,
              steelPlate
            ]),
            event.recipes.create.pressing(input, input)
          ]
        ).transitionalItem(input)
          .loops(loops)
          .id(id)
      }

      if (!Item.exists('kubejs:short_iron_barrel') || !Item.exists('kubejs:medium_iron_barrel') || !Item.exists('kubejs:long_iron_barrel') || !Item.exists('kubejs:incomplete_medium_iron_barrel') || !Item.exists('kubejs:incomplete_long_iron_barrel')) {
        console.warn('[KubeJS] Iron barrel items are not registered yet. Restart Minecraft to load startup_scripts/tacz/barrels.js.')
      } else {
        event.shaped(
          Item.of('kubejs:short_iron_barrel', 1),
          [
            ' A ',
            'A A',
            ' A '
          ],
          {
            A: 'create:iron_sheet'
          }
        ).id('kubejs:short_iron_barrel')

        event.shaped(
          Item.of('kubejs:incomplete_medium_iron_barrel', 1),
          [
            ' A ',
            'ABA',
            ' A '
          ],
          {
            A: 'create:iron_sheet',
            B: 'kubejs:short_iron_barrel'
          }
        ).id('kubejs:incomplete_medium_iron_barrel')

        event.custom({
          type: 'create:pressing',
          ingredients: [
            {
              item: 'kubejs:incomplete_medium_iron_barrel'
            }
          ],
          results: [
            {
              item: 'kubejs:medium_iron_barrel',
              count: 1
            }
          ]
        }).id('kubejs:medium_iron_barrel_from_pressing')

        event.shaped(
          Item.of('kubejs:incomplete_long_iron_barrel', 1),
          [
            ' A ',
            'ABA',
            ' A '
          ],
          {
            A: 'create:iron_sheet',
            B: 'kubejs:medium_iron_barrel'
          }
        ).id('kubejs:incomplete_long_iron_barrel')

        event.custom({
          type: 'create:pressing',
          ingredients: [
            {
              item: 'kubejs:incomplete_long_iron_barrel'
            }
          ],
          results: [
            {
              item: 'kubejs:long_iron_barrel',
              count: 1
            }
          ]
        }).id('kubejs:long_iron_barrel_from_pressing')
      }

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:long_steel_barrel') || !Item.exists('kubejs:incomplete_short_steel_barrel') || !Item.exists('kubejs:incomplete_medium_steel_barrel') || !Item.exists('kubejs:incomplete_long_steel_barrel')) {
        console.warn('[KubeJS] Steel barrel items are not registered yet. Restart Minecraft to load startup_scripts/tacz/barrels.js.')
      } else {
        event.shaped(
          Item.of('kubejs:incomplete_short_steel_barrel', 1),
          [
            ' A ',
            'A A',
            ' A '
          ],
          {
            A: steelPlate
          }
        ).id('kubejs:incomplete_short_steel_barrel')

        addSteelBarrelAssembly(
          'kubejs:short_steel_barrel',
          'kubejs:incomplete_short_steel_barrel',
          1,
          'kubejs:create/sequenced_assembly/short_steel_barrel'
        )

        event.shaped(
          Item.of('kubejs:incomplete_medium_steel_barrel', 1),
          [
            ' A ',
            'ABA',
            ' A '
          ],
          {
            A: steelPlate,
            B: 'kubejs:short_steel_barrel'
          }
        ).id('kubejs:incomplete_medium_steel_barrel')

        addSteelBarrelAssembly(
          'kubejs:medium_steel_barrel',
          'kubejs:incomplete_medium_steel_barrel',
          2,
          'kubejs:create/sequenced_assembly/medium_steel_barrel'
        )

        event.shaped(
          Item.of('kubejs:incomplete_long_steel_barrel', 1),
          [
            ' A ',
            'ABA',
            ' A '
          ],
          {
            A: steelPlate,
            B: 'kubejs:medium_steel_barrel'
          }
        ).id('kubejs:incomplete_long_steel_barrel')

        addSteelBarrelAssembly(
          'kubejs:long_steel_barrel',
          'kubejs:incomplete_long_steel_barrel',
          3,
          'kubejs:create/sequenced_assembly/long_steel_barrel'
        )
      }
  })()

  ;(() => {

    	event.recipes.create.pressing('kubejs:l_iron_sheet','minecraft:iron_block')
    	event.recipes.create.pressing('kubejs:l_steel_sheet','#forge:storage_blocks/steel')

    	event.recipes.create.sequenced_assembly([
    		Item.of('kubejs:xl_iron_sheet')
    	], 'kubejs:l_iron_sheet', [

    		event.recipes.createDeploying('kubejs:incomplete_xl_iron_sheet', ['kubejs:incomplete_xl_iron_sheet', 'kubejs:l_iron_sheet']),
    		event.recipes.createPressing('kubejs:incomplete_xl_iron_sheet', 'kubejs:incomplete_xl_iron_sheet')
    	]).transitionalItem('kubejs:incomplete_xl_iron_sheet').loops(2)

    	event.recipes.create.sequenced_assembly([
    		Item.of('kubejs:xxl_iron_sheet')
    	], 'kubejs:xl_iron_sheet', [

    		event.recipes.createDeploying('kubejs:incomplete_xxl_iron_sheet', ['kubejs:incomplete_xxl_iron_sheet', 'kubejs:xl_iron_sheet']),
    		event.recipes.createPressing('kubejs:incomplete_xxl_iron_sheet', 'kubejs:incomplete_xxl_iron_sheet')
    	]).transitionalItem('kubejs:incomplete_xxl_iron_sheet').loops(2)

    	event.recipes.create.sequenced_assembly([
    		Item.of('kubejs:xl_steel_sheet')
    	], 'kubejs:l_steel_sheet', [

    		event.recipes.createDeploying('kubejs:incomplete_xl_steel_sheet', ['kubejs:incomplete_xl_steel_sheet', 'kubejs:l_steel_sheet']),
    		event.recipes.createPressing('kubejs:incomplete_xl_steel_sheet', 'kubejs:incomplete_xl_steel_sheet')
    	]).transitionalItem('kubejs:incomplete_xl_steel_sheet').loops(3)

    	event.recipes.create.sequenced_assembly([
    		Item.of('kubejs:xxl_steel_sheet')
    	], 'kubejs:xl_steel_sheet', [

    		event.recipes.createDeploying('kubejs:incomplete_xxl_steel_sheet', ['kubejs:incomplete_xxl_steel_sheet', 'kubejs:xl_steel_sheet']),
    		event.recipes.createPressing('kubejs:incomplete_xxl_steel_sheet', 'kubejs:incomplete_xxl_steel_sheet')
    	]).transitionalItem('kubejs:incomplete_xxl_steel_sheet').loops(3)

    	event.recipes.create.pressing('kubejs:small_receiver','kubejs:l_iron_sheet')
    	event.recipes.create.pressing('kubejs:medium_receiver','kubejs:xl_iron_sheet')
    	event.recipes.create.pressing('kubejs:large_receiver','kubejs:xxl_iron_sheet')

    	event.recipes.create.pressing('kubejs:strong_small_receiver','kubejs:l_steel_sheet')
    	event.recipes.create.pressing('kubejs:strong_medium_receiver','kubejs:xl_steel_sheet')
    	event.recipes.create.pressing('kubejs:strong_large_receiver','kubejs:xxl_steel_sheet')

  })()

  ;(() => {

      event.remove({ id: 'tacz:ammo/45acp' })

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              tag: 'forge:plates/copper'
            },
            count: 10
          },
          {
            item: {
              tag: 'forge:gunpowder'
            },
            count: 5
          },
          {
            item: {
              tag: 'forge:nuggets/iron'
            },
            count: 30
          }
        ],
        result: {
          type: 'ammo',
          id: 'tacz:45acp',
          count: 30
        }
      }).id('tacz:ammo/45acp')
  })()

  ;(() => {

      event.remove({ id: 'tacz:ammo/9mm' })

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              tag: 'forge:plates/copper'
            },
            count: 10
          },
          {
            item: {
              tag: 'forge:gunpowder'
            },
            count: 5
          },
          {
            item: {
              tag: 'forge:nuggets/iron'
            },
            count: 50
          }
        ],
        result: {
          type: 'ammo',
          id: 'tacz:9mm',
          count: 50
        }
      }).id('tacz:ammo/9mm')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/ak47' })

      if (!Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:strong_medium_receiver')) {
        console.warn('[KubeJS] Skipping AK-47 recipe until the medium steel barrel and strong medium receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }
      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:medium_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 7
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 10
          },
          {
            item: {
              item: 'kubejs:medium_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 5
          },
          {
            item: {
              item: 'minecraft:lapis_lazuli'
            },
            count: 2
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:ak47'
        }
      }).id('tacz:gun/ak47')
  })()

  ;(() => {

      function item(id, count) {
        return {
          item: {
            item: id
          },
          count: count
        }
      }

      function tag(id, count) {
        return {
          item: {
            tag: id
          },
          count: count
        }
      }

      function ammoRecipe(ammo, count, materials) {
        event.remove({ id: 'tacz:ammo/' + ammo })

        event.custom({
          type: 'tacz:gun_smith_table_crafting',
          materials: materials,
          result: {
            type: 'ammo',
            id: 'tacz:' + ammo,
            count: count
          }
        }).id('tacz:ammo/' + ammo)
      }

      ammoRecipe('45_70', 30, [
        tag('forge:plates/copper', 30),
        tag('forge:gunpowder', 8),
        item('minecraft:lapis_lazuli', 5),
        tag('forge:nuggets/iron', 30)
      ])

      ammoRecipe('50bmg', 30, [
        tag('forge:plates/steel', 30),
        item('crusty_chunks:volatile_dust', 10),
        item('minecraft:lapis_lazuli', 5),
        tag('forge:nuggets/lead', 30)
      ])

      ammoRecipe('40mm', 10, [
        tag('forge:plates/steel', 10),
        item('crusty_chunks:volatile_dust', 10),
        item('minecraft:lapis_lazuli', 5),
        tag('forge:ingots/brass', 10)
      ])

      ammoRecipe('12g', 25, [
        item('create:iron_sheet', 12),
        tag('forge:gunpowder', 10),
        tag('forge:nuggets/iron', 50)
      ])

      function defaultAmmoRecipe(ammo) {
        ammoRecipe(ammo, 40, [
          tag('forge:plates/brass', 20),
          tag('forge:gunpowder', 10),
          tag('forge:nuggets/iron', 40)
        ])
      }

      defaultAmmoRecipe('308')
      defaultAmmoRecipe('30_06')
      defaultAmmoRecipe('338')
      defaultAmmoRecipe('357mag')
      defaultAmmoRecipe('46x30')
      defaultAmmoRecipe('50ae')
      defaultAmmoRecipe('545x39')
      defaultAmmoRecipe('556x45')
      defaultAmmoRecipe('57x28')
      defaultAmmoRecipe('58x42')
      defaultAmmoRecipe('68x51fury')
      defaultAmmoRecipe('762x25')
      defaultAmmoRecipe('762x39')
      defaultAmmoRecipe('762x54')
  })()

  ;(() => {

      event.remove({ output: Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}') })
      event.remove({ id: 'tacz:attachment_workbench' })

      event.shaped(
        Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}'),
        [
          'AAA',
          'ABA',
          'CDC'
        ],
        {
          A: '#forge:glass_panes',
          B: 'minecraft:redstone_torch',
          C: '#forge:plates/copper',
          D: 'minecraft:iron_block'
        }
      )
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/b93r' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping B93R recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 5
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:b93r'
        }
      }).id('tacz:gun/b93r')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/cz75' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping CZ75 recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:cz75'
        }
      }).id('tacz:gun/cz75')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/db_long' })

      if (!Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:strong_medium_receiver')) {
        console.warn('[KubeJS] Skipping DB Long recipe until the medium steel barrel and strong medium receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:medium_iron_barrel'
            },
            count: 2
          },
          {
            item: {
              item: 'kubejs:medium_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 1
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 6
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:db_long'
        }
      }).id('tacz:gun/db_long')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/db_short' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping DB Short recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 2
          },
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 1
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 6
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:db_short'
        }
      }).id('tacz:gun/db_short')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/glock_17' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping Glock 17 recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:glock_17'
        }
      }).id('tacz:gun/glock_17')
  })()

  ;(() => {

      event.remove({ output: 'tacz:gun_smith_table' })
      event.remove({ id: 'tacz:gun_smith_table' })

      event.shaped(
        Item.of('tacz:gun_smith_table', 1),
        [
          'AAA',
          'BCB',
          'BDB'
        ],
        {
          A: 'create:andesite_casing',
          B: '#forge:rods/copper',
          C: 'minecraft:iron_block',
          D: 'forge:rods/copper'
        }
      )
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/hk_mp5a5' })

      if (!Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:strong_medium_receiver')) {
        console.warn('[KubeJS] Skipping HK MP5A5 recipe until the medium steel barrel and strong medium receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:medium_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              tag: 'forge:ingots/iron'
            },
            count: 15
          },
          {
            item: {
              item: 'kubejs:medium_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 7
          },
          {
            item: {
              item: 'minecraft:lapis_lazuli'
            },
            count: 2
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:hk_mp5a5'
        }
      }).id('tacz:gun/hk_mp5a5')
  })()

  ;(() => {

  })()

  ;(() => {

  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/m1911' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping M1911 recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:m1911'
        }
      }).id('tacz:gun/m1911')
  })()

  ;(() => {

  })()

  ;(() => {

  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/m870' })

      if (!Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:strong_medium_receiver')) {
        console.warn('[KubeJS] Skipping M870 recipe until the medium steel barrel and strong medium receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:medium_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              item: 'kubejs:medium_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 6
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 6
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:m870'
        }
      }).id('tacz:gun/m870')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/p320' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping P320 recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'create:golden_sheet'
            },
            count: 4
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 5
          },
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:lapis_lazuli'
            },
            count: 2
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:p320'
        }
      }).id('tacz:gun/p320')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/rpg7' })
  })()

  ;(() => {

  })()

  ;(() => {

  })()

  ;(() => {

      const opticalLens = 'createpropulsion:optical_lens'
      const focusedLens = 'createpropulsion:focus_lens'

      function item(id, count) {
        return {
          item: {
            item: id
          },
          count: count
        }
      }

      function tag(id, count) {
        return {
          item: {
            tag: id
          },
          count: count
        }
      }

      function scopeRecipe(scope, lens, materials) {
        event.remove({ id: 'tacz:attachments/' + scope })
        materials.push(item(lens, 1))

        event.custom({
          type: 'tacz:gun_smith_table_crafting',
          materials: materials,
          result: {
            type: 'attachment',
            id: 'tacz:' + scope
          }
        }).id('tacz:attachments/' + scope)
      }

      scopeRecipe('scope_1873_6x', opticalLens, [
        tag('forge:ingots/copper', 10),
        tag('forge:rods/iron', 1)
      ])

      scopeRecipe('scope_acog_ta31', opticalLens, [
        tag('forge:ingots/iron', 10),
        tag('forge:dusts/redstone', 8)
      ])

      scopeRecipe('scope_contender', opticalLens, [
        tag('forge:ingots/iron', 10)
      ])

      scopeRecipe('scope_elcan_4x', opticalLens, [
        tag('forge:ingots/iron', 16),
        tag('forge:dusts/redstone', 10)
      ])

      scopeRecipe('scope_hamr', opticalLens, [
        tag('forge:ingots/iron', 18),
        tag('forge:dusts/redstone', 10)
      ])

      scopeRecipe('scope_lpvo_1_6', opticalLens, [
        tag('forge:ingots/iron', 14),
        tag('forge:dusts/glowstone', 8),
        tag('forge:dusts/redstone', 6)
      ])

      scopeRecipe('scope_qmk152', opticalLens, [
        tag('forge:ingots/iron', 12),
        tag('forge:dusts/redstone', 10)
      ])

      scopeRecipe('scope_retro_2x', opticalLens, [
        tag('forge:ingots/iron', 8)
      ])

      scopeRecipe('scope_vudu', opticalLens, [
        tag('forge:ingots/iron', 14),
        tag('forge:dusts/glowstone', 8),
        tag('forge:dusts/redstone', 6)
      ])

      scopeRecipe('scope_mk5hd', focusedLens, [
        tag('forge:ingots/iron', 24),
        tag('forge:dusts/glowstone', 8),
        tag('forge:dusts/redstone', 8)
      ])

      scopeRecipe('scope_standard_8x', focusedLens, [
        tag('forge:ingots/iron', 18),
        tag('forge:dusts/glowstone', 8),
        tag('forge:dusts/redstone', 8)
      ])
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/springfield1873' })

      if (!Item.exists('kubejs:long_steel_barrel') || !Item.exists('kubejs:strong_large_receiver')) {
        console.warn('[KubeJS] Skipping Springfield 1873 recipe until the long steel barrel and strong large receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:long_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              item: 'kubejs:large_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:flint_and_steel'
            },
            count: 1
          },
          {
            item: {
              tag: 'forge:ingots/iron'
            },
            count: 2
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 10
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:springfield1873'
        }
      }).id('tacz:gun/springfield1873')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/type_81' })

      if (!Item.exists('kubejs:medium_steel_barrel') || !Item.exists('kubejs:strong_medium_receiver')) {
        console.warn('[KubeJS] Skipping Type 81 recipe until the medium steel barrel and strong medium receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:medium_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              item: 'kubejs:medium_receiver'
            },
            count: 1
          },
          {
            item: {
              tag: 'minecraft:logs'
            },
            count: 7
          },
          {
            item: {
              item: 'create:copper_sheet'
            },
            count: 3
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 5
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:type_81'
        }
      }).id('tacz:gun/type_81')
  })()

  ;(() => {

      event.remove({ id: 'tacz:gun/uzi' })

      if (!Item.exists('kubejs:short_steel_barrel') || !Item.exists('kubejs:strong_small_receiver')) {
        console.warn('[KubeJS] Skipping UZI recipe until the short steel barrel and strong small receiver items are registered. Restart Minecraft to load startup_scripts/tacz.')
        return
      }

      event.custom({
        type: 'tacz:gun_smith_table_crafting',
        materials: [
          {
            item: {
              item: 'kubejs:short_iron_barrel'
            },
            count: 1
          },
          {
            item: {
              item: 'minecraft:iron_ingot'
            },
            count: 10
          },
          {
            item: {
              item: 'kubejs:small_receiver'
            },
            count: 1
          },
          {
            item: {
              item: 'create:iron_sheet'
            },
            count: 5
          }
        ],
        result: {
          type: 'gun',
          id: 'tacz:uzi'
        }
      }).id('tacz:gun/uzi')
  })()

  ;(() => {

      event.remove({ id: 'tacz:ammo/rpg_rocket' })
  })()

  ;(() => {

      function tag(id, count) {
        const material = {
          item: {
            tag: id
          }
        }

        if (count != null) {
          material.count = count
        }

        return material
      }

      function item(id, count) {
        const material = {
          item: {
            item: id
          }
        }

        if (count != null) {
          material.count = count
        }

        return material
      }

      const sizedGunParts = {
        small: {
          barrel: 'kubejs:short_steel_barrel',
          receiver: 'kubejs:strong_small_receiver'
        },
        medium: {
          barrel: 'kubejs:medium_steel_barrel',
          receiver: 'kubejs:strong_medium_receiver'
        },
        large: {
          barrel: 'kubejs:long_steel_barrel',
          receiver: 'kubejs:strong_large_receiver'
        }
      }

      const requiredGunParts = []
      Object.keys(sizedGunParts).forEach(size => {
        requiredGunParts.push(sizedGunParts[size].barrel)
        requiredGunParts.push(sizedGunParts[size].receiver)
      })

      const missingGunParts = requiredGunParts.filter(part => !Item.exists(part))
      if (missingGunParts.length > 0) {
        console.warn('Skipping default TaCZ steel gun input tweaks because these KubeJS gun parts are missing: ' + missingGunParts.join(', '))
        return
      }

      function parts(size) {
        const config = sizedGunParts[size]
        return [
          item(config.barrel),
          item(config.receiver)
        ]
      }

      function steel(count) {
        return tag('forge:ingots/steel', count)
      }

      function gun(id, size, materials, extras) {
        const result = {
          type: 'gun',
          id: 'tacz:' + id
        }

        if (extras) {
          Object.keys(extras).forEach(key => {
            result[key] = extras[key]
          })
        }

        event.remove({ id: 'tacz:gun/' + id })
        event.custom({
          type: 'tacz:gun_smith_table_crafting',
          materials: parts(size).concat(materials),
          result: result
        }).id('tacz:gun/' + id)
      }

      gun('aa12', 'large', [
        tag('forge:ingots/gold', 16),
        steel(80),
        tag('forge:gems/diamond', 2),
        tag('forge:rods/blaze', 4)
      ])

      gun('ai_awp', 'large', [
        tag('forge:gems/diamond', 10),
        tag('forge:ingots/gold', 50),
        steel(200),
        tag('forge:rods/blaze', 5)
      ], {
        attachments: {
          scope: 'tacz:scope_contender'
        }
      })

      gun('aug', 'medium', [
        steel(39),
        tag('forge:gems/lapis', 8),
        tag('minecraft:logs', 6),
        tag('forge:gems/amethyst', 1)
      ])

      gun('deagle', 'small', [
        tag('forge:gems/diamond', 2),
        tag('forge:ingots/gold', 6),
        steel(42),
        tag('forge:rods/blaze')
      ])

      gun('deagle_golden', 'small', [
        tag('forge:gems/diamond', 1),
        tag('forge:ingots/gold', 32),
        steel(16),
        tag('forge:rods/blaze')
      ])

      gun('fn_evolys', 'large', [
        tag('forge:gems/diamond', 6),
        tag('forge:ingots/gold', 30),
        steel(145),
        tag('forge:rods/blaze', 5)
      ])

      gun('fn_fal', 'large', [
        steel(64),
        tag('forge:gems/lapis', 20),
        tag('minecraft:logs', 30),
        tag('forge:ingots/gold', 10)
      ])

      gun('g36k', 'medium', [
        tag('forge:ingots/gold', 16),
        steel(64),
        tag('forge:gems/quartz', 8)
      ])

      gun('hk416d', 'medium', [
        tag('forge:ingots/gold', 16),
        steel(64),
        tag('forge:gems/quartz', 8)
      ], {
        attachments: {
          stock: 'tacz:stock_hk_slim_line'
        }
      })

      gun('hk_g3', 'large', [
        tag('forge:ingots/gold', 9),
        steel(72),
        tag('forge:gems/quartz', 5)
      ])

      gun('m1014', 'medium', [
        steel(64),
        tag('forge:ingots/gold', 12),
        tag('forge:gems/diamond', 1),
        tag('forge:gems/lapis', 8)
      ])

      gun('m107', 'large', [
        tag('forge:gems/diamond', 18),
        tag('forge:ingots/gold', 64),
        tag('forge:ingots/netherite', 3),
        steel(320),
        tag('forge:rods/blaze', 5)
      ], {
        attachments: {
          scope: 'tacz:scope_contender'
        }
      })

      gun('m16a1', 'medium', [
        steel(32),
        tag('forge:gems/lapis', 6),
        tag('minecraft:logs', 6)
      ])

      gun('m16a4', 'medium', [
        steel(36),
        tag('forge:gems/lapis', 8),
        tag('minecraft:logs', 6)
      ])

      gun('m249', 'large', [
        tag('forge:gems/diamond', 4),
        tag('forge:ingots/gold', 16),
        steel(110),
        tag('forge:rods/blaze', 2)
      ])

      gun('m320', 'medium', [
        tag('forge:ingots/gold', 15),
        steel(50),
        tag('forge:gems/lapis', 6)
      ])

      gun('m4a1', 'medium', [
        steel(38),
        tag('forge:gems/lapis', 6),
        tag('minecraft:logs', 8)
      ], {
        attachments: {
          stock: 'tacz:stock_m4ss'
        }
      })

      gun('m700', 'large', [
        tag('forge:gems/diamond', 1),
        tag('forge:ingots/gold', 4),
        steel(45)
      ], {
        attachments: {
          scope: 'tacz:scope_contender'
        }
      })

      gun('m95', 'large', [
        tag('forge:gems/diamond', 15),
        tag('forge:ingots/gold', 60),
        tag('forge:ingots/netherite', 3),
        steel(300),
        tag('forge:rods/blaze', 5)
      ], {
        attachments: {
          scope: 'tacz:scope_contender'
        }
      })

      gun('minigun', 'large', [
        tag('forge:gems/diamond', 40),
        tag('forge:ingots/gold', 80),
        tag('forge:ingots/netherite', 10),
        steel(320),
        tag('forge:rods/blaze', 10)
      ])

      gun('mk14', 'large', [
        tag('forge:ingots/gold', 20),
        steel(84),
        tag('forge:gems/diamond', 4),
        tag('forge:rods/blaze', 2)
      ])

      gun('p90', 'medium', [
        tag('forge:ingots/gold', 8),
        steel(72),
        tag('forge:gems/quartz', 3),
        tag('forge:gems/diamond', 2)
      ])

      gun('qbz_191', 'medium', [
        steel(64),
        tag('forge:ingots/gold', 8),
        tag('forge:gems/lapis', 16),
        tag('forge:gems/quartz', 8)
      ])

      gun('qbz_95', 'medium', [
        steel(40),
        tag('forge:ingots/gold', 3),
        tag('forge:gems/lapis', 8),
        tag('minecraft:logs', 6)
      ])

      gun('rpk', 'large', [
        steel(56),
        tag('forge:ingots/gold', 8),
        tag('forge:gems/quartz', 8),
        tag('minecraft:logs', 12)
      ], {
        attachments: {
          stock: 'tacz:oem_stock_heavy'
        }
      })

      gun('scar_h', 'large', [
        tag('forge:ingots/gold', 16),
        steel(96),
        tag('forge:gems/diamond', 2),
        tag('forge:rods/blaze', 4)
      ])

      gun('scar_l', 'medium', [
        tag('forge:ingots/gold', 6),
        steel(48),
        tag('forge:gems/quartz', 3)
      ])

      gun('sks_tactical', 'medium', [
        steel(40),
        tag('forge:gems/lapis', 8),
        tag('minecraft:logs', 12)
      ], {
        attachments: {
          stock: 'tacz:stock_m4ss'
        }
      })

      gun('spas_12', 'large', [
        steel(110),
        tag('forge:ingots/gold', 20),
        tag('forge:gems/diamond', 2),
        tag('forge:gems/lapis', 5)
      ])

      gun('spr15hb', 'large', [
        tag('forge:ingots/gold', 8),
        steel(72),
        tag('forge:gems/diamond', 2),
        tag('forge:rods/blaze', 5)
      ])

      gun('timeless50', 'small', [
        tag('forge:gems/diamond', 1),
        tag('forge:ingots/gold', 6),
        steel(48)
      ])

      gun('ump45', 'medium', [
        tag('forge:ingots/gold', 5),
        steel(62),
        tag('forge:gems/quartz', 3)
      ])

      gun('vector45', 'medium', [
        steel(60),
        tag('forge:gems/lapis', 8),
        tag('forge:ingots/gold', 12),
        tag('forge:gems/diamond', 10)
      ])
  })()

})
