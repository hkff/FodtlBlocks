Blockly.Blocks['true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("True");
    this.setOutput(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("False");
    this.setOutput(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['predicate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Predicate");
    this.appendStatementInput("ARGS")
        .setCheck("Array");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Constant")
        .appendField(new Blockly.FieldTextInput("value"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldTextInput("value"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['regexp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Regular expression")
        .appendField(new Blockly.FieldTextInput("value"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("EXP1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("And");
    this.appendValueInput("EXP2")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("EXP1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Or");
    this.appendValueInput("EXP2")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['imply'] = {
  init: function() {
    this.appendValueInput("EXP1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Imply");
    this.appendValueInput("EXP2")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Not");
    this.appendValueInput("EXP")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['always'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Always");
    this.appendValueInput("EXP")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(215);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['future'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Future");
    this.appendValueInput("EXP")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(215);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Next");
    this.appendValueInput("EXP")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(215);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['until'] = {
  init: function() {
    this.appendValueInput("EXP1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Until");
    this.appendValueInput("EXP2")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['release'] = {
  init: function() {
    this.appendValueInput("EXP1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Release");
    this.appendValueInput("EXP2")
        .setCheck(null);
    this.setOutput(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['at'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("actor name"), "actor");
    this.appendValueInput("EXP")
        .setCheck(null)
        .appendField("Formula");
    this.setOutput(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['forall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Forall")
        .appendField(new Blockly.FieldTextInput("var name"), "name")
        .appendField(new Blockly.FieldTextInput("var type"), "type");
    this.appendValueInput("EXP")
        .setCheck(null)
        .appendField("Formula");
    this.setOutput(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exists'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Exists")
        .appendField(new Blockly.FieldTextInput("var name"), "name")
        .appendField(new Blockly.FieldTextInput("var type"), "type");
    this.appendValueInput("EXP")
        .setCheck(null)
        .appendField("Formula");
    this.setOutput(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
