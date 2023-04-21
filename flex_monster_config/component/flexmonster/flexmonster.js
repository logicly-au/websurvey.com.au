/* 
 * Flexmonster Pivot Table HTML5 v2.207 
 * http://flexmonster.com/ 
 * Date: 2016-02-29 15:26 
 */ 
var flexmonster = new FlexMonster();
function FlexMonster() {
	this.addCondition=function(object){this.componentObject.addCondition(object)}
	this.addDataArray=function(array){this.componentObject.addDataArray(array)}
	this.addDataRecord=function(record){this.componentObject.addDataRecord(record)}
	this.addDimension=function(object){this.componentObject.addDimension(object)}
	this.addHierarchy=function(object){this.componentObject.addHierarchy(object)}
	this.addJSON=function(object){this.componentObject.addJSON(object)}
	this.addMeasure=function(object){this.componentObject.addMeasure(object)}
	this.addStyleToMember=function(hierarchyName,memberName,style){this.componentObject.addStyleToMember(hierarchyName,memberName,style)}
	this.addUrlToMember=function(hierarchyName,memberName,url){this.componentObject.addUrlToMember(hierarchyName,memberName,url)}
	this.clear=function(){this.componentObject.clear()}
	this.clearFilter=function(hierarchyName){this.componentObject.clearFilter(hierarchyName)}
	this.closeFieldsList=function(){this.componentObject.closeFieldsList()}
	this.collapseAllData=function(){this.componentObject.collapseAllData()}
	this.collapseData=function(hierarchyName){this.componentObject.collapseData(hierarchyName)}
	this.connectTo=function(params,callbackHandler){this.componentObject.connectTo(params,callbackHandler)}
	this.expandAllData=function(children){this.componentObject.expandAllData(children)}
	this.expandData=function(hierarchyName){this.componentObject.expandData(hierarchyName)}
	this.exportTo=function(type,params,callbackHandler){this.componentObject.exportTo(type,params,callbackHandler)}
	this.fullScreen=function(){this.componentObject.fullScreen()}
	this.hidePreloader=function(){this.componentObject.hidePreloader()}
	this.getAllConditions=function(){return this.componentObject.getAllConditions()}
	this.getAllHierarchies=function(){return this.componentObject.getAllHierarchies()}
	this.getAllMeasures=function(){return this.componentObject.getAllMeasures()}
	this.getCell=function(rowIdx,colIdx){return this.componentObject.getCell(rowIdx,colIdx)}
	this.getColumns=function(){return this.componentObject.getColumns()}
	this.getColumnWidth=function(idx){return this.componentObject.getColumnWidth(idx)}
	this.getCondition=function(id){return this.componentObject.getCondition(id)}
	this.getFilter=function(hierarchyName){return this.componentObject.getFilter(hierarchyName)}
	this.getFilterProperties=function(hierarchyName){return this.componentObject.getFilterProperties(hierarchyName)}
	this.getFormat=function(measureName){return this.componentObject.getFormat(measureName)}
	this.getLabels=function(){return this.componentObject.getLabels()}
	this.getMeasures=function(){return this.componentObject.getMeasures()}
	this.getMembers=function(hierarchyName,memberName,callbackHandler){return this.componentObject.getMembers(hierarchyName,memberName,callbackHandler)}
	this.getOptions=function(){return this.componentObject.getOptions()}
	this.getPages=function(){return this.componentObject.getPages()}
	this.getReport=function(format){return this.componentObject.getReport(format)}
	this.getRowHeight=function(idx){return this.componentObject.getRowHeight(idx)}
	this.getRows=function(){return this.componentObject.getRows()}
	this.getSelectedCell=function(){return this.componentObject.getSelectedCell()}
	this.getSort=function(hierarchyName){return this.componentObject.getSort(hierarchyName)}
	this.getValue=function(rowIdx,colIdx){return this.componentObject.getValue(rowIdx,colIdx)}
	this.getXMLACatalogs=function(proxyURL,dataSource,callbackHandler,username,password){return this.componentObject.getXMLACatalogs(proxyURL,dataSource,callbackHandler,username,password)}
	this.getXMLACubes=function(proxyURL,dataSource,catalog,callbackHandler,username,password){return this.componentObject.getXMLACubes(proxyURL,dataSource,catalog,callbackHandler,username,password)}
	this.getXMLADataSources=function(proxyURL,callbackHandler,username,password){return this.componentObject.getXMLADataSources(proxyURL,callbackHandler,username,password)}
	this.getXMLAProviderName=function(proxyURL,callbackHandler,username,password){return this.componentObject.getXMLAProviderName(proxyURL,callbackHandler,username,password)}
	this.clearXMLACache=function(proxyURL,databaseId,callbackHandler,cubeId,measuresGroupId,username,password){return this.componentObject.clearXMLACache(proxyURL,databaseId,callbackHandler,cubeId,measuresGroupId,username,password)}
	this.gridColumnCount=function(){return this.componentObject.gridColumnCount()}
	this.gridRowCount=function(){return this.componentObject.gridRowCount()}
	this.load=function(url){this.componentObject.load(url)}
	this.open=function(){this.componentObject.open()}
	this.openFieldsList=function(){this.componentObject.openFieldsList()}
	this.percentZoom=function(num){this.componentObject.percentZoom(num)}
	this.print=function(params){this.componentObject.print(params)}
	this.refresh=function(){this.componentObject.refresh()}
	this.removeAllConditions=function(){this.componentObject.removeAllConditions()}
	this.removeAllMeasures=function(){this.componentObject.removeAllMeasures()}
	this.removeCondition=function(id){this.componentObject.removeCondition(id)}
	this.removeMeasure=function(measureName){this.componentObject.removeMeasure(measureName)}
	this.removeSelection=function(){this.componentObject.removeSelection()}
	this.runQuery=function(slice){this.componentObject.runQuery(slice)}
	this.save=function(filename,destination,callbackHandler,url,embedData){return this.componentObject.save(filename,destination,callbackHandler,url,embedData)}
	this.saveData=function(filename){this.componentObject.saveData(filename)}
	this.setBottomX=function(hierarchyName,num,measureName){this.componentObject.setBottomX(hierarchyName,num,measureName)}
	this.setChartTitle=function(title){this.componentObject.setChartTitle(title)}
	this.setColumnWidth=function(idx,width){this.componentObject.setColumnWidth(idx,width)}
	this.setFilter=function(hierarchyName,items,negation){this.componentObject.setFilter(hierarchyName,items,negation)}
	this.setFormat=function(format,measureName){this.componentObject.setFormat(format,measureName)}
	this.setGridTitle=function(title){this.componentObject.setGridTitle(title)}
	this.setHandler=function(eventName,functionName){this.componentObject.setHandler(eventName,functionName)}
	this.setLabels=function(object){this.componentObject.setLabels(object)}
	this.setOptions=function(params){this.componentObject.setOptions(params)}
	this.setReport=function(object){this.componentObject.setReport(object)}
	this.setRowHeight=function(idx,height){this.componentObject.setRowHeight(idx,height)}
	this.setSelectedCell=function(rowIdx,colIdx){return this.componentObject.setSelectedCell(rowIdx,colIdx)}
	this.setSort=function(hierarchyName,sortType){this.componentObject.setSort(hierarchyName,sortType)}
	this.setStyle=function(url){this.componentObject.setStyle(url)}
	this.setTopX=function(hierarchyName,num,measureName){this.componentObject.setTopX(hierarchyName,num,measureName)}
	this.showCharts=function(type, multiple){this.componentObject.showCharts(type, multiple)}
	this.showGrid=function(){this.componentObject.showGrid()}
	this.showGridAndCharts=function(type, position, multiple){this.componentObject.showGridAndCharts(type, position, multiple)}
	this.showPreloader=function(message,details){this.componentObject.showPreloader(message,details)}
	this.sortValues=function(axisName,type,tuple,measureName){this.componentObject.sortValues(axisName,type,tuple,measureName)}
	this.zoomTo=function(num){this.componentObject.zoomTo(num)}
	this.handle=function(delta){if(this.componentObject) {if(this.componentObject.mousewheelHandler){this.componentObject.mousewheelHandler(delta);}}}
	this.wheel=function(event,obj){var delta=0;if(!event){event = window.event;}if(event.wheelDelta){delta=event.wheelDelta/120;}else if(event.detail){delta=-event.detail/3;}if(delta)obj.handle(delta);if (event.preventDefault){event.preventDefault();}event.returnValue=false;};
	this.replaceHierarchyCaption=function(params){this.componentObject.replaceHierarchyCaption(params)}
	this.showAlerts = true;
	this.version = "2.207";
}

