extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:rocksteady_tmnt_1987_layer1",
    "layer2": "tmnt:rocksteady_tmnt_1987_layer2",
    "head": "tmnt:rocksteady_head",
    "sword": "tmnt:rocksteady_sword",
    "grenade": "tmnt:body_grenade",
    "back_grenade": "tmnt:back_grenade"
});

var utils = implement("fiskheroes:external/utils");
var head;
var sword;
var grenade;
var backgrenade

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
    var head_model = renderer.createResource("MODEL", "tmnt:rocksteady_head");
    head = renderer.createEffect("fiskheroes:model").setModel(head_model);
    head.setModel(utils.createModel(renderer, "tmnt:rocksteady_head", "head"));
	head.setOffset(0.0, -24.0, 0.0);
	head.setRotation(0.0, 0.0, 0.0);
	head.anchor.set("head");

    var sword_model = renderer.createResource("MODEL", "tmnt:rocksteady_sword");
    sword = renderer.createEffect("fiskheroes:model").setModel(sword_model);
    sword.setModel(utils.createModel(renderer, "tmnt:rocksteady_sword", "sword"));
	sword.setOffset(0.0, -12.0, 0.5);
	sword.setRotation(0.0, 0.0, 0.0);
	sword.anchor.set("body");

    var grenade_model = renderer.createResource("MODEL", "tmnt:body_grenade");
    grenade = renderer.createEffect("fiskheroes:model").setModel(grenade_model);
    grenade.setModel(utils.createModel(renderer, "tmnt:body_grenade", "grenade"));
	grenade.setOffset(0.75, -13.5, -0.5);
	grenade.setRotation(0.0, 0.0, 0.0);
	grenade.anchor.set("body");

    var backgrenade_model = renderer.createResource("MODEL", "tmnt:back_grenade");
    backgrenade = renderer.createEffect("fiskheroes:model").setModel(grenade_model);
    backgrenade.setModel(utils.createModel(renderer, "tmnt:back_grenade", "back_grenade"));
	backgrenade.setOffset(1.25, -7.5, 0.5);
	backgrenade.setRotation(0.0, 0.0, 0.0);
	backgrenade.anchor.set("body");
}

function render(entity, renderLayer, isFirstPersonArm) {
	if (!isFirstPersonArm) {
		if (renderLayer == "HELMET") {
			head.render();
		}
        if (renderLayer == "CHESTPLATE") {
            sword.render();
            grenade.render();
            backgrenade.render();
        }
	}
}