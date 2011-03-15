function MemoDetailAssistant(arg){
    /* this is the creator function for your scene assistant object. It will be passed all the 
     additional parameters (after the scene name) that were passed to pushScene. The reference
     to the scene controller (this.controller) has not be established yet, so any initialization
     that needs the scene controller should be done in the setup function below. */
    this.memoItem = arg;
}

MemoDetailAssistant.prototype.setup = function(){
    /* this function is for setup tasks that have to happen when the scene is first created */
    
    /* use Mojo.View.render to render view templates and add them to the scene, if needed */
    
    /* setup widgets here */
    var descriptionAttributes = {
        hintText: 'hint',
        textFieldName: 'description',
        modelProperty: 'description',
        multiline: true,
        disabledProperty: 'disabled',
        autoFocus: true,
        modifierState: Mojo.Widget.capsLock,
        enterSubmits: true,
        limitResize: false,
        holdToEnable: false,
        focusMode: Mojo.Widget.focusSelectMode,
        changeOnKeyPress: true,
        textReplacement: false,
        requiresEnterKey: true
    };
    this.controller.setupWidget('description', descriptionAttributes, this.memoItem);
    
    /* add event handlers to listen to events from widgets */
};

MemoDetailAssistant.prototype.handleFocusChange = function(event){
    Mojo.Log.info("handleFocusChange: " + event);
    Mojo.Log.info("handleFocusChange: " + this.memoItem);
	Mojo.Controller.stageController.popScene();
}

MemoDetailAssistant.prototype.activate = function(event){
    /* put in event handlers here that should only be in effect when this scene is active. For
     example, key handlers that are observing the document */
    Mojo.Event.listenForFocusChanges(this.controller.get("description"), this.handleFocusChange);
};

MemoDetailAssistant.prototype.deactivate = function(event){
    /* remove any event handlers you added in activate and do any other cleanup that should happen before
     this scene is popped or another scene is pushed on top */
    Mojo.Event.stopListening(this.controller.get("description"), Mojo.Event.keypress, this.handleFocusChange);
};

MemoDetailAssistant.prototype.cleanup = function(event){
    /* this function should do any cleanup needed before the scene is destroyed as 
     a result of being popped off the scene stack */
};
