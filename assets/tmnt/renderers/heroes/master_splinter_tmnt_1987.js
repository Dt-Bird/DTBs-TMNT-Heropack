extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:master_splinter_tmnt_1987_layer1",
    "layer2": "tmnt:master_splinter_tmnt_1987_layer2",
	"layer3": "tmnt:master_splinter_tmnt_1987_layer3",
	"tail": "tmnt:tail",
	"snout": "tmnt:splinter_snout"
});

var utils = implement("fiskheroes:external/utils");
var tail;
var snout;

function init(renderer) {
	parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
		if (renderLayer == "LEGGINGS") {
			return "layer2";
		} else if (renderLayer == "BOOTS") {
			return "layer3";
		}
		return "layer1";
    });
	
	renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");

    initAnimations(renderer);
}

function initEffects(renderer) {
	var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(0xFFD3A8);
    forcefield.setShape(36, 18).setOffset(0.0, 6.0, 0.0).setScale(1.25);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.15;
        return true;
    });
	var model = renderer.createResource("MODEL","tmnt:splinter_snout");
	snout = renderer.createEffect("fiskheroes:model").setModel(model);
	snout.setModel(utils.createModel(renderer, "tmnt:splinter_snout", "snout"));
	snout.setOffset(0.0, -24.0, 0.0);
	snout.setRotation(0.0, 0.0, 0.0);
	snout.anchor.set("head");
	var model = renderer.createResource("MODEL","tmnt:tail");
	tail = renderer.createEffect("fiskheroes:model").setModel(model);
	tail.setModel(utils.createModel(renderer, "tmnt:tail", "tail"));
	tail.setOffset(-0.5, 2.2, 11.5);
	tail.setRotation(0.0, 180.0, 0.0);
	tail.anchor.set("body");
}

function render(entity, renderLayer, isFirstPersonArm) {
	if (!isFirstPersonArm) {
		if (renderLayer == "HELMET") {
			snout.render();
		}
		if (renderLayer == "CHESTPLATE") {
			tail.render();
		}
	}
}