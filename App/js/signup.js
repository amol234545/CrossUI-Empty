xui.Class('App.signup', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input35")
                .setLeft("19.047619047619047em")
                .setTop("16.761904761904763em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password Input")
                .setType("password")
                .setValue("pwd")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input36")
                .setLeft("19.80952380952381em")
                .setTop("12.19047619047619em")
                .setWidth("17.21904761904762em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton18")
                .setLeft("19.047619047619047em")
                .setTop("19.047619047619047em")
                .setWidth("7.619047619047619em")
                .setHeight("3.3523809523809525em")
                .setCaption("Back")
                .onClick({
                    "return" : "{page}",
                    "actions" : [
                        {
                            "desc" : "Action 1",
                            "type" : "page",
                            "target" : "App",
                            "args" : [true],
                            "method" : "switch",
                            "event" : 1
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton17")
                .setLeft("28.952380952380953em")
                .setTop("19.047619047619047em")
                .setWidth("9.904761904761905em")
                .setHeight("4.114285714285714em")
                .setCaption("Add")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.HTMLButton event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
        */
        _xui_ui_htmlbutton18_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
        }
    }
});