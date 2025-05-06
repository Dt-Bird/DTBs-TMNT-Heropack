extend("fiskheroes:hero_basic");
loadTextures({
    "base": "tmnt:shredder_tmnt_1987_base",
    "head": "tmnt:shredder_tmnt_1987_layer1",
	"chest": "tmnt:shredder_tmnt_1987_layer2",
	"legs": "tmnt:shredder_tmnt_1987_layer3",
	"legs_chest": "tmnt:shredder_tmnt_1987_layer4",
	"boots": "tmnt:shredder_tmnt_1987_layer5",
	"cape": "tmnt:shredder_tmnt_1987_cape",
	"blade": "tmnt:shredder_blades"
});

var utils = implement("fiskheroes:external/utils");
var capes = implement("fiskheroes:external/capes");

var cape;
var blade;

function init(renderer) {
	parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
	    if (renderLayer == "HELMET") {
			return "head";
		} else if (renderLayer == "CHESTPLATE") {
			return "chest";
		} else if (renderLayer == "LEGGINGS") {
			return entity.getWornChestplate().suitType() == $SUIT_NAME ? "legs_chest" : "legs";
		} else if (renderLayer == "BOOTS") {
			return "boots";
		}
		return "base";
		});

    renderer.setItemIcons("%s_0", "%s_1", "%s_2", "%s_3");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
	renderer.fixHatLayer("HELMET");
	
	initEffects(renderer);
}

function initEffects(renderer) {
    utils.bindCloud(renderer, "fiskheroes:teleportation", "tmnt:shredder_breach");

	var model_blade = renderer.createResource("MODEL", "tmnt:shredder_blades");
    model_blade.texture.set("blade");
    model_blade.generateMirror();

    blade = renderer.createEffect("fiskheroes:model").setModel(model_blade);
    blade.anchor.set("rightArm");
    blade.mirror = true;

    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(0x5033CA);
    forcefield.setShape(36, 18).setOffset(0.0, 6.0, 0.0).setScale(1.25);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.15;
        return true;
    });
	
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
        blade.setOffset(3.5, -11.5 + 1.35 * Math.min(unfold * 5, 1.5), -1.0);
        blade.render();
	}
}