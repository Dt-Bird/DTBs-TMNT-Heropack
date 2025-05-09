extend("tmnt:leonardo_tmnt_1987");
loadTextures({
    "base": "tmnt:leonardo_tmnt_1987_trenchcoat_layer1",
    "head": "tmnt:leonardo_tmnt_1987_trenchcoat_layer2",
    "trenchcoat": "tmnt:leonardo_tmnt_1987_trenchcoat_layer3",
    "legs": "tmnt:leonardo_tmnt_1987_trenchcoat_layer4",
    "feet": "tmnt:leonardo_tmnt_1987_trenchcoat_layer5",
    "hat": "tmnt:1987_trench_hat"
});

var utils = implement("fiskheroes:external/utils");

var hat;

function init(renderer) {
	parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
	    if (renderLayer == "HELMET") {
			return "head";
        } else if (renderLayer == "CHESTPLATE") {
			return "trenchcoat";
        } else if (renderLayer == "LEGGINGS") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "trenchcoat" : "legs";
        } else if (renderLayer == "BOOTS") {
			return entity.getWornChestplate().suitType() == $SUIT_NAME ? "base" : "feet";
        }
        return "base";
		});

    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    var hat_model = renderer.createResource("MODEL", "tmnt:1987_trench_hat");
    hat = renderer.createEffect("fiskheroes:model").setModel(hat_model);
    hat.setModel(utils.createModel(renderer, "tmnt:1987_trench_hat", "hat"));
    hat.setOffset(0, -29, 0);
    hat.anchor.set("head");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    if (!isFirstPersonArm && renderLayer == "HELMET") {
        hat.render();
    }
}