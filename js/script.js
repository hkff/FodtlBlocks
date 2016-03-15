window.blockly_loaded = function(blockly) {
	return window.Blockly = blockly;
}

function init() {
    Blockly.inject(document.body, {toolbox: document.getElementById('toolbox')});
    // Let the top-level application know that Blockly is ready.
    window.parent.blockly_loaded(Blockly);
    /*var rootBlock = Blockly.Block.obtain(Blockly.mainWorkspace, 'page_settings');
    rootBlock.initSvg();
    rootBlock.render();
    rootBlock.setMovable(false);
    rootBlock.setDeletable(false);*/
}
