
var ZCookies  = (function(){

	var _cookie = document.cookie;
	var _objCookie = {};
	var _public = {
		getRaw: getRawCk,
		get: getCk,
		set: setCk,
		delete: deleteCk
	}

	// convert the object into the cookie (to call when seting and deleting data)
	function _convertObjtoCookie(){

		_cookie = JSON.stringify(_objCookie);
	};

	// get raw cookie
	function getRawCk(){
		return _cookie;
	};

	// get attribute cookie by key (all the object if there is no key)
	function getCk(_key){
		if(_key) {
			return _objCookie[_key];
		} else {
			return _objCookie;
		}

	};

	// set cookie data by key 
	function setCk(_key, _dat){
		_objCookie[_key] = _dat;
		_convertObjtoCookie();
		return _public 
	};

	// delete cokkie by key
	function deleteCk(_key){
		_objCookie[_key] = _dat;
		_convertObjtoCookie();
		return _public;
	}

	return  _public;

})();