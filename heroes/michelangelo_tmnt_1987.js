extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:michelangelo_tmnt_1987_layer1",
    "layer2": "tmnt:michelangelo_tmnt_1987_layer2"
});

function init(renderer) {
    renderer.setTexture((entity, renderLayer) => renderLayer == "LEGGINGS" ? "layer2" : "layer1");

    renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");

    initEffects(renderer);
    initAnimations(renderer);
}