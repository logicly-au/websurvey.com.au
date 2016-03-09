FlexmonsterLoader.prototype.preloader = function () {
	var parent = document.getElementById(this.containerId);
	
	if (parent == null) {
		var _this = this;
		window.setTimeout(function() {
			_this.preloader.call(_this);
		}, 100);
		return;
	}

	var bgdiv = document.createElement("div");
	bgdiv.style.width = (this._width.indexOf("%") != -1) ? this._width : this._width + "px";
	bgdiv.style.height = (this._height.indexOf("%") != -1) ? this._height : this._height + "px";
	bgdiv.style["background-color"]= "white";
	bgdiv.style.position = "relative";
	bgdiv.id = "_flexmonster_preloader_" + this.containerId;

	var div = document.createElement("div");
	div.style.cssText = "padding: 2px; width: 302px; height: 82px; margin: auto; top: 3px; left: 3px; bottom: 0px; right: 0px; position: absolute; background-color: rgba(153, 153, 153, 0.5);";
	bgdiv.appendChild(div);

	var imgdiv = document.createElement("div");
	imgdiv.style.cssText = "background-image: url("+this.path+"html5-assets/assets/img/preloader.gif); width: 300px; height: 80px; border: 1px solid #999999; background-repeat: no-repeat; background-position: 30px center; background-color: white;";
    div.appendChild(imgdiv);

	parent.appendChild(bgdiv);
	this.hasPreloader = true;
}
for (var i = 0; i < FlexmonsterLoader.instances.length; i++) {
	var instance = FlexmonsterLoader.instances[i];
	if (instance.hasPreloader === undefined) instance.preloader.call(instance);
}