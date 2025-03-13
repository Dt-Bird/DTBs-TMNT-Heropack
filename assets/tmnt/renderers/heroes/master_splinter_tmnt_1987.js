extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:master_splinter_tmnt_1987_layer1",
    "layer2": "tmnt:master_splinter_tmnt_1987_layer2",
	"tail": "tmnt:tail"
});

var utils = implement("fiskheroes:external/utils");
var tail;

function init(renderer) {
	parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => renderLayer == "LEGGINGS" ? "layer2" : "layer1");

    renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");
}

function initEffects(renderer) {
	var model = renderer.createResource("MODEL","tmnt:tail");
	tail = renderer.createEffect("fiskheroes:model").setModel(model);
	tail.setModel(utils.createModel(renderer, "tmnt:tail", "tail"));
	tail.setOffset(-0.5, 2.2, 11.5);
	tail.setRotation(0.0, 180.0, 0.0);
	tail.anchor.set("body");
}

function render(entity, renderLayer, isFirstPersonArm) {
	if (!isFirstPersonArm) {
		if (renderLayer == "CHESTPLATE") {
			tail.render();
		}
	}
}
