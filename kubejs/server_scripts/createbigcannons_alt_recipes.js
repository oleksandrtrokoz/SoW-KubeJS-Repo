ServerEvents.recipes(event => {
  const boredComponent = "crusty_chunks:bored_component";
  const cogwheel = "create:cogwheel";
  const shaft = "create:shaft";
  const recoilSpring = "createbigcannons:recoil_spring";
  const springWire = "createbigcannons:spring_wire";
  const idRoot = "kubejs:createbigcannons/sequenced_assembly/";
  const layerSizes = ["very_small", "small", "medium", "large", "very_large"];

  const metals = {
    bronze: {
      block: "#createbigcannons:block_bronze",
      ingot: "#createbigcannons:ingot_bronze",
      breechblock: "createbigcannons:bronze_sliding_breechblock",
      extractor: "createbigcannons:bronze_autocannon_breech_extractor"
    },
    cast_iron: {
      block: "#createbigcannons:block_cast_iron",
      ingot: "#createbigcannons:ingot_cast_iron",
      breechblock: "createbigcannons:cast_iron_sliding_breechblock",
      extractor: "createbigcannons:cast_iron_autocannon_breech_extractor"
    },
    steel: {
      block: "#createbigcannons:block_steel",
      ingot: "#createbigcannons:ingot_steel",
      breechblock: "createbigcannons:steel_sliding_breechblock",
      extractor: "createbigcannons:steel_autocannon_breech_extractor",
      screwLock: "createbigcannons:steel_screw_lock"
    },
    nethersteel: {
      block: "#createbigcannons:block_nethersteel",
      ingot: "#createbigcannons:ingot_nethersteel",
      screwLock: "createbigcannons:nethersteel_screw_lock"
    }
  };

  function deploy(transitional, ingredient) {
    return event.recipes.create.deploying(transitional, [
      transitional,
      ingredient
    ]);
  }

  function press(transitional) {
    return event.recipes.create.pressing(transitional, transitional);
  }

  function cut(transitional) {
    return event.recipes.create.cutting(transitional, transitional);
  }

  function itemName(id) {
    return id.split(":")[1];
  }

  function layerId(material, size) {
    return "createbigcannons:" + size + "_" + material + "_cannon_layer";
  }

  function unboredLayerId(material, size) {
    return "createbigcannons:unbored_" + size + "_" + material + "_cannon_layer";
  }

  function addSequencedAssembly(result, input, additions, finishers, loops, path) {
    const steps = additions.map(ingredient => deploy(result, ingredient));

    finishers.forEach(finisher => {
      steps.push(finisher === "cut" ? cut(result) : press(result));
    });

    event.recipes.create.sequenced_assembly(
      result,
      input,
      steps
    ).transitionalItem(result)
      .loops(loops)
      .id(idRoot + path);
  }

  const castingAlternatives = [
    {
      output: "createbigcannons:bronze_cannon_end",
      input: metals.bronze.ingot,
      additions: [metals.bronze.ingot],
      finishers: ["press"],
      loops: 1
    },
    {
      output: "createbigcannons:cast_iron_cannon_end",
      input: metals.cast_iron.ingot,
      additions: [metals.cast_iron.ingot],
      finishers: ["press"],
      loops: 1
    }
  ];

  ["bronze", "cast_iron"].forEach(material => {
    const metal = metals[material];

    castingAlternatives.push(
      {
        output: "createbigcannons:unbored_" + material + "_autocannon_barrel",
        input: metal.ingot,
        additions: [metal.ingot],
        finishers: ["cut"],
        loops: 1
      },
      {
        output: "createbigcannons:unbored_" + material + "_autocannon_breech",
        input: cogwheel,
        additions: [metal.ingot, metal.ingot],
        finishers: ["press"],
        loops: 1
      },
      {
        output: "createbigcannons:unbored_" + material + "_autocannon_recoil_spring",
        input: springWire,
        additions: [metal.ingot],
        finishers: ["press"],
        loops: 2
      },
      {
        output: "createbigcannons:unbored_" + material + "_sliding_breech",
        input: shaft,
        additions: [metal.block, metal.block],
        finishers: ["press"],
        loops: 1
      },
      {
        output: "createbigcannons:unbored_" + material + "_cannon_barrel",
        input: "createbigcannons:unbored_" + material + "_autocannon_barrel",
        additions: [metal.block],
        finishers: ["press"],
        loops: 1
      },
      {
        output: "createbigcannons:unbored_" + material + "_cannon_chamber",
        input: "createbigcannons:unbored_" + material + "_cannon_barrel",
        additions: [metal.block],
        finishers: ["press"],
        loops: 1
      }
    );
  });

  castingAlternatives.push(
    {
      output: "createbigcannons:unbored_steel_autocannon_barrel",
      input: metals.steel.ingot,
      additions: [metals.steel.ingot],
      finishers: ["cut"],
      loops: 1
    },
    {
      output: "createbigcannons:unbored_steel_autocannon_breech",
      input: cogwheel,
      additions: [metals.steel.ingot, metals.steel.ingot],
      finishers: ["press"],
      loops: 1
    },
    {
      output: "createbigcannons:unbored_steel_autocannon_recoil_spring",
      input: springWire,
      additions: [metals.steel.ingot],
      finishers: ["press"],
      loops: 2
    },
    {
      output: "createbigcannons:unbored_steel_sliding_breech",
      input: "createbigcannons:unbored_steel_autocannon_breech",
      additions: [shaft, metals.steel.block],
      finishers: ["press"],
      loops: 1
    },
    {
      output: "createbigcannons:unbored_steel_screw_breech",
      input: "createbigcannons:unbored_steel_sliding_breech",
      additions: [metals.steel.block],
      finishers: ["cut", "press"],
      loops: 1
    },
    {
      output: unboredLayerId("steel", "very_small"),
      input: "createbigcannons:unbored_steel_autocannon_barrel",
      additions: [metals.steel.block],
      finishers: ["press"],
      loops: 1
    },
    {
      output: "createbigcannons:unbored_nethersteel_screw_breech",
      input: "createbigcannons:unbored_steel_screw_breech",
      additions: [metals.nethersteel.block, metals.nethersteel.block],
      finishers: ["cut", "press"],
      loops: 1
    },
    {
      output: unboredLayerId("nethersteel", "very_small"),
      input: layerId("steel", "very_small"),
      additions: [metals.nethersteel.block],
      finishers: ["press"],
      loops: 1
    }
  );

  layerSizes.slice(1).forEach(size => {
    const previousIndex = layerSizes.indexOf(size) - 1;
    const previousSize = layerSizes[previousIndex];

    castingAlternatives.push(
      {
        output: unboredLayerId("steel", size),
        input: layerId("steel", previousSize),
        additions: [metals.steel.block],
        finishers: ["press"],
        loops: 1
      },
      {
        output: unboredLayerId("nethersteel", size),
        input: layerId("nethersteel", previousSize),
        additions: [metals.nethersteel.block],
        finishers: ["press"],
        loops: 1
      }
    );
  });

  castingAlternatives.forEach(recipe => {
    addSequencedAssembly(
      recipe.output,
      recipe.input,
      recipe.additions,
      recipe.finishers,
      recipe.loops,
      "casting/" + itemName(recipe.output)
    );
  });

  const boringAlternatives = [];

  ["bronze", "cast_iron"].forEach(material => {
    boringAlternatives.push(
      {
        output: "createbigcannons:" + material + "_autocannon_barrel",
        input: "createbigcannons:unbored_" + material + "_autocannon_barrel"
      },
      {
        output: "createbigcannons:" + material + "_cannon_barrel",
        input: "createbigcannons:unbored_" + material + "_cannon_barrel"
      },
      {
        output: "createbigcannons:" + material + "_cannon_chamber",
        input: "createbigcannons:unbored_" + material + "_cannon_chamber"
      },
      {
        output: "createbigcannons:incomplete_" + material + "_autocannon_breech",
        input: "createbigcannons:unbored_" + material + "_autocannon_breech"
      },
      {
        output: "createbigcannons:incomplete_" + material + "_autocannon_recoil_spring",
        input: "createbigcannons:unbored_" + material + "_autocannon_recoil_spring"
      },
      {
        output: "createbigcannons:incomplete_" + material + "_sliding_breech",
        input: "createbigcannons:unbored_" + material + "_sliding_breech"
      }
    );
  });

  layerSizes.forEach(size => {
    boringAlternatives.push(
      {
        output: layerId("steel", size),
        input: unboredLayerId("steel", size)
      },
      {
        output: layerId("nethersteel", size),
        input: unboredLayerId("nethersteel", size)
      }
    );
  });

  boringAlternatives.push(
    {
      output: "createbigcannons:steel_autocannon_barrel",
      input: "createbigcannons:unbored_steel_autocannon_barrel"
    },
    {
      output: "createbigcannons:incomplete_steel_autocannon_breech",
      input: "createbigcannons:unbored_steel_autocannon_breech"
    },
    {
      output: "createbigcannons:incomplete_steel_autocannon_recoil_spring",
      input: "createbigcannons:unbored_steel_autocannon_recoil_spring"
    },
    {
      output: "createbigcannons:incomplete_steel_sliding_breech",
      input: "createbigcannons:unbored_steel_sliding_breech"
    },
    {
      output: "createbigcannons:incomplete_steel_screw_breech",
      input: "createbigcannons:unbored_steel_screw_breech"
    },
    {
      output: "createbigcannons:incomplete_nethersteel_screw_breech",
      input: "createbigcannons:unbored_nethersteel_screw_breech"
    }
  );

  boringAlternatives.forEach(recipe => {
    addSequencedAssembly(
      recipe.output,
      recipe.input,
      [boredComponent],
      ["cut", "press"],
      1,
      "boring/" + itemName(recipe.output)
    );
  });

  const buildingAlternatives = [];

  ["bronze", "cast_iron", "steel"].forEach(material => {
    const metal = metals[material];

    buildingAlternatives.push(
      {
        output: "createbigcannons:" + material + "_autocannon_breech",
        input: "createbigcannons:incomplete_" + material + "_autocannon_breech",
        ingredient: metal.extractor
      },
      {
        output: "createbigcannons:" + material + "_autocannon_recoil_spring",
        input: "createbigcannons:incomplete_" + material + "_autocannon_recoil_spring",
        ingredient: recoilSpring
      },
      {
        output: "createbigcannons:" + material + "_sliding_breech",
        input: "createbigcannons:incomplete_" + material + "_sliding_breech",
        ingredient: metal.breechblock
      }
    );
  });

  ["steel", "nethersteel"].forEach(material => {
    buildingAlternatives.push({
      output: "createbigcannons:" + material + "_screw_breech",
      input: "createbigcannons:incomplete_" + material + "_screw_breech",
      ingredient: metals[material].screwLock
    });
  });

  buildingAlternatives.forEach(recipe => {
    addSequencedAssembly(
      recipe.output,
      recipe.input,
      [recipe.ingredient],
      ["press"],
      1,
      "building/" + itemName(recipe.output)
    );
  });

  const builtUpAlternatives = [];

  ["steel", "nethersteel"].forEach(material => {
    builtUpAlternatives.push(
      {
        output: "createbigcannons:" + material + "_cannon_barrel",
        input: layerId(material, "very_small"),
        additions: []
      },
      {
        output: "createbigcannons:built_up_" + material + "_cannon_barrel",
        input: layerId(material, "very_small"),
        additions: [layerId(material, "small")]
      },
      {
        output: "createbigcannons:" + material + "_cannon_chamber",
        input: layerId(material, "very_small"),
        additions: [
          layerId(material, "small"),
          layerId(material, "medium")
        ]
      },
      {
        output: "createbigcannons:built_up_" + material + "_cannon_chamber",
        input: layerId(material, "very_small"),
        additions: [
          layerId(material, "small"),
          layerId(material, "medium"),
          layerId(material, "large")
        ]
      },
      {
        output: "createbigcannons:thick_" + material + "_cannon_chamber",
        input: layerId(material, "very_small"),
        additions: [
          layerId(material, "small"),
          layerId(material, "medium"),
          layerId(material, "large"),
          layerId(material, "very_large")
        ]
      }
    );
  });

  builtUpAlternatives.forEach(recipe => {
    addSequencedAssembly(
      recipe.output,
      recipe.input,
      recipe.additions,
      ["press"],
      1,
      "built_up/" + itemName(recipe.output)
    );
  });
});
