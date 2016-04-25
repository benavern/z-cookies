/**
 * Module to easily set / get / delete / check cookies.
 * by Benjamin Caradeuc http://caradeuc.info
 * &  Jean sebastien pelerin
 */
var ZCookies  = (function(){

	// private methods

	var priv = {

		// parse the existing cookies into an object
		_parseCookies : function(){

			var rawCookies = document.cookie.split(';');
			var objCookies = {};

			rawCookies.forEach(function(rawCookie) {
				if(rawCookie != ""){
					var rawCookieName = rawCookie.split('=')[0].trim(); // get the name of the cookie
					var rawCookieValue = rawCookie.split('=').slice(1).join('=').trim(); // get the value of the coolie (can contain "=" now)
					objCookies[rawCookieName] = rawCookieValue;
				}
			});

			return objCookies;

		},

	};


	// public methods

	var pub = {

		// get one or multiple specific cookie(s), or the entire object.
		get : function() {

			var cookies = priv._parseCookies();

			if(!!arguments.length){
				// if only one required
				if(arguments.length == 1) return cookies[arguments[0]];

				// else if arguments > 1
				var out = {};
				[].forEach.call(arguments, function(name) { // ignores the cookies that do not exist
					if(cookies[name] != undefined) out[name] = cookies[name];
				})
				return out;

			}
			else { // if no argument, return all cookies
				return cookies;
			}

		},

		// set a cookie, name and value are required, expiration date is facultative
		// exdate : {days:foo, hours:bar, mins:foobar}
		set : function(cname, cval, exdate) {

			var theCookie = "";
			//add the name and value
			if(cname && cval)
				theCookie += cname + "=" + cval + ";";

			//if needed, add a expiration date (based on days, mins and hours)
			if(exdate && (typeof exdate == 'number' || typeof exdate.days == 'number' || typeof exdate.hours == 'number' || typeof exdate.mins == 'number')) {
				var d = new Date();
				var daysTime = (typeof exdate.days == 'number'? exdate.days : 0) * 24 * 60 * 60 * 1000;
				var hoursTime = (typeof exdate.hours == 'number'? exdate.hours : 0) * 60 * 60 * 1000;
				var minsTime = (typeof exdate.mins == 'number'? exdate.mins : 0) * 60 * 1000;
				var addTime = typeof exdate == 'number'? exdate * 24 * 60 * 60 * 1000 : daysTime + hoursTime + minsTime;
			    d.setTime(d.getTime() + addTime);
			    theCookie += "expires=" + d.toUTCString();
			}

			// create the cookie
			if(theCookie != "") document.cookie = theCookie;
			return pub; // for method chaining

		},

		// delete a specific cookie based on its name
		delete : function(cname) {

			if(cname != undefined) pub.set(cname, "expired", 0); // 0 is considered in the past once setted
			return pub; // for method chaining

		},

	};


	// expose public stuff
	return  pub;

})();
