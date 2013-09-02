var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var pageWorkers = require("sdk/page-worker");
  

//Add an icon to add-on panel 
var widget = widgets.Widget({
  id: "AutoWikiBrowser",
  label: "AutoWikiBrowser Button",
  contentURL: data.url("favicon.ico"),
  onClick: function(){
      tabs.activeTab.attach({
	  contentScriptFile: data.url('replace.js')
	  })
      }

});


