extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:bebop_tmnt_1987_layer1",
    "layer2": "tmnt:bebop_tmnt_1987_layer2",
    "head": "tmnt:bebop_head",
    "grenade": "tmnt:body_grenade"
});

var utils = implement("fiskheroes:external/utils");
var head;
var grenade;

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
    var head_model = renderer.createResource("MODEL", "tmnt:bebop_head");
    head = renderer.createEffect("fiskheroes:model").setModel(head_model);
    head.setModel(utils.createModel(renderer, "tmnt:bebop_head", "head"));
	head.setOffset(0.0, -24.0, 0.0);
	head.setRotation(0.0, 0.0, 0.0);
	head.anchor.set("head");

    var grenade_model = renderer.createResource("MODEL", "tmnt:body_grenade");
    grenade = renderer.createEffect("fiskheroes:model").setModel(grenade_model);
    grenade.setModel(utils.createModel(renderer, "tmnt:body_grenade", "grenade"));
	grenade.setOffset(0.65, -12.5, -0.5);
	grenade.setRotation(0.0, 0.0, 0.0);
	grenade.anchor.set("body");
}

function render(entity, renderLayer, isFirstPersonArm) {
	if (!isFirstPersonArm) {
		if (renderLayer == "HELMET") {
			head.render();
		}
        if (renderLayer == "CHESTPLATE") {
            grenade.render();
        }
	}
}