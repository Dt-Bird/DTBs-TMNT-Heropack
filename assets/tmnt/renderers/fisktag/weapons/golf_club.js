loadTextures({
    "golfclub": "tmnt:golf_club"
});

var utils = implement("fisktag:external/utils");
var model;

function init(renderer) {
    model = utils.createModel(renderer, "tmnt:weapons/golf_club", "golfclub");
	renderer.setModel(model);
}

function render(renderer, entity, glProxy, renderType, scopeTimer, recoil, isLeftSide) {
	if (renderType === "EQUIPPED_FIRST_PERSON") {
		glProxy.translate(0.0, 0.0, 0.0);
		glProxy.rotate(0, 0, -1, 0);
		glProxy.rotate(15, -1, 0, -1);
		glProxy.scale(1.0);
	}
    else if (renderType === "INVENTORY") {
		glProxy.translate(0.0, 0.2, 0.0);
		glProxy.rotate(50, 1, 0, 0);
		glProxy.rotate(0, 0, 1, 0);
		glProxy.rotate(10, 0, 0, 1);
		glProxy.scale(1.0);
    }
	else if (renderType === "ENTITY") {
		glProxy.translate(0.0, 0.0, 0.0);
		glProxy.rotate(95, 1, 0, 0);
		glProxy.rotate(35, 0, -1, 0);
		glProxy.rotate(10, 0, 0, 1);
		glProxy.scale(1);
    }
	glProxy.translate(0.0, -1.8, -0.05);
	glProxy.scale(1.5);
}
