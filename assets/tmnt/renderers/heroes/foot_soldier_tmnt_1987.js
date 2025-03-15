extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "tmnt:foot_soldier_tmnt_1987_layer1",
    "layer2": "tmnt:foot_soldier_tmnt_1987_layer2",
	"mask": "tmnt:foot_soldier_tmnt_1987_mask"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
        if (entity.getWornHelmet().suitType() == $SUIT_NAME) {
            return renderLayer == "HELMET" ? "mask" : renderLayer == "LEGGINGS" ? "layer2" : "layer1";
        }
        return renderLayer == "LEGGINGS" ? "layer2" : "layer1";
    });

    renderer.showModel("HELMET", "head", "headwear", "body", "rightArm", "leftArm");

    initEffects(renderer);
    initAnimations(renderer);
}