// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("9.904761904761905em")
                .setTop("19.80952380952381em")
                .setWidth("12.19047619047619em")
                .setHeight("3.3523809523809525em")
                .setCaption("Signin")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("23.61904761904762em")
                .setTop("19.80952380952381em")
                .setWidth("12.19047619047619em")
                .setHeight("3.3523809523809525em")
                .setZIndex(2)
                .setCaption("Signup")
                .onClick({
                    "return" : "{page}",
                    "actions" : [
                        {
                            "desc" : "Action 1",
                            "type" : "page",
                            "target" : "App.signup",
                            "args" : [false],
                            "method" : "switch",
                            "event" : 1
                        },
                        "_xui_ui_htmlbutton4_onclick"
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
                .setType("password")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("15.238095238095237em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
                .setMultiLines(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.HTMLButton event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
        */
        _xui_ui_htmlbutton4_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
            
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});