function MainAssistant(){
    /* this is the creator function for your scene assistant object. It will be passed all the 
    
     
    
     additional parameters (after the scene name) that were passed to pushScene. The reference
    
     
    
     to the scene controller (this.controller) has not be established yet, so any initialization
    
     
    
     that needs the scene controller should be done in the setup function below. */
    
}

MainAssistant.prototype.setup = function(){
    Mojo.Log.info("setup");
    /* This function is for setup tasks that have to happen when the scene is first created */
    /* Use Mojo.View.render to render view templates and add them to the scene, if needed. */
    /* Setup widgets here */
    /* Add event handlers to listen to events from widgets */
    this.setupButtons();
    
    // Set up our list data model	
    this.setupModel();
    
    // Set up the list widget with templates for the items, their dividers & the list container.
    // We also set the model to use for the list items & specify a function to format divider content.
    this.controller.setupWidget('memosList', this.memoListAttributes, this.memoListModel);
    
    // Watch for taps on the list items	
    Mojo.Event.listen($("memosList"), Mojo.Event.listTap, this.listTapHandler.bindAsEventListener(this));
	Mojo.Log.info("setup done");
};

MainAssistant.prototype.listTapHandler = function(event){
    var index = event.model.items.indexOf(event.item);
    if (index > -1) {
        this.controller.stageController.pushScene('memoDetail', event.item);
    }
};

/* 
 * Set up our list's model.  An item includes the memo's id from DB
 */
MainAssistant.prototype.setupModel = function(){
    this.memoListModel = {
		listTitle: $L("Memos"),
		items: [{
			id: "1",
			description: "Samara",
			tags: "Film Kino deutsch"
		}, {
			id: "2",
			description: "Gegen die Wand",
			tags: "Film Kino deutsch"
		}, {
			id: "3",
			description: "Big Lebowski",
			tags: "Film Kino deutsch"
		}, {
			id: "4",
			description: "The Mission",
			tags: "Film Kino deutsch"
		}, {
			id: "5",
			description: "Wenn die Welt uns gehört",
			tags: "Film Kino deutsch"
		}, {
			id: "6",
			description: "Fargo",
			tags: "Film Kino deutsch"
		}, {
			id: "7",
			description: "Idioten",
			tags: "Film Kino deutsch"
		}]
	};
    
    this.memoListAttributes = {
        itemTemplate: "main/listItem",
        listTemplate: "main/listContainer",
        emptyTemplate: 'main/empty',
        swipeToDelete: true,
        fixedHeightItems: true,
        reorderable: true
    };
};

MainAssistant.prototype.setupButtons = function(){
	Mojo.Log.info("setupButtons: start");
	
    this.newButtonAttributes = {};
    this.newButtonModel = {
        "label": "Neu",
        "buttonClass": "",
        "disabled": false
    };
    // set up the button
    this.controller.setupWidget("NewButton", this.newButtonAttributes, this.newButtonModel);
    // bind the button to its handler
    Mojo.Event.listen($("NewButton"), Mojo.Event.tap, this.handleNewButtonPress.bind(this));
	Mojo.Log.info("setupButtons: done");
};

MainAssistant.prototype.handleNewButtonPress = function(event){
     Mojo.Log.info("New pressed");
};

MainAssistant.prototype.activate = function(event){
    /* put in event handlers here that should only be in effect when this scene is active. For
     example, key handlers that are observing the document */
};

MainAssistant.prototype.deactivate = function(event){
    /* remove any event handlers you added in activate and do any other cleanup that should happen before
     this scene is popped or another scene is pushed on top */
};

MainAssistant.prototype.cleanup = function(event){
    /* this function should do any cleanup needed before the scene is destroyed as 
     a result of being popped off the scene stack */
};
