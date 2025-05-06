extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:april_oneil_tmnt_1987_layer1",
    "layer2": "tmnt:april_oneil_tmnt_1987_layer2",
    "slimarm": "tmnt:april_oneil_tmnt_1987_slimarmed"
});

var utils = implement("fiskheroes:external/utils");
var chest;
var rArm;
var lArm;

function init(renderer) {
	parent.init(renderer);
}

function initEffects(renderer) {
    utils.setOpacityWithData(renderer, 0.999, 0.999, "fiskheroes:intangibility_timer");

    rArm = renderer.createEffect("fiskheroes:model")
    rArm.setModel(utils.createModel(renderer, "tmnt:april_arm_R", "slimarm", null));
    rArm.setOffset(5.0, -2.05, 0.0);
    rArm.anchor.set("leftArm");

    lArm = renderer.createEffect("fiskheroes:model")
    lArm.setModel(utils.createModel(renderer, "tmnt:april_arm_L", "slimarm", null));
    lArm.setOffset(-5.0, -2.05, 0.0);
    lArm.anchor.set("rightArm");

    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(0xFFD3A8);
    forcefield.setShape(36, 18).setOffset(0.0, 6.0, 0.0).setScale(1.25);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.15;
        return true;
    });

    chest = renderer.createEffect("fiskheroes:chest");
    chest.setExtrude(1).setYOffset(1);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        chest.render();
    }

    if (renderLayer == "CHESTPLATE") {
        rArm.render();
        lArm.render();
    }
}