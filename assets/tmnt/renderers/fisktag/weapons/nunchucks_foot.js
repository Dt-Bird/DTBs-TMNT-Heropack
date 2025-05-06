loadTextures({
    "nunchuck": "tmnt:nunchucks_foot"
});

var utils = implement("fisktag:external/utils");
var model;

function init(renderer) {
    model = utils.createModel(renderer, "tmnt:weapons/nunchucks_foot", "nunchuck");
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
		glProxy.translate(-0.1, 0.2, -0.8);
		glProxy.rotate(50, 1, 0, 0);
		glProxy.rotate(0, 0, 1, 0);
		glProxy.rotate(10, 0, 0, 1);
		glProxy.scale(1.0);
    }
	else if (renderType === "ENTITY") {
		glProxy.translate(0.0, -0.5, 0.0);
		glProxy.rotate(0, 1, 0, 0);
		glProxy.rotate(35, 0, -1, 0);
		glProxy.rotate(10, 0, 0, 1);
		glProxy.scale(1);
    }
	glProxy.translate(0.0, -1.55, -0.05);
	glProxy.scale(1.5);
}
