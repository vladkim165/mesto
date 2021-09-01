!function(){"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".popup_profile"),n=t.querySelector(".form__field_input_name"),o=t.querySelector(".form__field_input_bio"),r=document.querySelector(".elements__list"),i=document.querySelector(".profile__add-button"),u=document.querySelector(".popup_open_add-form"),a=t.querySelector(".form"),c=u.querySelector(".form"),s=document.querySelector(".popup_change-avatar").querySelector(".form"),l=document.querySelector(".profile__avatar-img"),f={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_disabled",inputErrorClass:"form__field_type_error",errorClass:"form__field-error_active",hiddenErrorClass:".form__field-error"};function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n,o,r,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_name",void 0),p(this,"_link",void 0),p(this,"_cardSelector",void 0),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=o,this._handleConfirmDeletion=r,this._handleLikeCard=i,this._handleUnlikeCard=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__image").src=this._link,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(){e._element.querySelector(".element__like-button_active")?e._handleUnlikeCard():e._element.querySelector(".element__like-button_active")||e._handleLikeCard(),e._likeCard()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleConfirmDeletion()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_likeCard",value:function(){this._element.querySelector(".element__like-button").classList.toggle("element__like-button_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"setLikes",value:function(e){this._element.querySelector(".element__like-counter").textContent=e.likes.length}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_formElement",void 0),m(this,"_formSelector",void 0),m(this,"_inputSelector",void 0),m(this,"_submitButtonSelector",void 0),m(this,"_inactiveButtonClass",void 0),m(this,"_inputErrorClass",void 0),m(this,"_errorClass",void 0),m(this,"_hiddenErrorClass",void 0),m(this,"_buttonElement",void 0),m(this,"_inputList",void 0),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._hiddenErrorClass=t.hiddenErrorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasOnlyValidInput",value:function(){return this._inputList.every((function(e){return e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasOnlyValidInput()?(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1):this.disableButton()}},{key:"_setEventListenersToForm",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListenersToForm(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}}])&&_(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&v(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeByEsc=function(e){n._handleEscClose(e)},this._container=this._popup.querySelector(".popup__container"),this.submitButton=this._popup.querySelector(".form__save-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEsc),this._container&&this._container.classList.add("popup__container_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._closeByEsc),this._popup.classList.remove("popup_opened"),this._container&&this._container.classList.remove("popup__container_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}},{key:"loading",value:function(e,t,n){e&&(this.submitButton.textContent=t,console.log("asd"),console.log(this.submitButton)),e||(this.submitButton.textContent=n)}}])&&k(t.prototype,n),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._backgroundImage=t._popup.querySelector(".popup__background-image"),t._popupTitle=t._popup.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"open",value:function(e){this._backgroundImage.src=e.link,this._backgroundImage.alt=e.name,this._popupTitle.textContent=e.name,C(O(u.prototype),"open",this).call(this)}}])&&E(t.prototype,n),u}(g);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".form"),n._handleFormSubmit=o,n._inputList=n._form.querySelectorAll(".form__field"),n.submitEvent=function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues())},n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){T(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this.submitEvent)}},{key:"close",value:function(){T(R(u.prototype),"close",this).call(this),this._form.reset()}}])&&q(t.prototype,n),u}(g);function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(){function e(t){var n=t.nameSelector,o=t.infoSelector,r=t.profilePicture;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector(n),this.info=document.querySelector(o),this.avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._values={},this._values.name=this.name.textContent,this._values.info=this.info.textContent,this._values}},{key:"setUserInfo",value:function(e){this.name.textContent=e.name,this.info.textContent=e.about,this.avatar.src=e.avatar}}])&&z(t.prototype,n),e}();function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".form"),t}return t=u,(n=[{key:"handleFormSubmit",value:function(e){var t=this;this._form.addEventListener("submit",(function n(o){o.preventDefault(),e(),t._form.removeEventListener("submit",n)}))}}])&&N(t.prototype,n),u}(g);function H(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.authorizationToken=t}var t,n;return t=e,(n=[{key:"getCardItems",value:function(e){return fetch(e,{headers:{authorization:this.authorizationToken}}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - cardArray")})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e,t){return fetch(t,{method:"PATCH",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.info})}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - userInfoPatch")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(e){return fetch(e,{headers:{authorization:this.authorizationToken}}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - userInfo")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"addNewCard",value:function(e,t){return fetch(t,{method:"POST",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - addCard")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e,t){return fetch("".concat(e,"/").concat(t),{method:"DELETE",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - cardDeletion")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"likeCard",value:function(e,t){return fetch("".concat(e,"/likes/").concat(t),{method:"PUT",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - cardLike")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"unlikeCard",value:function(e,t){return fetch("".concat(e,"/likes/").concat(t),{method:"DELETE",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - cardUnlike")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"changeAvatar",value:function(e,t){return fetch(e,{method:"PATCH",headers:{authorization:this.authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Not ok - changeAvatar")})).then((function(e){return e})).catch((function(e){return console.log(e)}))}}])&&H(t.prototype,n),e}(),G=new x({handleFormSubmit:function(e){G.loading(!0,"Сохранение...","Сохранить"),W.changeAvatar("https://mesto.nomoreparties.co/v1/cohort-27/users/me/avatar",e.link).then((function(e){ne.setUserInfo(e)})).finally((function(){G.loading(!1,"Сохранение...","Сохранить"),G.close()}))}},".popup_change-avatar"),K=new L(".popup_open_background-image"),Q=new J(".popup_delete-confirmation"),W=new M("a5607433-7f53-40eb-a48e-ab0174e03e0a"),X=function(e){var t=new d(e,".card-template",(function(){return K.open(e)}),(function(){Q.open(),Q.handleFormSubmit((function(){Q.loading(!0,"Удаление...","Да"),W.deleteCard("https://mesto.nomoreparties.co/v1/cohort-27/cards",e._id).then((function(e){t.deleteCard(),Q.close(),Q.loading(!1,"Удаление...","Да")}))}))}),(function(){W.likeCard("https://mesto.nomoreparties.co/v1/cohort-27/cards",e._id).then((function(e){t.setLikes(e)}))}),(function(){W.unlikeCard("https://mesto.nomoreparties.co/v1/cohort-27/cards",e._id).then((function(e){t.setLikes(e)}))}));return t.generateCard()},Y=new b({renderer:function(e){var t=X(e),n=t.querySelector(".element__delete-button"),o=t.querySelector(".element__like-button");t.querySelector(".element__like-counter").textContent=e.likes.length,W.getUserInfo("https://nomoreparties.co/v1/cohort-27/users/me").then((function(r){e.owner._id!==r._id&&n.remove(),e.likes.length>0&&e.likes.forEach((function(e){e._id===r._id&&o.classList.add("element__like-button_active")})),Y.addItem(t)}))}},r),Z=new x({handleFormSubmit:function(e){Z.loading(!0,"Создание...","Создать"),W.addNewCard(e,"https://mesto.nomoreparties.co/v1/cohort-27/cards").then((function(e){var t=X(e);Y.addItem(t),Z.close()})).finally((function(){Z.loading(!1,"Создание...","Создать")}))}},".popup_open_add-form"),$=new y(f,a),ee=new y(f,c),te=new y(f,s),ne=new V({nameSelector:".profile__title",infoSelector:".profile__subtitle",profilePicture:".profile__avatar-img"}),oe=new x({handleFormSubmit:function(e){oe.loading(!0,"Сохранение...","Сохранить"),W.setUserInfo(e,"https://nomoreparties.co/v1/cohort-27/users/me").then((function(e){ne.setUserInfo(e),oe.close()})).finally((function(){oe.loading(!1,"Сохранение...","Сохранить")}))}},".popup_profile");W.getCardItems("https://mesto.nomoreparties.co/v1/cohort-27/cards").then((function(e){Y.renderItems(e)})),K.setEventListeners(),Q.setEventListeners(),W.getUserInfo("https://nomoreparties.co/v1/cohort-27/users/me").then((function(e){ne.setUserInfo(e)})),Z.setEventListeners(),i.addEventListener("click",(function(){Z.open(),ee.resetValidation()})),oe.setEventListeners(),e.addEventListener("click",(function(){oe.open(),$.resetValidation(),n.value=ne.getUserInfo().name,o.value=ne.getUserInfo().info})),l.addEventListener("click",(function(){G.open(),te.resetValidation()})),G.setEventListeners(),$.enableValidation(),ee.enableValidation(),te.enableValidation()}();