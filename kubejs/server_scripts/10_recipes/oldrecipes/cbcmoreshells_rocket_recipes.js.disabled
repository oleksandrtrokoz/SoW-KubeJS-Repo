ServerEvents.recipes(event => {
  event.remove({ output: "cbcmoreshells:he_rocket" });
  event.remove({ output: "cbcmoreshells:aphe_rocket" });

  event.shapeless(
    "cbcmoreshells:he_rocket",
    [
      "cbcmodernwarfare:apfsds_mediumcannon_round",
      "crusty_chunks:propellent",
      "cbcmodernwarfare:he_autocannon_round"
    ]
  ).id("kubejs:cbcmoreshells/he_rocket");

  event.shapeless(
    "cbcmoreshells:aphe_rocket",
    [
      "cbcmodernwarfare:apfsds_mediumcannon_round",
      "crusty_chunks:propellent",
      "createbigcannons:ap_autocannon_round"
    ]
  ).id("kubejs:cbcmoreshells/aphe_rocket");
});