flexmonster.embedPivotComponent = function(path, containerId, _width, _height, params, withToolbar_or_type, toolbarLabels_or_withToolbar, _toolbarLabels) {
	var withToolbar = withToolbar_or_type;
	var toolbarLabels = toolbarLabels_or_withToolbar;
	if (typeof withToolbar_or_type == "string") { // backward compatibility
		withToolbar = toolbarLabels_or_withToolbar;
		toolbarLabels = _toolbarLabels;
	}
	
	if (!document.getElementById) return;
	if (!flexmonster._isHTML5Supported()) {
		if (flexmonster.showAlerts) {
			var r = confirm("Flexmonster Pivot Table is not completely supported by this version of browser. Please update your browser. Continue anyway?");
			if (r == false) return;
		} else {
			console.warn("Warning: Flexmonster Pivot Table is not completely supported by this version of browser. Please update your browser.");
		}
	}
	if (document.getElementById(containerId) == null) {
		flexmonster._alert("There is no DOM element with id '" + containerId + "'");
		return;
	}
	if (!params) params = {};
	params.componentFolder = path;
	var obj = (flexmonster.instances++ == 0) ? flexmonster : new FlexMonster();
	obj.toolbarLabels = toolbarLabels;
	var loader = new FlexmonsterLoader(obj, path, containerId, _width, _height, params, null, withToolbar);
	if (withToolbar) {
		loader.loadCSS(path + 'toolbar/flexmonster.toolbar.css?' + flexmonster.version);
		loader.scripts = ['toolbar/flexmonster.toolbar.js?' + flexmonster.version];
		loader.loadScript();
	};
	loader.preloadImage(path+"html5-assets/assets/img/preloader.gif");
	flexmonster._empty(containerId);
	loader.initDefaultScritps();
	loader.loadScript();
	loader.loadCSS(path + 'html5-assets/flexmonster.css?' + flexmonster.version);
	return obj;
}

