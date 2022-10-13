"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7536:function(e,t,r){r.d(t,{cI:function(){return eg}});var i=r(7294),a=e=>"checkbox"===e.type,s=e=>e instanceof Date,l=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&n(e)&&!s(e),o=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,h=(e,t,r)=>{if(!t||!u(e))return r;let i=c(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return y(i)||i===e?y(e[t])?r:e[t]:i};let m={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},p={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};i.createContext(null);var v=(e,t,r,i=!0)=>{let a={defaultValues:t._defaultValues};for(let s in e)Object.defineProperty(a,s,{get(){let a=s;return t._proxyFormState[a]!==g.all&&(t._proxyFormState[a]=!i||g.all),r&&(r[a]=!0),e[a]}});return a},b=e=>u(e)&&!Object.keys(e).length,A=(e,t,r)=>{let{name:i,...a}=e;return b(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||g.all))},V=e=>Array.isArray(e)?e:[e],_=e=>"string"==typeof e,w=(e,t,r,i)=>{let a=Array.isArray(e);return _(e)?(i&&t.watch.add(e),h(r,e)):a?e.map(e=>(i&&t.watch.add(e),h(r,e))):(i&&(t.watchAll=!0),r)},F=e=>"function"==typeof e,k=e=>{for(let t in e)if(F(e[t]))return!0;return!1},S=(e,t,r,i,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:a||!0}}:{},x=e=>/^\w*$/.test(e),D=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,t,r){let i=-1,a=x(t)?[t]:D(t),s=a.length,l=s-1;for(;++i<s;){let n=a[i],o=r;if(i!==l){let d=e[n];o=u(d)||Array.isArray(d)?d:isNaN(+a[i+1])?{}:[]}e[n]=o,e=e[n]}return e}let O=(e,t,r)=>{for(let i of r||Object.keys(e)){let a=h(e,i);if(a){let{_f:s,...l}=a;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else u(l)&&O(l,t)}}};var E=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),T=(e,t,r)=>{let i=c(h(e,r));return C(i,"root",t[r]),C(e,r,i),e},L=e=>"boolean"==typeof e,U=e=>"file"===e.type,B=e=>_(e)||i.isValidElement(e),j=e=>"radio"===e.type,N=e=>e instanceof RegExp;let M={value:!1,isValid:!1},q={value:!0,isValid:!0};var R=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?q:{value:e[0].value,isValid:!0}:q:M}return M};let H={isValid:!1,value:null};var I=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,H):H;function P(e,t,r="validate"){if(B(e)||Array.isArray(e)&&e.every(B)||L(e)&&!e)return{type:r,message:B(e)?e:"",ref:t}}var $=e=>u(e)&&!N(e)?e:{value:e,message:""},G=async(e,t,r,i,s)=>{let{ref:n,refs:o,required:d,maxLength:f,minLength:c,min:y,max:h,pattern:m,validate:g,name:v,valueAsNumber:A,mount:V,disabled:w}=e._f;if(!V||w)return{};let k=o?o[0]:n,x=e=>{i&&k.reportValidity&&(k.setCustomValidity(L(e)?"":e||" "),k.reportValidity())},D={},C=j(n),O=a(n),E=(A||U(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=S.bind(null,v,r,D),M=(e,t,r,i=p.maxLength,a=p.minLength)=>{let s=e?t:r;D[v]={type:e?i:a,message:s,ref:n,...T(e?i:a,s)}};if(s?!Array.isArray(t)||!t.length:d&&(!(C||O)&&(E||l(t))||L(t)&&!t||O&&!R(o).isValid||C&&!I(o).isValid)){let{value:q,message:H}=B(d)?{value:!!d,message:d}:$(d);if(q&&(D[v]={type:p.required,message:H,ref:k,...T(p.required,H)},!r))return x(H),D}if(!E&&(!l(y)||!l(h))){let G,W,z=$(h),J=$(y);if(l(t)||isNaN(t)){let K=n.valueAsDate||new Date(t);_(z.value)&&(G=K>new Date(z.value)),_(J.value)&&(W=K<new Date(J.value))}else{let Q=n.valueAsNumber||(t?+t:t);l(z.value)||(G=Q>z.value),l(J.value)||(W=Q<J.value)}if((G||W)&&(M(!!G,z.message,J.message,p.max,p.min),!r))return x(D[v].message),D}if((f||c)&&!E&&(_(t)||s&&Array.isArray(t))){let X=$(f),Y=$(c),Z=!l(X.value)&&t.length>X.value,ee=!l(Y.value)&&t.length<Y.value;if((Z||ee)&&(M(Z,X.message,Y.message),!r))return x(D[v].message),D}if(m&&!E&&_(t)){let{value:et,message:er}=$(m);if(N(et)&&!t.match(et)&&(D[v]={type:p.pattern,message:er,ref:n,...T(p.pattern,er)},!r))return x(er),D}if(g){if(F(g)){let ei=await g(t),ea=P(ei,k);if(ea&&(D[v]={...ea,...T(p.validate,ea.message)},!r))return x(ea.message),D}else if(u(g)){let es={};for(let el in g){if(!b(es)&&!r)break;let en=P(await g[el](t),k,el);en&&(es={...en,...T(el,en.message)},x(en.message),r&&(D[v]=es))}if(!b(es)&&(D[v]={ref:k,...es},!r))return D}}return x(!0),D},W=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},z="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function J(e){let t,r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(z&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||W(e))for(let i in e)t[i]=J(e[i]);else t=e;return t}var K=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched});function Q(e){for(let t in e)if(!y(e[t]))return!1;return!0}function X(e,t){let r=x(t)?[t]:D(t),i=1==r.length?e:function(e,t){let r=t.slice(0,-1).length,i=0;for(;i<r;)e=y(e)?i++:e[t[i++]];return e}(e,r),a=r[r.length-1],s;i&&delete i[a];for(let l=0;l<r.slice(0,-1).length;l++){let n=-1,o,d=r.slice(0,-(l+1)),f=d.length-1;for(l>0&&(s=e);++n<d.length;){let c=d[n];o=o?o[c]:e[c],f===n&&(u(o)&&b(o)||Array.isArray(o)&&Q(o))&&(s?delete s[c]:delete e[c]),s=o}}return e}function Y(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe(){e=e.filter(e=>e!==t)}}),i=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:i}}var Z=e=>l(e)||!n(e);function ee(e,t){if(Z(e)||Z(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let a of r){let l=e[a];if(!i.includes(a))return!1;if("ref"!==a){let n=t[a];if(s(l)&&s(n)||u(l)&&u(n)||Array.isArray(l)&&Array.isArray(n)?!ee(l,n):l!==n)return!1}}return!0}var et=e=>{let t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},er=e=>"select-multiple"===e.type,ei=e=>j(e)||a(e),ea=e=>et(e)&&e.isConnected;function es(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let i in e)Array.isArray(e[i])||u(e[i])&&!k(e[i])?(t[i]=Array.isArray(e[i])?[]:{},es(e[i],t[i])):l(e[i])||(t[i]=!0);return t}var el=(e,t)=>(function e(t,r,i){let a=Array.isArray(t);if(u(t)||a)for(let s in t)Array.isArray(t[s])||u(t[s])&&!k(t[s])?y(r)||Z(i[s])?i[s]=Array.isArray(t[s])?es(t[s],[]):{...es(t[s])}:e(t[s],l(r)?{}:r[s],i[s]):i[s]=!ee(t[s],r[s]);return i})(e,t,es(t)),en=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&_(e)?new Date(e):i?i(e):e;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:U(t)?t.files:j(t)?I(e.refs).value:er(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?R(e.refs).value:en(y(t.value)?e.ref.value:t.value,e)}var eo=(e,t,r,i)=>{let a={};for(let s of e){let l=h(t,s);l&&C(a,s,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:i}},ed=e=>y(e)?void 0:N(e)?e.source:u(e)?N(e.value)?e.value.source:e.value:e,ef=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ec(e,t,r){let i=h(e,r);if(i||x(r))return{error:i,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),l=h(t,s),n=h(e,s);if(l&&!Array.isArray(l)&&r!==s)break;if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var ey=(e,t,r,i,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?i.isOnBlur:a.isOnBlur)?!e:(r?!i.isOnChange:!a.isOnChange)||e),eh=(e,t)=>!c(h(e,t)).length&&X(e,t);let em={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function eg(e={}){let t=i.useRef(),[r,n]=i.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...function(e={}){let t={...em,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},n=J(t.defaultValues)||{},u=t.shouldUnregister?{}:J(n),d={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v,A=0,k={},S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:Y(),array:Y(),state:Y()},D=K(t.mode),B=K(t.reValidateMode),j=t.criteriaMode===g.all,N=e=>t=>{clearTimeout(A),A=window.setTimeout(e,t)},M=async e=>{let a=!1;return S.isValid&&(a=t.resolver?b((await $()).errors):await Q(i,!0),e||a===r.isValid||(r.isValid=a,x.state.next({isValid:a}))),a},q=(e,t=[],a,s,l=!0,o=!0)=>{if(s&&a){if(d.action=!0,o&&Array.isArray(h(i,e))){let f=a(h(i,e),s.argA,s.argB);l&&C(i,e,f)}if(S.errors&&o&&Array.isArray(h(r.errors,e))){let c=a(h(r.errors,e),s.argA,s.argB);l&&C(r.errors,e,c),eh(r.errors,e)}if(S.touchedFields&&o&&Array.isArray(h(r.touchedFields,e))){let y=a(h(r.touchedFields,e),s.argA,s.argB);l&&C(r.touchedFields,e,y)}S.dirtyFields&&(r.dirtyFields=el(n,u)),x.state.next({isDirty:eg(e,t),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else C(u,e,t)},R=(e,t)=>{C(r.errors,e,t),x.state.next({errors:r.errors})},H=(e,t,r,a)=>{let s=h(i,e);if(s){let l=h(u,e,y(r)?h(n,e):r);y(l)||a&&a.defaultChecked||t?C(u,e,t?l:eu(s._f)):eb(e,l),d.mount&&M()}},I=(e,t,i,a,s)=>{let l=!1,u={name:e},o=h(r.touchedFields,e);if(S.isDirty){let d=r.isDirty;r.isDirty=u.isDirty=eg(),l=d!==u.isDirty}if(S.dirtyFields&&(!i||a)){let f=h(r.dirtyFields,e),c=ee(h(n,e),t);c?X(r.dirtyFields,e):C(r.dirtyFields,e,!0),u.dirtyFields=r.dirtyFields,l=l||f!==h(r.dirtyFields,e)}return i&&!o&&(C(r.touchedFields,e,i),u.touchedFields=r.touchedFields,l=l||S.touchedFields&&o!==i),l&&s&&x.state.next(u),l?u:{}},P=async(t,i,a,s)=>{let l=h(r.errors,t),n=S.isValid&&r.isValid!==i;if(e.delayError&&a?(v=N(()=>R(t,a)))(e.delayError):(clearTimeout(A),v=null,a?C(r.errors,t,a):X(r.errors,t)),(a?!ee(l,a):l)||!b(s)||n){let u={...s,...n?{isValid:i}:{},errors:r.errors,name:t};r={...r,...u},x.state.next(u)}k[t]--,S.isValidating&&!Object.values(k).some(e=>e)&&(x.state.next({isValidating:!1}),k={})},$=async e=>t.resolver?await t.resolver({...u},t.context,eo(e||p.mount,i,t.criteriaMode,t.shouldUseNativeValidation)):{},W=async e=>{let{errors:t}=await $();if(e)for(let i of e){let a=h(t,i);a?C(r.errors,i,a):X(r.errors,i)}else r.errors=t;return t},Q=async(e,i,a={valid:!0})=>{for(let s in e){let l=e[s];if(l){let{_f:n,...o}=l;if(n){let d=p.array.has(n.name),f=await G(l,h(u,n.name),j,t.shouldUseNativeValidation,d);if(f[n.name]&&(a.valid=!1,i))break;i||(h(f,n.name)?d?T(r.errors,f,n.name):C(r.errors,n.name,f[n.name]):X(r.errors,n.name))}o&&await Q(o,i,a)}}return a.valid},es=()=>{for(let e of p.unMount){let t=h(i,e);t&&(t._f.refs?t._f.refs.every(e=>!ea(e)):!ea(t._f.ref))&&eC(e)}p.unMount=new Set},eg=(e,t)=>(e&&t&&C(u,e,t),!ee(eF(),n)),ep=(e,t,r)=>{let i={...d.mount?u:y(t)?n:_(e)?{[e]:t}:t};return w(e,p,i,r)},ev=t=>c(h(d.mount?u:n,t,e.shouldUnregister?h(n,t,[]):[])),eb=(e,t,r={})=>{let s=h(i,e),n=t;if(s){let o=s._f;o&&(o.disabled||C(u,e,en(t,o)),n=z&&et(o.ref)&&l(t)?"":t,er(o.ref)?[...o.ref.options].forEach(e=>e.selected=n.includes(e.value)):o.refs?a(o.ref)?o.refs.length>1?o.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find(t=>t===e.value):n===e.value)):o.refs[0]&&(o.refs[0].checked=!!n):o.refs.forEach(e=>e.checked=e.value===n):U(o.ref)?o.ref.value="":(o.ref.value=n,o.ref.type||x.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&I(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},eA=(e,t,r)=>{for(let a in t){let l=t[a],n=`${e}.${a}`,u=h(i,n);!p.array.has(e)&&Z(l)&&(!u||u._f)||s(l)?eb(n,l,r):eA(n,l,r)}},eV=(e,t,a={})=>{let s=h(i,e),o=p.array.has(e),d=J(t);C(u,e,d),o?(x.array.next({name:e,values:u}),(S.isDirty||S.dirtyFields)&&a.shouldDirty&&(r.dirtyFields=el(n,u),x.state.next({name:e,dirtyFields:r.dirtyFields,isDirty:eg(e,d)}))):!s||s._f||l(d)?eb(e,d,a):eA(e,d,a),E(e,p)&&x.state.next({}),x.watch.next({name:e})},e_=async e=>{let a=e.target,s=a.name,l=h(i,s);if(l){let n,d,f=a.type?eu(l._f):o(e),c=e.type===m.BLUR||e.type===m.FOCUS_OUT,y=!ef(l._f)&&!t.resolver&&!h(r.errors,s)&&!l._f.deps||ey(c,h(r.touchedFields,s),r.isSubmitted,B,D),g=E(s,p,c);C(u,s,f),c?(l._f.onBlur&&l._f.onBlur(e),v&&v(0)):l._f.onChange&&l._f.onChange(e);let A=I(s,f,c,!1),V=!b(A)||g;if(c||x.watch.next({name:s,type:e.type}),y)return V&&x.state.next({name:s,...g?{}:A});if(!c&&g&&x.state.next({}),k[s]=(k[s],1),x.state.next({isValidating:!0}),t.resolver){let{errors:_}=await $([s]),w=ec(r.errors,i,s),F=ec(_,i,w.name||s);n=F.error,s=F.name,d=b(_)}else n=(await G(l,h(u,s),j,t.shouldUseNativeValidation))[s],d=await M(!0);l._f.deps&&ew(l._f.deps),P(s,d,n,A)}},ew=async(e,a={})=>{let s,l,n=V(e);if(x.state.next({isValidating:!0}),t.resolver){let u=await W(y(e)?e:n);s=b(u),l=e?!n.some(e=>h(u,e)):s}else e?((l=(await Promise.all(n.map(async e=>{let t=h(i,e);return await Q(t&&t._f?{[e]:t}:t)}))).every(Boolean))||r.isValid)&&M():l=s=await Q(i);return x.state.next({...!_(e)||S.isValid&&s!==r.isValid?{}:{name:e},...t.resolver?{isValid:s}:{},errors:r.errors,isValidating:!1}),a.shouldFocus&&!l&&O(i,e=>h(r.errors,e),e?n:p.mount),l},eF=e=>{let t={...n,...d.mount?u:{}};return y(e)?t:_(e)?h(t,e):e.map(e=>h(t,e))},ek=(e,t)=>({invalid:!!h((t||r).errors,e),isDirty:!!h((t||r).dirtyFields,e),isTouched:!!h((t||r).touchedFields,e),error:h((t||r).errors,e)}),eS=e=>{e?V(e).forEach(e=>X(r.errors,e)):r.errors={},x.state.next({errors:r.errors})},ex=(e,t,a)=>{let s=(h(i,e,{_f:{}})._f||{}).ref;C(r.errors,e,{...t,ref:s}),x.state.next({name:e,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&s&&s.focus&&s.focus()},eD=(e,t)=>F(e)?x.watch.subscribe({next:r=>e(ep(void 0,t),r)}):ep(e,t,!0),eC=(e,a={})=>{for(let s of e?V(e):p.mount)p.mount.delete(s),p.array.delete(s),h(i,s)&&(a.keepValue||(X(i,s),X(u,s)),a.keepError||X(r.errors,s),a.keepDirty||X(r.dirtyFields,s),a.keepTouched||X(r.touchedFields,s),t.shouldUnregister||a.keepDefaultValue||X(n,s));x.watch.next({}),x.state.next({...r,...a.keepDirty?{isDirty:eg()}:{}}),a.keepIsValid||M()},eO=(e,r={})=>{let a=h(i,e),s=L(r.disabled);return C(i,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...r}}),p.mount.add(e),a?s&&C(u,e,r.disabled?void 0:h(u,e,eu(a._f))):H(e,!0,r.value),{...s?{disabled:r.disabled}:{},...t.shouldUseNativeValidation?{required:!!r.required,min:ed(r.min),max:ed(r.max),minLength:ed(r.minLength),maxLength:ed(r.maxLength),pattern:ed(r.pattern)}:{},name:e,onChange:e_,onBlur:e_,ref(s){if(s){eO(e,r),a=h(i,e);let l=y(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,u=ei(l),o=a._f.refs||[];(u?!o.find(e=>e===l):l!==a._f.ref)&&(C(i,e,{_f:{...a._f,...u?{refs:[...o.filter(ea),l,...Array.isArray(h(n,e))?[{}]:[],],ref:{type:l.type,name:e}}:{ref:l}}}),H(e,!1,void 0,l))}else(a=h(i,e,{}))._f&&(a._f.mount=!1),(t.shouldUnregister||r.shouldUnregister)&&!(f(p.array,e)&&d.action)&&p.unMount.add(e)}}},eE=(e,a)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let l=!0,n=J(u);x.state.next({isSubmitting:!0});try{if(t.resolver){let{errors:o,values:d}=await $();r.errors=o,n=d}else await Q(i);b(r.errors)?(x.state.next({errors:{},isSubmitting:!0}),await e(n,s)):(a&&await a({...r.errors},s),t.shouldFocusError&&O(i,e=>h(r.errors,e),p.mount))}catch(f){throw l=!1,f}finally{r.isSubmitted=!0,x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:b(r.errors)&&l,submitCount:r.submitCount+1,errors:r.errors})}},eT=(e,t={})=>{h(i,e)&&(y(t.defaultValue)?eV(e,h(n,e)):(eV(e,t.defaultValue),C(n,e,t.defaultValue)),t.keepTouched||X(r.touchedFields,e),t.keepDirty||(X(r.dirtyFields,e),r.isDirty=t.defaultValue?eg(e,h(n,e)):eg()),!t.keepError&&(X(r.errors,e),S.isValid&&M()),x.state.next({...r}))},eL=(t,a={})=>{let s=t||n,l=J(s),o=t&&!b(t)?l:n;if(a.keepDefaultValues||(n=s),!a.keepValues){if(a.keepDirtyValues)for(let f of p.mount)h(r.dirtyFields,f)?C(o,f,h(u,f)):eV(f,h(o,f));else{if(z&&y(t))for(let c of p.mount){let m=h(i,c);if(m&&m._f){let g=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;try{if(et(g)){g.closest("form").reset();break}}catch(v){}}}i={}}u=e.shouldUnregister?a.keepDefaultValues?J(n):{}:l,x.array.next({values:o}),x.watch.next({values:o})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!S.isValid||!!a.keepIsValid,d.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?r.isDirty:!!(a.keepDefaultValues&&!ee(t,n)),isSubmitted:!!a.keepIsSubmitted&&r.isSubmitted,dirtyFields:a.keepDirty||a.keepDirtyValues?r.dirtyFields:a.keepDefaultValues&&t?el(n,t):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eU=(e,t)=>eL(F(e)?e(u):e,t),eB=(e,t={})=>{let r=h(i,e),a=r&&r._f;if(a){let s=a.refs?a.refs[0]:a.ref;s.focus&&(s.focus(),t.shouldSelect&&s.select())}};return{control:{register:eO,unregister:eC,getFieldState:ek,_executeSchema:$,_getWatch:ep,_getDirty:eg,_updateValid:M,_removeUnmounted:es,_updateFieldArray:q,_getFieldArray:ev,_subjects:x,_proxyFormState:S,get _fields(){return i},get _formValues(){return u},get _stateFlags(){return d},set _stateFlags(value){d=value},get _defaultValues(){return n},get _names(){return p},set _names(value){p=value},get _formState(){return r},set _formState(value){r=value},get _options(){return t},set _options(value){t={...t,...value}}},trigger:ew,register:eO,handleSubmit:eE,watch:eD,setValue:eV,getValues:eF,reset:eU,resetField:eT,clearErrors:eS,unregister:eC,setError:ex,setFocus:eB,getFieldState:ek}}(e),formState:r});let u=t.current.control;return u._options=e,!function(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:u._subjects.state,callback:i.useCallback(e=>{A(e,u._proxyFormState,!0)&&(u._formState={...u._formState,...e},n({...u._formState}))},[u])}),i.useEffect(()=>{u._stateFlags.mount||(u._proxyFormState.isValid&&u._updateValid(),u._stateFlags.mount=!0),u._stateFlags.watch&&(u._stateFlags.watch=!1,u._subjects.state.next({})),u._removeUnmounted()}),t.current.formState=v(r,u),t.current}}}]);