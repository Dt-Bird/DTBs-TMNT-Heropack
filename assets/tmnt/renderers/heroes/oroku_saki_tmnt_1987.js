extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:oroku_saki_tmnt_1987_layer1",
    "layer2": "tmnt:oroku_saki_tmnt_1987_layer2",
    "layer3": "tmnt:oroku_saki_tmnt_1987_layer3",
    "layer4": "tmnt:oroku_saki_tmnt_1987_layer4"
});

var utils = implement("fiskheroes:external/utils");

function init(renderer) {
	parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
		if (renderLayer == "LEGGINGS") {
			return "layer2";
		} else if (renderLayer == "BOOTS") {
			return entity.getWornLeggings().suitType() == $SUIT_NAME ? "layer4" : "layer3";
		}
		return "layer1";
    });
	
	renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");

    initEffects(renderer);
    initAnimations(renderer);
}