flexmonster.instances = 0;

flexmonster._isHTML5Supported = function() {
	var getVersion = function(str) {
		return parseInt(str.replace(/[^\d]/g, ""));
	}
	var checkSafari = function() {
		return navigator.userAgent.match('Safari/') ? !navigator.userAgent.match('Version/5.') && !navigator.userAgent.match('Version/6.0') : true;
	}
	var checkOpera = function() {
		return window.opera ? window.opera.version() >= 15 : true;
	}
	var checkChrome = function() {
		return window.chrome ? getVersion(navigator.userAgent.match(/chrome.\d*/gi)[0]) >= 12 : true;
	}
	try {
		return (ArrayBuffer !== undefined && DataView !== undefined && Uint8Array !== undefined
			&& checkChrome() && checkOpera() && checkSafari());
	} catch (e) {
		return false;
	}
}

flexmonster._empty = function(id) {
	var cont = document.getElementById(id);
	while(cont.firstChild) {
		cont.removeChild(cont.firstChild);
	}
}

flexmonster._alert = function(msg) {
	flexmonster.showAlerts ? alert(msg) : console.error(msg); 
}

var FlexmonsterLoader = (function() {

	FlexmonsterLoader.instances = [];

	function FlexmonsterLoader(_parent, path, containerId, _width, _height, params, isHTML5, hasToolbar) {
		this._parent = _parent;
		this.isHTML5 = true;
		this.path = path;
		this.containerId = containerId;
		this._width = _width;
		this._height = _height;
		this.params = params;
		this.hasToolbar = (hasToolbar) ? undefined : false;
		this.getContext();
	}

	FlexmonsterLoader.prototype.scripts = [];

	FlexmonsterLoader.prototype.initDefaultScritps = function() {
		this.scripts = [
			"html5-assets/js/preloader.js",
		//	"html5-assets/js/jquery.min.js", 
		//	"html5-assets/js/jqueryui.min.js", 
		//	"html5-assets/js/jqueryhelpers.min.js"
			"html5-assets/js/pivot.min.js?" + flexmonster.version,
			"html5-assets/js/file.min.js",
		//	"html5-assets/js/d3.min.js",
			"html5-assets/js/zlib.min.js",
			"html5-assets/js/jszip.min.js",
			"html5-assets/js/jspdf.min.js",
			"html5-assets/js/html2canvas.min.js",
			"html5-assets/js/canvg.min.js",
			"html5-assets/js/sha1.min.js"
		];

		var insertBefore = function (arr, insertItem, insertBeforeThisItem) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == insertBeforeThisItem) {
					arr.splice(i - 1, 0, insertItem);
					return;
				}
			}
		}
		if (typeof window.jQuery == 'undefined') {
			insertBefore(this.scripts, "html5-assets/js/jquery.min.js", "html5-assets/js/pivot.min.js?" + flexmonster.version);
			insertBefore(this.scripts, "html5-assets/js/jqueryui.min.js", "html5-assets/js/pivot.min.js?" + flexmonster.version);
		} else {
			if (typeof window.jQuery.ui == 'undefined'
					|| typeof jQuery.ui.core == 'undefined'
					|| typeof jQuery.ui.widget == 'undefined' 
					|| typeof jQuery.ui.mouse == 'undefined' 
					|| typeof jQuery.ui.position == 'undefined' 
					|| typeof jQuery.ui.draggable == 'undefined'
					|| typeof jQuery.ui.droppable == 'undefined'
					|| typeof jQuery.ui.resizable == 'undefined'
					|| typeof jQuery.ui.selectable == 'undefined'
					|| typeof jQuery.ui.sortable == 'undefined') {
		    	insertBefore(this.scripts, "html5-assets/js/jqueryui.min.js", "html5-assets/js/pivot.min.js?" + flexmonster.version);
		    }
		    insertBefore(this.scripts, "html5-assets/js/jqueryhelpers.min.js", "html5-assets/js/pivot.min.js?" + flexmonster.version);
		    // wordpress jQuery fix
			if (window.$ != window.jQuery) {
				window.$ = window.jQuery;
			}
		}
		if (typeof window.d3 == 'undefined') {
			insertBefore(this.scripts, "html5-assets/js/d3.min.js", "html5-assets/js/zlib.min.js");
		}
		if (typeof window.Promise == 'undefined') {
			insertBefore(this.scripts, "html5-assets/js/promise.min.js", "html5-assets/js/html2canvas.min.js");
		}
	}

	FlexmonsterLoader.prototype.getContext = function() {
		FlexmonsterLoader.self = this;
		FlexmonsterLoader.instances.push(this);
	}

	FlexmonsterLoader.prototype.loadScript = function (script) {
		var src;
		var pendingScripts = [];
		var firstScript = document.scripts[0];
		if (script != null) this.scripts.push(script);

		function stateChange() {
			var pendingScript;
			while (pendingScripts[0] && pendingScripts[0].readyState == 'loaded') {
				pendingScript = pendingScripts.shift();
				pendingScript.onreadystatechange = null;
				firstScript.parentNode.insertBefore(pendingScript, firstScript);
			}
		}

		function onError(e) {
			if (!FlexmonsterLoader.isNotFoundAlertShown) {
				FlexmonsterLoader.isNotFoundAlertShown = true;
				flexmonster._alert("File " + e.target.src + " not found. Please verify that the file exists.");
			}
		}

		while (src = this.scripts.shift()) {
			src = this.path + src;
			if ('async' in firstScript) {
				script = document.createElement('script');
				script.async = false;
				script.src = src;
				script.onerror = onError;
				document.head.appendChild(script);
			} else if (firstScript.readyState) {
				script = document.createElement('script');
				pendingScripts.push(script);
				script.onreadystatechange = stateChange;
				script.src = src;
			} else {
				document.write('<script src="' + src + '" defer></'+'script>');
			}
		}
	}

	FlexmonsterLoader.prototype.loadCSS = function(src) {
		var cssfiles = document.getElementsByTagName('link');
		for (var i = cssfiles.length; i >= 0; i--) {
			if (cssfiles[i] && cssfiles[i].getAttribute("href") != null && cssfiles[i].getAttribute("href").indexOf(src) != -1) {
				return;
			}
		}

		function onError(e) {
			if (!FlexmonsterLoader.isNotFoundAlertShown) {
				FlexmonsterLoader.isNotFoundAlertShown = true;
				flexmonster._alert("File " + e.target.href + " not found. Please verify that the file exists.");
			}
		}

		var cssfile = document.createElement('link');
		cssfile.setAttribute('href', src);
		cssfile.setAttribute("rel", "stylesheet");
		cssfile.setAttribute("type", "text/css");
		cssfile.onerror = onError;
		document.getElementsByTagName('head')[0].appendChild(cssfile);
	}

    FlexmonsterLoader.prototype.preloadImage = function(url) {
        try {
            var _img = new Image();
            _img.src = url;
        } catch (e) { }
    }

	return FlexmonsterLoader;
})();
