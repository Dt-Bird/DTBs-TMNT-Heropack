extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:shredder_tmnt_1987_layer1",
    "layer2": "tmnt:shredder_tmnt_1987_layer2",
	"cape": "tmnt:shredder_tmnt_1987_cape",
	"blade": "tmnt:shredder_blades"
});

var utils = implement("fiskheroes:external/utils");
var capes = implement("fiskheroes:external/capes");

var cape;
var blade;

function init(renderer) {
    renderer.setTexture((entity, renderLayer) => renderLayer == "LEGGINGS" ? "layer2" : "layer1");

    renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");
	
	initEffects(renderer);
}

function initEffects(renderer) {
	var model_blade = renderer.createResource("MODEL", "tmnt:shredder_blades");
    model_blade.texture.set("blade");
    model_blade.generateMirror();

    blade = renderer.createEffect("fiskheroes:model").setModel(model_blade);
    blade.anchor.set("rightArm");
    blade.mirror = true;
	
    var physics = renderer.createResource("CAPE_PHYSICS", null);
    physics.maxFlare = 0.4;
    cape = capes.createDefault(renderer, 24, "fiskheroes:cape_default.mesh.json", physics);
    cape.effect.texture.set("cape");
    cape.effect.width = 10;
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        cape.render(entity);
    }
	if (renderLayer == "CHESTPLATE") {
        var unfold = entity.getInterpolatedData("fiskheroes:blade_timer");
        blade.setOffset(2.5, -12.0 + 1.35 * Math.min(unfold * 5, 3.5), -1.0);
        blade.render();
	}
}
