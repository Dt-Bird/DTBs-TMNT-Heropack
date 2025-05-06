extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:casey_jones_tmnt_1987_layer1",
    "layer2": "tmnt:casey_jones_tmnt_1987_layer2",
    "hockeybag": "tmnt:casey_jones_hockey_bag_tmnt_1987"
});

var utils = implement("fiskheroes:external/utils");

var hockeybag;

function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => renderLayer == "LEGGINGS" ? "layer2" : "layer1");

    renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");

    initAnimations(renderer);
}

function initEffects(renderer) {
    hockeybag = renderer.createEffect("fiskheroes:model");
    hockeybag.setModel(utils.createModel(renderer, "tmnt:casey_jones_hockey_bag_tmnt_1987", "hockeybag"));
    hockeybag.setOffset(0.0, -14.0, 0.3);
    hockeybag.anchor.set("body");

    //Baseball Bat
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-6.0, -1.5, 4.25], "rotation": [315.0, 270.0, 180.0] },
    ]).slotIndex = 2;
    //Hockey Stick
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [0.5, 8.0, 5.85], "rotation": [320.0, 270.0, 0.0] },
    ]).slotIndex = 0;
    //Sledgehammer
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-1.0, 6.0, 4.5], "rotation": [340.0, 270.0, 0.0] },
    ]).slotIndex = 3;
    //Golf Club
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-0.25, 8.0, 6.25], "rotation": [335.0, 270.0, 0.0] },
    ]).slotIndex = 1;
}


function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        hockeybag.render();
    }
}