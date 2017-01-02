/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d){'use strict';function A(d){k&&d.get("$route")}function B(t,u,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,m){function v(){p&&(g.cancel(p),p=null);l&&(l.$destroy(),l=null);n&&(p=g.leave(n),p.done(function(a){!1!==a&&(p=null)}),n=null)}function D(){var b=t.current&&t.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=t.current;n=m(b,function(b){g.enter(b,null,n||f).done(function(b){!1===b||!d.isDefined(w)||w&&!a.$eval(w)||u()});
v()});l=c.scope=b;l.$emit("$viewContentLoaded");l.$eval(k)}else v()}var l,n,p,w=b.autoscroll,k=b.onload||"";a.$on("$routeChangeSuccess",D);D()}}}function x(d,k,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,c=b.locals;f.html(c.$template);var m=d(f.contents());if(b.controller){c.$scope=a;var v=k(b.controller,c);b.controllerAs&&(a[b.controllerAs]=v);f.data("$ngControllerController",v);f.children().data("$ngControllerController",v)}a[b.resolveAs||"$resolve"]=c;m(a)}}}var y,
E,F,z=d.module("ngRoute",[]).provider("$route",function(){function t(a,f){return d.extend(Object.create(a),f)}function u(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},g=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(a,b,d,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!a});b=b||"";return""+(a?"":b)+"(?:"+(a?b:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([/$*])/g,"\\$1");c.regexp=new RegExp("^"+
a+"$",b?"i":"");return c}y=d.isArray;E=d.isObject;F=d.isDefined;var g={};this.when=function(a,f){var b;b=void 0;if(y(f)){b=b||[];for(var c=0,m=f.length;c<m;c++)b[c]=f[c]}else if(E(f))for(c in b=b||{},f)if("$"!==c.charAt(0)||"$"!==c.charAt(1))b[c]=f[c];b=b||f;d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&u(a,b));a&&(c="/"===a[a.length-1]?a.substr(0,a.length-1):a+"/",g[c]=d.extend({redirectTo:a},
u(c,b)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};k=!0;this.eagerInstantiationEnabled=function(a){return F(a)?(k=a,this):k};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,m,k,u){function l(e){var h=q.current;(y=(s=B())&&h&&s.$$route===h.$$route&&d.equals(s.pathParams,h.pathParams)&&!s.reloadOnSearch&&!C)||!h&&!s||a.$broadcast("$routeChangeStart",
s,h).defaultPrevented&&e&&e.preventDefault()}function n(){var e=q.current,h=s;if(y)e.params=h.params,d.copy(e.params,b),a.$broadcast("$routeUpdate",e);else if(h||e){C=!1;q.current=h;var G=c.resolve(h);G.then(p).then(w).then(function(c){return c&&G.then(z).then(function(c){h===q.current&&(h&&(h.locals=c,d.copy(h.params,b)),a.$broadcast("$routeChangeSuccess",h,e))})}).catch(function(b){h===q.current&&a.$broadcast("$routeChangeError",h,e,b)})}}function p(e){var a={route:e,hasRedirection:!1};if(e)if(e.redirectTo)if(d.isString(e.redirectTo))a.path=
x(e.redirectTo,e.params),a.search=e.params,a.hasRedirection=!0;else{var b=f.path(),g=f.search();e=e.redirectTo(e.pathParams,b,g);d.isDefined(e)&&(a.url=e,a.hasRedirection=!0)}else if(e.resolveRedirectTo)return c.resolve(m.invoke(e.resolveRedirectTo)).then(function(e){d.isDefined(e)&&(a.url=e,a.hasRedirection=!0);return a});return a}function w(a){var b=!0;if(a.route!==q.current)b=!1;else if(a.hasRedirection){var d=f.url(),c=a.url;c?f.url(c).replace():c=f.path(a.path).search(a.search).replace().url();
c!==d&&(b=!1)}return b}function z(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,e){b[e]=d.isString(a)?m.get(a):m.invoke(a,null,null,e)});a=A(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function A(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=u.valueOf(c),b=k(c)));return b}function B(){var a,b;d.forEach(g,function(c,g){var r;if(r=!b){var k=f.path();r=c.keys;
var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,p=k.length;l<p;++l){var n=r[l-1],q=k[l];n&&q&&(m[n.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=t(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function x(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var C=!1,s,y,q={routes:g,
reload:function(){C=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;C=!1}};a.$evalAsync(function(){l(b);b.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(x(this.current.$$route.originalPath,a)),f.search(a);else throw H("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",n);return q}]}).run(A),H=d.$$minErr("ngRoute"),k;A.$inject=["$injector"];z.provider("$routeParams",
function(){this.$get=function(){return{}}});z.directive("ngView",B);z.directive("ngView",x);B.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z){'use strict';function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.1/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(C(a)||E(a)||D&&a instanceof
D)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(y(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(C(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Dc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Ec(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Fc(a){return function(b,d){a(d,b)}}function ie(){return++rb}function Sb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(F(g)||y(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&F(n)?fa(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Tb(n)?a[m]=n.clone():(F(a[m])||(a[m]=C(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,wa.call(arguments,1),!1)}function je(a){return Sb(a,wa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function w(){}function Ya(a){return a}function ma(a){return function(){return a}}function Vb(a){return y(a.toString)&&a.toString!==na}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function Dc(a){return null!==a&&"object"===typeof a&&!Gc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){return"[object Date]"===na.call(a)}function y(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===na.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function ke(a){return a&&Y(a.length)&&
le.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function me(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(C(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Dc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=C(a)?[]:Object.create(Gc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(y(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(ke(b)||"[object ArrayBuffer]"===na.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");C(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function qa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(C(a)){if(!C(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!qa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?qa(a.getTime(),
b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||C(b)||fa(b)||Xa(b))return!1;d=W();for(c in a)if("$"!==c.charAt(0)&&!y(a[c])){if(!qa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!y(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!y(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Hc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Hc,b)}function Ic(a){return E(a)?JSON.parse(a):a}function Jc(a,b){a=a.replace(ne,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Wb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Jc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Ja?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Kc(a){try{return decodeURIComponent(a)}catch(b){}}function Lc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Kc(f),v(f)&&(e=v(e)?Kc(e):!0,va.call(b,f)?C(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Xb(a){var b=[];q(a,function(a,c){C(a)?q(a,function(a){b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))}):b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))});return b.length?b.join("&"):""}function db(a){return ka(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ka(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function oe(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,E(d=a.getAttribute(d)))return d;return null}function pe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(qe?(f.strictDi=null!==oe(d,"strict-di"),
b(d,c?[c]:[],f)):z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Mc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===z.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;z&&f.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(f,""));if(z&&!e.test(z.name))return c();z.name=z.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};y($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function re(){z.name=
"NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function se(a){a=$.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Nc(a,b){b=b||"_";return a.replace(te,function(a,c){return(c?b:"")+a.toLowerCase()})}function ue(){var a;if(!Oc){var b=sb();(oa=x(b)?z.jQuery:b?z[b]:void 0)&&oa.fn.on?(D=oa,R(oa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=oa._data(e,"events"))&&c.$destroy&&oa(e).triggerHandler("$destroy");a(b)}):D=X;$.element=D;Oc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&C(a)&&(a=a[a.length-1]);fb(y(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Pa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Pc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&y(a)?bb(f,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=D(wa.call(a,0,f))),c.push(b);return c||a}function W(){return Object.create(null)}function Yb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Vb(a)||C(a)||fa(a)?cb(a):a.toString()}return a}function ve(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d,f){f||(f=c);return function(b,c){c&&y(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return J}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],r=a("$injector","invoke","push",f),J={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:r,run:function(a){p.push(a);return this}};h&&r(h);return J})}})}
function ra(a,b){if(C(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function we(a){var b=[];return JSON.stringify(a,function(a,c){c=Hc(a,c);if(F(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function xe(a){R(a,{bootstrap:Mc,copy:Fa,extend:R,merge:je,equals:qa,element:D,forEach:q,injector:eb,noop:w,bind:bb,toJson:cb,fromJson:Ic,identity:Ya,isUndefined:x,isDefined:v,isString:E,isFunction:y,
isObject:F,isNumber:Y,isElement:Tb,isArray:C,version:ye,isDate:fa,lowercase:P,uppercase:vb,callbacks:{$$counter:0},getTestability:se,reloadWithDebugInfo:re,$$minErr:M,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ka,$$stringify:Yb});Zb=ve(z);Zb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ze});a.provider("$compile",Qc).directive({a:Ae,input:Rc,textarea:Rc,form:Be,script:Ce,select:De,option:Ee,ngBind:Fe,ngBindHtml:Ge,ngBindTemplate:He,ngClass:Ie,ngClassEven:Je,ngClassOdd:Ke,
ngCloak:Le,ngController:Me,ngForm:Ne,ngHide:Oe,ngIf:Pe,ngInclude:Qe,ngInit:Re,ngNonBindable:Se,ngPluralize:Te,ngRepeat:Ue,ngShow:Ve,ngStyle:We,ngSwitch:Xe,ngSwitchWhen:Ye,ngSwitchDefault:Ze,ngOptions:$e,ngTransclude:af,ngModel:bf,ngList:cf,ngChange:df,pattern:Sc,ngPattern:Sc,required:Tc,ngRequired:Tc,minlength:Uc,ngMinlength:Uc,maxlength:Vc,ngMaxlength:Vc,ngValue:ef,ngModelOptions:ff}).directive({ngInclude:gf}).directive(wb).directive(Wc);a.provider({$anchorScroll:hf,$animate:jf,$animateCss:kf,$$animateJs:lf,
$$animateQueue:mf,$$AnimateRunner:nf,$$animateAsyncRun:of,$browser:pf,$cacheFactory:qf,$controller:rf,$document:sf,$$isDocumentHidden:tf,$exceptionHandler:uf,$filter:Xc,$$forceReflow:vf,$interpolate:wf,$interval:xf,$http:yf,$httpParamSerializer:zf,$httpParamSerializerJQLike:Af,$httpBackend:Bf,$xhrFactory:Cf,$jsonpCallbacks:Df,$location:Ef,$log:Ff,$parse:Gf,$rootScope:Hf,$q:If,$$q:Jf,$sce:Kf,$sceDelegate:Lf,$sniffer:Mf,$templateCache:Nf,$templateRequest:Of,$$testability:Pf,$timeout:Qf,$window:Rf,$$rAF:Sf,
$$jqLite:Tf,$$HashMap:Uf,$$cookieReader:Vf})}])}function gb(a,b){return b.toUpperCase()}function xb(a){return a.replace(Wf,gb)}function Yc(a){a=a.nodeType;return 1===a||!a||9===a}function Zc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if($b.test(a)){d=f.appendChild(b.createElement("div"));c=(Xf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Yf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function X(a){if(a instanceof X)return a;var b;E(a)&&(a=S(a),b=!0);if(!(this instanceof X)){if(b&&"<"!==a.charAt(0))throw ac("nosel");return new X(a)}if(b){b=z.document;var d;a=(d=Zf.exec(a))?[b.createElement(d[1])]:(d=Zc(a,b))?d.childNodes:[];bc(this,a)}else y(a)?$c(a):bc(this,a)}function cc(a){return a.cloneNode(!0)}function yb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
function ad(a,b,d,c){if(v(c))throw ac("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ad(a)),delete ib[d],a.ng339=void 0))}function zb(a,
b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++$f,d=ib[d]={events:{},data:{},handle:void 0});return d}function dc(a,b,d){if(Yc(a)){var c,f=v(d),e=!f&&b&&!F(b),g=!b;a=(a=zb(a,!e))&&a.data;if(f)a[xb(b)]=d;else{if(g)return a;if(e)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",S((" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=S(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",S(d))}}function bc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function bd(a,b){return Eb(a,"$"+(b||"ngController")+
"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=C(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(v(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function cd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function ag(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function $c(a){function b(){z.document.removeEventListener("DOMContentLoaded",
b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function dd(a,b){var d=Gb[b.toLowerCase()];return d&&ed[xa(a)]&&d}function bg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||cg;1<g&&(e=ra(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function cg(a,b,d){d.call(a,b)}function dg(a,b,d){var c=b.relatedTarget;c&&(c===a||eg.call(a,c))||d.call(a,b)}function Tf(){this.$get=function(){return R(X,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function la(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ie)():d+":"+a}function Qa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function fd(a){a=(Function.prototype.toString.call(a)+" ").replace(fg,"");return a.match(gg)||a.match(hg)}function ig(a){return(a=fd(a))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))q(b,Fc(a));else return a(b,c)}}function c(a,b){Pa(a,"service");if(y(b)||C(b))b=p.instantiate(b);if(!b.$get)throw da("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=O.invoke(b,this);if(x(c))throw da("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||C(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Zb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):C(a)?b.push(p.invoke(a)):tb(a,"module")}catch(e){throw C(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);C(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=C(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Qa([],!0),n={$provide:{provider:d(c),factory:d(e),
service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ma(b),!1)}),constant:d(function(a,b){Pa(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=O.invoke(d,c);return O.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw da("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return O.invoke(c.$get,c,
void 0,a)}),O=J;n.$injectorProvider={$get:ma(J)};var u=g(a),O=J.get("$injector");O.strictDi=b;q(u,function(a){a&&O.invoke(a)});return O}function hf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;y(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||ag(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;C(a)&&(a=a.join(" "));C(b)&&(b=b.join(" "));return a+" "+b}function jg(a){E(a)&&
(a=a.split(" "));var b=W();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return F(a)?a:{}}function kg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(J--,0===J)for(;O.length;)try{O.pop()()}catch(b){d.error(b)}}}function e(){ia=null;g();h()}function g(){u=A();u=x(u)?null:u;qa(u,B)&&(u=B);B=u}function h(){if(U!==k.url()||H!==u)U=k.url(),H=u,q(K,function(a){a(k.url(),u)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=!1;var J=
0,O=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():O.push(a)};var u,H,U=l.href,t=b.find("base"),ia=null,A=c.history?function(){try{return m.state}catch(a){}}:w;g();H=u;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=H===e;if(U===b&&(!c.history||f))return k;var h=U&&Ba(U)===Ba(b);U=b;H=e;!c.history||h&&f?(h||(ia=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(ia=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),H=u);ia&&(ia=b);return k}return ia||l.href.replace(/%27/g,"'")};k.state=function(){return u};var K=[],I=!1,B=null;k.onUrlChange=function(b){if(!I){if(c.history)D(a).on("popstate",e);D(a).on("hashchange",e);I=!0}K.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];f(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),f(w),!0):!1}}function pf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new kg(a,c,b,d)}]}function qf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,h=
R({},c,{id:a}),k=W(),l=c&&c.capacity||Number.MAX_VALUE,m=W(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=W();g=0;m=W();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Nf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Qc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=W();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!C(b)&&F(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=me("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=W();this.directive=function U(b,d){fb(b,"name");Pa(b,"directive");E(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);y(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw ea("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Fc(U));return this};this.component=function(a,b){function c(a){function e(b){return y(b)||C(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:lg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,y(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return v(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var O=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(O=a,this):O};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,f,n,I,B,L,N,G){function T(){try{if(!--za)throw da=void 0,ea("infchng",J);B.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=void 0;if(a.length)throw a;})}finally{za++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ma(a,
b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof D||(a=D(a));var f=Na(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw ea("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?D(ha(g,D("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Na(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(D(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=C(a)||a instanceof D,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===La&&M(a,r,k);m=fc(a[r],[],l,0===r?d:void 0,e);(f=m.length?X(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Na(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function M(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=W(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function fc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);Y(b,
Ca(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var A=!1,B=!1;k=p[K];l=k.name;m=k.value;k=Ca(l);(n=Ha.test(k))&&(l=l.replace(gd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(A=l,B=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,dd(a,k)&&(c[k]=!0);ra(a,b,m,k,n);Y(b,k,"A",d,e,A,B)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;F(f)&&(f=f.animVal);if(E(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),Y(b,k,"C",d,e)&&(c[k]=S(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ma(b,a.nodeValue);break;case 8:if(!Fa)break;kb(a,b,c,d,e)}b.sort(ka);return b}function kb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);Y(b,h,"M",d,e)&&(c[h]=S(f[2]))}}catch(k){}}function hd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function id(a,b,c){return function(d,e,f,g,h){e=hd(e[0],b,c);return a(d,e,f,g,h)}}function gc(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function X(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=id(a,c,d));a.require=t.require;a.directiveName=L;if(B===t||t.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=id(b,c,d));b.require=
t.require;b.directiveName=L;if(B===t||t.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);U&&(e=N);c||(c=U?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw ea("noslot",d,ya(L));}else return l(a,b,e,c,Q)}var p,t,u,G,J,N,T,L;b===f?(g=d,L=d.$$element):(L=D(f),g=new s(L,d));J=e;B?G=e.$new(!0):K&&(J=e.$parent);l&&(T=m,T.$$boundTransclude=l,T.isSlotFilled=function(a){return!!l.$$slots[a]});A&&(N=
ca(L,g,T,A,G,e,B));B&&(ba.$$addScopeInfo(L,G,!0,!(I&&(I===B||I===B.$$originalDirective))),ba.$$addScopeClass(L,!0),G.$$isolateBindings=B.$$isolateBindings,t=oa(e,g,G,G.$$isolateBindings,B),t.removeWatches&&G.$on("$destroy",t.removeWatches));for(p in N){t=A[p];u=N[p];var Hb=t.$$bindings.bindToController;if(r){u.bindingInfo=Hb?oa(J,g,u.instance,Hb,t):{};var O=u();O!==u.instance&&(u.instance=O,L.data("$"+t.name+"Controller",O),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=
oa(J,g,u.instance,Hb,t))}else u.instance=u(),L.data("$"+t.name+"Controller",u.instance),u.bindingInfo=oa(J,g,u.instance,Hb,t)}q(A,function(a,b){var c=a.require;a.bindToController&&!C(c)&&F(c)&&R(N[b].instance,V(b,c,L,N))});q(N,function(a){var b=a.instance;if(y(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(y(b.$onInit))try{b.$onInit()}catch(e){c(e)}y(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());y(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(t=h.length;p<t;p++)u=h[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);var Q=e;B&&(B.template||null===B.templateUrl)&&(Q=G);a&&a(Q,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);q(N,function(a){a=a.instance;y(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,A=l.controllerDirectives,B=l.newIsolateScopeDirective,I=l.templateDirective,u=l.nonTlbTranscludeDirective,
J=!1,N=!1,U=l.hasElementTranscludeDirective,G=d.$$element=D(b),t,L,T,O=e,Q,v=!1,Ma=!1,w,z=0,E=a.length;z<E;z++){t=a[z];var Na=t.$$start,M=t.$$end;Na&&(G=hd(b,Na,M));T=void 0;if(p>t.priority)break;if(w=t.scope)t.templateUrl||(F(w)?($("new/isolated scope",B||K,t,G),B=t):$("new/isolated scope",B,t,G)),K=K||t;L=t.name;if(!v&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(w=z+1;v=a[w++];)if(v.transclude&&!v.$$tlb||v.replace&&(v.templateUrl||v.template)){Ma=!0;break}v=!0}!t.templateUrl&&
t.controller&&(A=A||W(),$("'"+L+"' controller",A[L],t,G),A[L]=t);if(w=t.transclude)if(J=!0,t.$$tlb||($("transclusion",u,t,G),u=t),"element"===w)U=!0,p=t.priority,T=G,G=d.$$element=D(ba.$$createComment(L,d[L])),b=G[0],la(f,wa.call(T,0),b),T[0].$$parentNode=T[0].parentNode,O=gc(Ma,T,e,p,g&&g.name,{nonTlbTranscludeDirective:u});else{var ja=W();if(F(w)){T=[];var P=W(),kb=W();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;P[a]=b;ja[b]=null;kb[b]=c});q(G.contents(),function(a){var b=P[Ca(xa(a))];
b?(kb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):T.push(a)});q(kb,function(a,b){if(!a)throw ea("reqslot",b);});for(var ec in ja)ja[ec]&&(ja[ec]=gc(Ma,ja[ec],e))}else T=D(cc(b)).contents();G.empty();O=gc(Ma,T,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});O.$$slots=ja}if(t.template)if(N=!0,$("template",I,t,G),I=t,w=y(t.template)?t.template(G,d):t.template,w=Ea(w),t.replace){g=t;T=$b.test(w)?jd(ha(t.templateNamespace,S(w))):[];b=T[0];if(1!==T.length||1!==b.nodeType)throw ea("tplrt",L,"");
la(f,G,b);E={$attr:{}};w=fc(b,[],E);var Y=a.splice(z+1,a.length-(z+1));(B||K)&&aa(w,B,K);a=a.concat(w).concat(Y);fa(d,E);E=a.length}else G.html(w);if(t.templateUrl)N=!0,$("template",I,t,G),I=t,t.replace&&(g=t),n=ga(a.splice(z,a.length-z),G,d,f,J&&O,h,k,{controllerDirectives:A,newScopeDirective:K!==t&&K,newIsolateScopeDirective:B,templateDirective:I,nonTlbTranscludeDirective:u}),E=a.length;else if(t.compile)try{Q=t.compile(G,d,O);var Z=t.$$originalDirective||t;y(Q)?m(null,bb(Z,Q),Na,M):Q&&m(bb(Z,Q.pre),
bb(Z,Q.post),Na,M)}catch(da){c(da,ya(G))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=N;n.transclude=O;l.hasElementTranscludeDirective=U;return n}function V(a,b,c,d){var e;if(E(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(C(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=V(a,b[g],c,d);else F(b)&&(e={},q(b,function(b,f){e[f]=V(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,f,g){var h=W(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=I(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,f,g,h,k,l){if(c===
h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Ub(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,A={isolateScope:null,bindToController:null};F(K.scope)&&(!0===K.bindToController?(A.bindToController=d(K.scope,r,!0),A.isolateScope={}):A.isolateScope=d(K.scope,r,!1));F(K.bindToController)&&(A.bindToController=d(K.bindToController,r,!0));if(A.bindToController&&!K.controller)throw ea("noctrl",
r);m=m.$$bindings=A;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),u=Ub(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),t=y(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,B=r.templateNamespace;b.empty();f(t).then(function(c){var f,A;c=Ea(c);if(r.replace){c=$b.test(c)?jd(ha(B,S(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw ea("tplrt",r.name,t);c={$attr:{}};la(e,b,f);var I=fc(f,[],c);F(r.scope)&&aa(I,!0);a=I.concat(a);fa(d,c)}else f=K,b.html(c);a.unshift(u);n=X(a,f,d,g,b,
r,h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Na(b[0].childNodes,g);m.length;){c=m.shift();A=m.shift();var G=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(A!==K){var N=A.className;l.hasElementTranscludeDirective&&r.replace||(I=cc(f));la(G,D(A),I);Ma(D(I),N)}A=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,e,A)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(w);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return L.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return L.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return L.RESOURCE_URL}function ra(a,
c,d,e,f){var g=pa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw ea("selmulti",ya(a));if(m.test(e))throw ea("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=W());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);D.hasData(d)&&(D.data(c,D.data(d)),D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function oa(a,c,d,e,f){function g(b,c,e){!y(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(T),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,A,u,B;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(E(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;r=c[m];E(r)?d[h]=b(r)(a):Ia(r)&&(d[h]=r);l[h]=new Ib(hc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);B=A.literal?qa:function(a,b){return a===b||a!==a&&b!==b};u=A.assign||function(){r=d[h]=A(a);throw ea("nonassign",c[m],m,f.name);};r=d[h]=A(a);p=function(b){B(b,d[h])||(B(b,r)?u(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var I=A.literal,G=d[h]=A(a);l[h]=new Ib(hc,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===G||I&&qa(b,G))return;b=G}g(h,a,b);d[h]=a},I);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=z.document.createElement("div"),Fa=O,Ga=u,za=J,da;s.prototype={$normalize:Ca,$addClass:function(a){a&&
0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=kd(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=kd(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=dd(this.$$element[0],a),g=ld[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Nc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
a)||"img"===f&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===f&&"srcset"===a&&v(b)){for(var f="",g=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+G(S(g[m]),!0),f=f+(" "+S(g[m+1]));g=S(g[2*l]).split(/\s/);f+=G(S(g[0]),!0);2===g.length&&(f+=" "+S(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=W()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];C(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ba.$$addBindingClass=
p?function(a){Ma(a,"ng-binding")}:w;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ba.$$addScopeClass=p?function(a,b){Ma(a,b?"ng-isolate-scope":"ng-scope")}:w;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};return ba}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(gd,"").replace(mg,gb)}function kd(a,b){var d="",c=a.split(/\s+/),
f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function jd(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&ng.call(a,b,1)}return a}function lg(a,b){if(b&&E(b))return b;if(E(a)){var d=md.exec(a);if(d)return d[3]}}function rf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Pa(b,"controller");F(b)?
R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!F(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&E(k)&&(n=k);if(E(e)){k=e.match(md);if(!k)throw nd("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Pc(g.$scope,m,!0)||(b?Pc(c,m,!0):void 0);if(!e)throw nd("ctrlreg",m);tb(e,m,!0)}if(h)return h=(C(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(F(a)||y(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function sf(){this.$get=["$window",function(a){return D(a.document)}]}function tf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function uf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function ic(a){return F(a)?fa(a)?a.toISOString():cb(a):a}function zf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ec(a,function(a,c){null===a||x(a)||(C(a)?q(a,function(a){b.push(ka(c)+"="+ka(ic(a)))}):b.push(ka(c)+"="+ka(ic(a))))});return b.join("&")}}}function Af(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(C(a)?q(a,function(a,c){b(a,f+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?Ec(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ka(f)+"="+ka(ic(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function jc(a,b){if(E(a)){var d=a.replace(og,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(od))||(c=(c=d.match(pg))&&qg[c[0]].test(d));c&&(a=Ic(d))}}return a}function pd(a){var b=W(),d;E(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=P(S(a.substr(0,d)));a=S(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):F(a)&&q(a,function(a,d){var e=P(d),g=S(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function qd(a){var b;return function(d){b||(b=pd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function rd(a,b,d,c){if(y(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function yf(){var a=this.defaults={transformResponse:[jc],transformRequest:[function(a){return F(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(kc),put:ra(kc),
patch:ra(kc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
d={};q(a,function(a,e){y(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=rd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ra(b))}(b);g.method=vb(g.method);g.paramSerializer=E(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=rd(b.data,qd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(w)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}N&&
(200<=a&&300>a?N.put(Q,[a,c,pd(d),e]):N.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:qd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var B=k.defer(),L=B.promise,N,G,T=c.headers,s="jsonp"===P(c.method),Q=c.url;s?Q=m.getTrustedResourceUrl(Q):E(Q)||(Q=m.valueOf(Q));Q=r(Q,
c.paramSerializer(c.params));s&&(Q=J(Q,c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=F(c.cache)?c.cache:F(a.cache)?a.cache:O);N&&(G=N.get(Q),v(G)?G&&y(G.then)?G.then(K,K):C(G)?p(G[1],G[0],ra(G[2]),G[3]):p(G,200,{},"OK"):N.put(Q,L));x(G)&&((G=sd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=G),f(c.method,Q,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return L}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw td("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw td("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var O=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];q(d,function(a){u.unshift(E(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Cf(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Bf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return rg(a,c,a.defer,b,d[0])}]}function rg(a,b,d,c,f){function e(a,
b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,r,J,O){function u(){U&&U();t&&
t.abort()}h=h||a.url();if("jsonp"===P(f))var H=c.createCallback(h),U=e(h,H,function(a,b){var e=200===a&&c.getResponse(H);v(A)&&d.cancel(A);U=t=null;l(a,e,"",b);c.removeCallback(H)});else{var t=b(f,h);t.open(f,h,!0);q(m,function(a,b){v(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=t.getAllResponseHeaders();v(A)&&d.cancel(A);U=t=null;l(c,b,e,a)};f=
function(){v(A)&&d.cancel(A);U=t=null;l(-1,null,null,"")};t.onerror=f;t.onabort=f;t.ontimeout=f;q(J,function(a,b){t.addEventListener(b,a)});q(O,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(r)try{t.responseType=r}catch(s){if("json"!==r)throw s;}t.send(x(k)?null:k)}if(0<n)var A=d(u,n);else n&&y(n.then)&&n.then(u)}}function wf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,n,p){function H(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);return p&&!v(a)?a:Yb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var q;k||(k=g(e),q=ma(k),q.exp=e,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var t,s,A=0,K=[],I=[];q=e.length;for(var B=[],L=[];A<q;)if(-1!==(t=e.indexOf(a,
A))&&-1!==(s=e.indexOf(b,t+l)))A!==t&&B.push(g(e.substring(A,t))),A=e.substring(t+l,s),K.push(A),I.push(d(A,H)),A=s+m,L.push(B.length),B.push("");else{A!==q&&B.push(g(e.substring(A)));break}n&&1<B.length&&Ea.throwNoconcat(e);if(!k||K.length){var N=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&x(a[b]))return;B[L[b]]=a[b]}return B.join("")};return R(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=I[b](a);return N(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(I,function(d,e){var f=N(d);y(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function xf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,r):e(u)}var p=4<arguments.length,r=p?wa.call(arguments,4):[],J=b.setInterval,q=b.clearInterval,
u=0,H=v(m)&&!m,U=(H?c:d).defer(),t=U.promise;l=v(l)?l:0;t.$$intervalId=J(function(){H?f.defer(n):a.$evalAsync(n);U.notify(u++);0<l&&u>=l&&(U.resolve(u),q(t.$$intervalId),delete g[t.$$intervalId]);H||a.$apply()},k);g[t.$$intervalId]=U;return t}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(w),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function lc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function ud(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||sg[d.protocol]||null}function vd(a,b){if(tg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Lc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function mc(a,b){return a.slice(0,b.length)===
b}function sa(a,b){if(mc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function nc(a,b,d){this.$$html5=!0;d=d||"";ud(a,this);this.$$parse=function(a){var d=sa(b,a);if(!E(d))throw lb("ipthprfx",a,b);vd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;v(e=sa(a,c))?(g=e,g=d&&v(e=sa(d,e))?b+(sa("/",e)||e):a+g):v(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function oc(a,b,d){ud(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));vd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;mc(e,f)&&(e=e.replace(f,""));g.exec(e)||
(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function wd(a,b,d){this.$$html5=!0;oc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===
c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Jb(a){return function(){return this[a]}}function xd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ef(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=
a,this;if(F(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();
var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?nc:wd}else p=Ba(n),m=oc;var r=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=D(a.target);"a"!==xa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!E(f)||
!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");F(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);J.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){mc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?
null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ff(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function ug(a){return a+""}function vg(a,b){return"undefined"!==typeof a?a:b}function yd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function V(a,b){var d,c,f;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;
case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,
b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=f?c:[a];
break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=
!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function zd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Ad(a){return a.type===s.Identifier||a.type===s.MemberExpression}function Bd(a){if(1===a.body.length&&Ad(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Cd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function Dd(a,b){this.astBuilder=a;this.$filter=b}function Ed(a,b){this.astBuilder=a;this.$filter=b}function pc(a){return y(a.valueOf)?a.valueOf():wg.call(a)}function Gf(){var a=W(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
a||null==b?a===b:"object"===typeof a&&(a=pc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&pc(b));return h},b,c,f)}for(var l=[],m=[],n=0,I=g.length;n<I;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&pc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;y(b)&&b(a,c,d);v(a)&&d.$$postDigest(function(){v(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;y(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:y(d)&&d,isIdentifierContinue:y(c)&&c};return function(b,c){var d,e,u;switch(typeof b){case "string":return u=
b=b.trim(),d=a[u],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new qc(n),d=(new rc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[u]=d),m(d,c);case "function":return m(b,c);default:return m(w,c)}}}]}function If(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Fd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Jf(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Fd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Fd(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!v&&t.length;){var a=t.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?we(c):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===v&&0===t.length&&a(g),t.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++v,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{y(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,
b.value)}catch(n){m(e,n)}}}finally{--v,d&&0===v&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,H("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(F(b)||y(b))f=b.then;y(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,y(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new e;m(b,a);return b}function J(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return r(e)}return d&&y(d.then)?d.then(function(){return b(a)},r):b(a)}function s(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function u(a){if(!y(a))throw H("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var H=
M("$q",TypeError),v=0,t=[];R(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,w,a)},function(b){return J(b,r,a)},b)}});var w=s;u.prototype=e.prototype;u.defer=c;u.reject=r;u.when=s;u.resolve=w;u.all=function(a){var b=new e,c=0,d=C(a)?
[]:{};q(a,function(a,e){c++;s(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};u.race=function(a){var b=c();q(a,function(a){s(a).then(b.resolve,b.reject)});return b.promise};return u}function Sf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Hf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(H.$$phase)throw d("inprog",
H.$$phase);H.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function s(){for(;ia.length;)try{ia.shift()()}catch(a){e(a)}f=null}function u(){null===f&&(f=h.defer(function(){H.$apply(s)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;y(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)va.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,u=b,q,w=[],x,ia;n("$digest");h.$$checkUrlChange();this===H&&null!==f&&(h.defer.cancel(f),s());c=null;do{r=!1;q=this;for(p=0;p<v.length;p++){try{ia=v[p],ia.scope.$eval(ia.expression,ia.locals)}catch(z){e(z)}c=null}v.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?qa(g,k):ga(g)&&ga(k)))r=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>u&&(x=4-u,w[x]||(w[x]=[]),w[x].push({msg:y(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){e(D)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||v.length)&&!u--)throw H.$$phase=
null,d("infdig",b,w);}while(r||v.length);for(H.$$phase=null;A<t.length;)try{t[A++]()}catch(E){e(E)}t.length=A=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||v.length||h.defer(function(){v.length&&H.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");
try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){e(b)}finally{try{H.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&ia.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,
g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},
defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var H=new m,v=H.$$asyncQueue=[],t=H.$$postDigestQueue=[],ia=H.$$applyAsyncQueue=[],A=0;return H}]}function ze(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function xg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Gd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Hd(a){var b=[];v(a)&&q(a,function(a){b.push(xg(a))});return b}function Lf(){this.SCE_CONTEXTS=pa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Hd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Hd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?sd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[pa.HTML]=f(g);h[pa.CSS]=f(g);h[pa.URL]=f(g);h[pa.JS]=f(g);h[pa.RESOURCE_URL]=f(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||
""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===pa.RESOURCE_URL){var g=Da(f.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return f;throw ua("insecurl",f.toString());}if(d===pa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Kf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ra(pa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,
e=c.getTrusted,g=c.trustAs;q(pa,function(a,b){var d=P(b);c[("parse_as_"+d).replace(sc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(sc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(sc,gb)]=function(b){return g(a,b)}});return c}]}function Mf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(P((a.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Of(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;C(l)?l=l.filter(function(a){return a!==jc}):l===jc&&(l=null);return c.get(h,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=yg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=
0;return g}]}function Pf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Gd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');
if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Qf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){y(e)||(l=k,k=e,e=w);var m=wa.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(w),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function Da(a){La&&(ca.setAttribute("href",a),a=ca.href);ca.setAttribute("href",a);return{href:ca.href,protocol:ca.protocol?ca.protocol.replace(/:$/,""):"",host:ca.host,search:ca.search?ca.search.replace(/^\?/,""):"",hash:ca.hash?ca.hash.replace(/^#/,""):
"",hostname:ca.hostname,port:ca.port,pathname:"/"===ca.pathname.charAt(0)?ca.pathname:"/"+ca.pathname}}function sd(a){a=E(a)?Da(a):a;return a.protocol===Id.protocol&&a.host===Id.host}function Rf(){this.$get=ma(z)}function Jd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function Vf(){this.$get=Jd}function Xc(a){function b(d,c){if(F(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Kd);b("date",Ld);b("filter",zg);b("json",Ag);b("limitTo",Bg);b("lowercase",Cg);b("number",Md);b("orderBy",Nd);b("uppercase",Dg)}function zg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw M("filter")("notarray",
a);}c=c||"$";var f;switch(tc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Eg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Eg(a,b,d,c){var f=F(a)&&d in a;!0===b?b=qa:y(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!Vb(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!F(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,
e){var g=tc(a),h=tc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(C(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!y(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function tc(a){return null===a?"null":typeof a}function Kd(a){var b=
a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Od(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Md(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Od(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Fg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Pd))&&(a=a.replace(Pd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===uc;f++);
if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===uc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Qd&&(d=d.splice(0,Qd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Gg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-
1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Od(a,b,d,c,f){if(!E(a)&&!Y(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Fg(h);Gg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=uc+a;d&&(a=a.substr(a.length-b));return f+a}function aa(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Kb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=
c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Rd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Sd(a){return function(b){var d=Rd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function vc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ld(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Hg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ig.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Jc(e,m),c=Wb(c,e,!0));q(h,function(b){k=Jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ag(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Bg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ga(b))return a;Y(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?wc(a,d,d+b):0===d?wc(a,b,a.length):wc(a,Math.max(0,d+b),d)}}function wc(a,b,d){return E(a)?a.slice(b,d):wa.call(a,b,d)}function Nd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(y(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(k)&&(k=a.index),F(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw M("orderBy")("notarray",a);C(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=y(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(y(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Vb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){y(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Lb(a,b,d,
c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Td(this)}function Td(a){a.$$classCache={};a.$$classCache[Ud]=!(a.$$classCache[ob]=a.$$element.hasClass(ob))}function Vd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Nc(c,"-"):"";b(a,ob+c,!0===d);b(a,Ud+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Wd(this.$pending)&&(this.$pending=void 0));Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Wd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Wd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function xc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=P(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=S(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(Xd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var f,e;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Kg.test(d))return new Date(d);
a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function pb(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!fa(a)?d(a)||
void 0:a}yc(f,e,g,h);Sa(f,e,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Wb(a,r)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw qb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Wb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(v(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||x(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!n(a)||x(u)||d(a)<=u};g.$observe("max",function(a){u=p(a);h.$validate()})}}}function yc(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Yd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Lg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw qb("numfmt",b);b=b.toString()}return b})}
function Ta(a){v(a)&&!Y(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function zc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Zd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(zc(a),zc(b),zc(d)),c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function $d(a,b,d,c,f){if(v(c)){a=a(c);if(!a.constant)throw qb("constexpr",d,c);return a(b)}return f}function Ac(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;C(a)?b=a.map(c).join(" "):F(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function f(a){var b=a;if(C(a))b=a.map(f);else if(F(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var e;return["$parse",function(g){return{restrict:"AC",link:function(h,
k,l){function m(a,b){var c=[];q(a,function(a){if(0<b||H[a])H[a]=(H[a]||0)+b,H[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=t,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=t,c=m(c&&c.split(" "),-1),l.$removeClass(c);w=a}function p(a){a=c(a);a!==t&&r(a)}function r(a){if(w===b){var c=t&&t.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=m(f,-1),c=m(c,1);l.$addClass(c);l.$removeClass(f)}t=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?f:c),u=v?p:r,H=k.data("$classCounts"),
w=!0,t;H||(H=W(),k.data("$classCounts",H));"ngClass"!==a&&(e||(e=g("$index",function(a){return a&1})),h.$watch(e,n));h.$watch(s,u,v)}}}]}function Ob(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;
this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=f;this.$$q=h;this.$$exceptionHandler=b;Td(this);Mg(this)}function Mg(a){a.$$scope.$watch(function(){var b=
a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,w))}return b})}function Bc(a){this.$$options=a}function ae(a,b){q(b,function(b,c){v(a[c])||(a[c]=b)})}var Ng=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,
P=function(a){return E(a)?a.toLowerCase():a},vb=function(a){return E(a)?a.toUpperCase():a},La,D,oa,wa=[].slice,ng=[].splice,Og=[].push,na=Object.prototype.toString,Gc=Object.getPrototypeOf,Ga=M("ng"),$=z.angular||(z.angular={}),Zb,rb=0;La=z.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};w.$inject=[];Ya.$inject=[];var C=Array.isArray,le=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,S=function(a){return E(a)?a.trim():a},Gd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!v(za.rules)){var a=z.document.querySelector("[ng-csp]")||z.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return za.rules},sb=function(){if(v(sb.name_))return sb.name_;var a,b,d=Ka.length,
c,f;for(b=0;b<d;++b)if(c=Ka[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return sb.name_=f},ne=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],qe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(z.document),te=/[A-Z]/g,Oc=!1,Ja=
3,ye={full:"1.6.1",major:1,minor:6,dot:1,codeName:"promise-rectification"};X.expando="ng339";var ib=X.cache={},$f=1;X._data=function(a){return this.cache[a[this.expando]]||{}};var Wf=/-([a-z])/g,Pg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},ac=M("jqLite"),Zf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,$b=/<|&#?\w+;/,Xf=/<([\w:-]+)/,Yf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var eg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=X.prototype={ready:$c,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+
a])},length:0,push:Og,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[P(a)]=a});var ed={};q("input select option textarea button form details".split(" "),function(a){ed[a]=!0});var ld={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:dc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<
d;b++)hb(a[b])}},function(a,b){X[b]=a});q({data:dc,inheritedData:Eb,scope:function(a){return D.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||D.data(a,"$isolateScopeNoTemplate")},controller:bd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(Pg,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;
if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=P(b),f=Gb[c];if(v(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||
a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:cd},function(a,b){X.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==cd&&x(2===a.length&&a!==Bb&&a!==bd?b:c)){if(F(b)){for(f=0;f<g;f++)if(a===dc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:hb,on:function(a,b,d,
c){if(v(c))throw ac("onargs");if(Yc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=bg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],dg),h(b,void 0,!0)):h(b)}},off:ad,one:function(a,b,d){a=D(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new X(b),function(b){d?
c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new X(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new X(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=D(b).eq(0).clone()[0],c=a.parentNode;
c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new X(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
a.getElementsByTagName(b):[]},clone:cc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ra(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||
b.apply(a,f)})}},function(a,b){X.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),v(e)&&(e=D(e))):bc(e,a(this[g],b,c,f));return v(e)?e:this}});X.prototype.bind=X.prototype.on;X.prototype.unbind=X.prototype.off;Qa.prototype={put:function(a,b){this[la(a,this.nextUid)]=b},get:function(a){return this[la(a,this.nextUid)]},remove:function(a){var b=this[a=la(a,this.nextUid)];delete this[a];return b}};var Uf=[function(){this.$get=[function(){return Qa}]}],gg=/^([^(]+?)=>/,
hg=/^[^(]*\(\s*([^)]*)\)/m,Qg=/,/,Rg=/^\s*(_?)(\S+?)\1\s*$/,fg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,da=M("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||ig(a)),da("strictdi",d);b=fd(a);q(b[1].split(Qg),function(a){a.replace(Rg,function(a,b,d){c.push(d)})})}a.$inject=c}}else C(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var be=M("$animate"),lf=function(){this.$get=w},mf=function(){var a=
new Qa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):C(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=jg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},jf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw be("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&
(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw be("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);
h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],of=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},nf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},kf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},ea=M("$compile"),hc=new function(){};Qc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===hc};var gd=/^((?:x|data)[:\-_])/i,mg=/[:\-_]+(.)/g,nd=M("$controller"),
md=/^(\S+)(\s+as\s+([\w$]+))?$/,vf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},od="application/json",kc={"Content-Type":od+";charset=utf-8"},pg=/^\[|^\{(?!\{)/,qg={"[":/]$/,"{":/}$/},og=/^\)]\}',?\n/,td=M("$http"),Ea=$.$interpolateMinErr=M("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};var Df=function(){this.$get=["$window",
function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Sg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,sg={http:80,https:443,ftp:21},lb=M("$location"),tg=/^\s*[\\/]{2,}/,Tg={$$absUrl:"",
$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Sg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:xd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=
Lc(a);else if(F(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:xd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([wd,oc,nc],function(a){a.prototype=Object.create(Tg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==nc||!this.$$html5)throw lb("nostate");this.$$state=
x(b)?null:b;return this}});var Ua=M("$parse"),wg={}.constructor.prototype.valueOf,Qb=W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var Ug={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},qc=function(a){this.options=a};qc.prototype={constructor:qc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ug[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Ad(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Bd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=zd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,ug,vg,yd);this.state=this.stage=void 0;d.literal=Cd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||
"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();
if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Ed.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);V(a,b.$filter);var d,c;if(d=Bd(a))c=this.recurse(d);d=zd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?w:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Cd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
a.operator](f,b);case s.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return e.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var r=0;r<
g.length;++r)p.push(g[r](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=yd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var rc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new Ed(this.ast,b):new Dd(this.ast,b)};rc.prototype={constructor:rc,parse:function(a){return this.astCompiler.compile(a)}};var ua=M("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},sc=/_([a-z])/g,yg=M("$compile"),ca=z.document.createElement("a"),Id=
Da(z.location.href);Jd.$inject=["$document"];Xc.$inject=["$provide"];var Qd=22,Pd=".",uc="0";Kd.$inject=["$locale"];Md.$inject=["$locale"];var Jg={yyyy:aa("FullYear",4,0,!1,!0),yy:aa("FullYear",2,0,!0,!0),y:aa("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),LLLL:nb("Month",!1,!0),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",
1),sss:aa("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Sd(2),w:Sd(1),G:vc,GG:vc,GGG:vc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ig=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Hg=/^-?\d+$/;Ld.$inject=["$locale"];var Cg=ma(P),Dg=ma(vb);Nd.$inject=
["$parse"];var Ae=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),wb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});wb[c]=function(){return{restrict:"A",
priority:100,link:f}}}});q(ld,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Ng))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);wb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",
e=null);f.$observe(b,function(b){b?(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Mb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Pa(a.$name,
"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Vd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ce=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,e){d.addClass(Va).addClass(ob);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):w;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);R(n,Mb)})}}}}}]},Be=ce(),
Ne=ce(!0),Kg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Vg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Wg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Lg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,de=/^(\d{4,})-(\d{2})-(\d{2})$/,ee=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Cc=/^(\d{4,})-W(\d\d)$/,fe=/^(\d{4,})-(\d\d)$/,ge=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Xd=W();q(["date","datetime-local","month","time","week"],function(a){Xd[a]=!0});var he={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c)},date:pb("date",de,Nb(de,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":pb("datetimelocal",ee,Nb(ee,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:pb("time",ge,Nb(ge,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:pb("week",Cc,function(a,b){if(fa(a))return a;
if(E(a)){Cc.lastIndex=0;var d=Cc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Rd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:pb("month",fe,Nb(fe,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var g,h;if(v(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
if(v(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(v(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Zd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Wg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==S(d.ngTrim);x(d.name)&&b.attr("name",++rb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=S(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=S(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=v(d.min);f=v(d.max);e=v(d.step);var s=c.$render;c.$render=m&&v(q.rangeUnderflow)&&
v(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||Zd(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return qa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Rc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(he[P(g.type)]||he.text)(f,e,g,h[0],b,a,d,c)}}}}],Xg=/^(true|false|\d+)$/,
ef=function(){return{restrict:"A",priority:100,compile:function(a,b){return Xg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Fe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Yb(a)})}}}}],He=["$interpolate","$compile",function(a,
b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Ge=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
c.html(a.getTrustedHtml(d)||"")})}}}}],df=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ie=Ac("",!0),Ke=Ac("Odd",0),Je=Ac("Even",1),Le=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Me=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wc={},Yg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ca("ng-"+a);Wc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Yg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Pe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=ub(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Qe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,s,w,u,H=function(){w&&(w.remove(),
w=null);s&&(s.$destroy(),s=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(e,function(e){var m=function(a){!1===a||!v(h)||h&&!c.$eval(h)||b()},w=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){H();d.enter(a,null,f).done(m)});s=b;u=a;s.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||w!==q||(H(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(H(),n.template=null)})}}}}],
gf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){na.call(d[0]).match(/SVG/)?(d.empty(),a(Zc(f.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Re=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),cf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
e?S(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?S(a):a)});return b}});c.$formatters.push(function(a){if(C(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ud="ng-invalid",Va="ng-pristine",Rb="ng-dirty",qb=M("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);y(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){y(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw qb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},
$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!y(h.then))throw qb("nopromise",
h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},w):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Vd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var bf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,Zg=/(\s+|^)default(\s+|$)/;Bc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=R({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=S(d.replace(Zg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ae(a,this.$$options));ae(a,Pb.$$options);return new Bc(a)}};Pb=new Bc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ff=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Se=Ra({terminal:!0,priority:1E3}),$g=M("ngOptions"),ah=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
$e=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(ah);if(!n)throw $g("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,u=s&&d(s),w=s?function(a,b){return u(c,b)}:function(a){return la(a)},
x=function(a,b){return w(a,B(a,b))},t=d(n[2]||n[1]),z=d(n[3]||""),A=d(n[4]||""),K=d(n[8]),I={},B=q?function(a,b){I[q]=b;I[p]=a;return I}:function(a){I[p]=a;return I};return{trackBy:s,getTrackByValue:x,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=B(d[p],p),r=v(c,q),p=w(r,q),u=t(c,q),I=z(c,q),q=A(c,q),r=new e(p,r,u,I,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return s?Fa(a.viewValue):a.viewValue}}}}}var f=z.document.createElement("option"),e=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=t&&r.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];v(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=y.getOptions();var d={};z&&h.prepend(r.emptyOption);t.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),A.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=A,c=f.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(A);s.$render();s.$isEmpty(a)||(b=r.readValue(),(y.trackBy||w?qa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],w=k.multiple;l=0;for(var u=h.children(),x=u.length;l<x;l++)if(""===u[l].value){r.hasEmptyOption=!0;r.emptyOption=u.eq(l);break}var z=!!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,y=c(k.ngOptions,h,d),A=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};w?(r.writeValue=function(a){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(C(s.$viewValue))return s.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=t.selectValueMap[h.val()],c=t.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):z?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
t.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(s.$viewValue)},function(){s.$render()}));z&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables,
p)}}}}],Te=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+n+v,H=$.noop,y;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,u))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-
n));c===y||f&&ga(y)||(H(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),H=w,k()):H=e.$watch(f,k),y=c)})}}}],Ue=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var u,w,x,t,y={$id:la};r?u=a(r):(x=function(a,b){return la(b)},
t=function(a){return a});return function(a,d,e,g,l){u&&(w=function(b,c,d){v&&(y[v]=b);y[s]=c;y.$index=d;return u(a,y)});var m=W();a.$watchCollection(n,function(e){var g,n,r=d[0],u,y=W(),z,D,E,B,F,C,I;p&&(a[p]=e);if(ta(e))F=e,n=w||x;else for(I in n=w||t,F=[],e)va.call(e,I)&&"$"!==I.charAt(0)&&F.push(I);z=F.length;I=Array(z);for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],B=n(D,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,B,E);I[g]={id:B,
scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=ub(C.clone);b.leave(B);if(B[0].parentNode)for(g=0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(ub(C.clone),null,r);r=C.clone[C.clone.length-1];f(C.scope,g,s,E,v,D,z)}else l(function(a,c){C.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;f(C.scope,g,s,E,v,D,z)});m=
y})}}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Xe=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var s=ub(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ze=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),bh=M("ngTransclude"),af=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw bh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==
Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ce=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ch={$setViewValue:w,$render:w},dh=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}var e=this,g=new Qa;e.selectValueMap={};e.ngModelCtrl=ch;e.multiple=!1;e.unknownOption=D(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+la(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=
function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?(e.removeUnknownOption(),c=la(b),a.val(c in e.selectValueMap?c:b),f(D(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Pa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,
c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");v(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=la(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();
var d,f=b.prop("selected");v(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&
-1!==a.indexOf(b)||a===b)&&c(!0)})}}],De=function(){return{restrict:"E",require:["select","?ngModel"],controller:dh,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=
function(a){var c=new Qa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))||v(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||qa(g,e.$viewValue)||(g=ra(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=w},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ee=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,
d){var c,f;v(d.ngValue)||(v(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Tc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Sc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>
f||c.$isEmpty(b)||b.length<=f}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load angular more than once."):(ue(),xe($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",
{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==e?"one":"other"}})}]),D(function(){pe(z.document,Mc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
