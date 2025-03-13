extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:april_oneil_tmnt_1987_layer1",
    "layer2": "tmnt:april_oneil_tmnt_1987_layer2",
});

var utils = implement("fiskheroes:external/utils");
var chest;

function init(renderer) {
	parent.init(renderer);
}

function initEffects(renderer) {
    chest = renderer.createEffect("fiskheroes:chest");
    chest.setExtrude(1).setYOffset(1);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        chest.render();
    }
}
