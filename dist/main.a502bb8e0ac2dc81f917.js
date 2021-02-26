(()=>{"use strict";var e={3275:(e,t,n)=>{const s={PLAYERS_KEYCODES:{1:[87,68,83,65],2:[85,75,74,72],3:[38,39,40,37]},SPACE_KEYCODE:32,DRAW_INTERVAL:33,DEFAULT_DIFFICULTY:7,BONUS_FIELD_TIME:15,BONUS_ACTIVE_TIME:10,RABBIT_NUTRITIONALLY:5,RABBIT_MAX_HEALTH:99.999999,RABBIT_MIN_HEALTH:10,FIELD_WIDTH:40,FIELD_HEIGHT:25};function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw r}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";if(r(this,e),this.el=document.querySelector(t),this.displayStyle=n,this.toDeactivate=[],!this.el)throw new Error("Section selector is null.");this.el.style.display="none"}return o(e,[{key:"activate",value:function(){this.el.style.display=this.displayStyle,this.deactivateOther()}},{key:"deactivate",value:function(){this.el.style.display="none"}},{key:"deactivateOther",value:function(){var e,t=i(this.toDeactivate);try{for(t.s();!(e=t.n()).done;){e.value.deactivate()}}catch(e){t.e(e)}finally{t.f()}}},{key:"addToDeactivate",value:function(e){this.toDeactivate.push(e)}}]),e}(),c=function(){function e(t){r(this,e),this.gameClass=t,this.screenWarning=new u("#screen-warning"),this.menu=new u("#menu"),this.game=new u("#game"),this.pauseMenu=new u("#pause-menu"),this.endMenu=new u("#end-menu"),this.menu.addToDeactivate(this.game),this.game.addToDeactivate(this.menu),this.checkScreen=this.checkScreen.bind(this),this.playersChoosed=!1}return o(e,[{key:"init",value:function(){var e=this;this.checkScreen(),this.menu.activate();var t=document.querySelector("#player-1"),n=document.querySelector("#player-2"),a=document.querySelector("#player-3"),r=document.querySelector("#menu-start-button"),l=document.querySelector("#play-again"),o=document.querySelector("#go-to-menu");t.addEventListener("click",(function(){e.shoosePlayerButtonClickHandler(t,r,1)})),n.addEventListener("click",(function(){e.shoosePlayerButtonClickHandler(n,r,2)})),a.addEventListener("click",(function(){e.shoosePlayerButtonClickHandler(a,r,3)})),r.addEventListener("click",(function(){e.playersChoosed&&(e.gameClass.sound.play("click"),e.toGame(),e.gameClass.start())})),l.addEventListener("click",(function(){e.gameClass.field.clean();var t,n=i(e.gameClass.players);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.cleanBonuses(),s.snake.destroy(),s.createSnake(),s.score=0,s.picks=0}}catch(e){n.e(e)}finally{n.f()}e.endMenu.deactivate(),e.gameClass.start()})),o.addEventListener("click",(function(){e.gameClass.field.clean();var l,o=i(e.gameClass.players);try{for(o.s();!(l=o.n()).done;){l.value.destroy()}}catch(e){o.e(e)}finally{o.f()}e.gameClass.players=[],e.gameClass.difficulty=s.DEFAULT_DIFFICULTY,e.gameClass.state=null,e.gameClass.results=null,r.classList.add("disabled"),t.classList.remove("active"),n.classList.remove("active"),a.classList.remove("active"),e.createChooseDifficultyButtons(),e.endMenu.deactivate(),e.menu.activate()})),this.createChooseDifficultyButtons(),window.addEventListener("resize",this.checkScreen),window.addEventListener("keydown",(function(t){t.keyCode===s.SPACE_KEYCODE&&("play"===e.gameClass.state?(e.gameClass.pause(),e.pauseMenu.activate()):"pause"===e.gameClass.state&&(e.gameClass.start(),e.pauseMenu.deactivate()))})),this.initMusicButton(),this.initSoundButton()}},{key:"checkScreen",value:function(){window.innerWidth<1e3||window.innerHeight<700?this.screenWarning.activate():this.screenWarning.deactivate()}},{key:"toMenu",value:function(){this.menu.activate()}},{key:"toGame",value:function(){this.game.activate()}},{key:"openEndMenu",value:function(){this.endMenu.activate();var e=document.querySelector("#top-list-wrap");e.innerHTML="";var t=[];for(var n in this.gameClass.results)t[n]=this.gameClass.results[n];for(var s=0;s<t.length;s++)if(t[s]){var i=document.createElement("div");i.classList.add("top-item"),null!==t[s].playerID&&i.classList.add("player-"+t[s].playerID);var a=document.createElement("div");a.classList.add("item-title"),a.innerText=s;var r=document.createElement("div");if(r.classList.add("item-score-value"),r.innerText=t[s].score,i.append(a),i.append(r),e.append(i),3===s&&t.length>4){var l=document.createElement("div");l.classList.add("top-list-divider"),l.innerText="...",e.append(l)}}}},{key:"shoosePlayerButtonClickHandler",value:function(e,t,n){this.gameClass.sound.play("click"),e.classList.toggle("active"),this.gameClass.togglePlayer(n),this.gameClass.players.length<1?(this.playersChoosed=!1,t.classList.add("disabled")):(this.playersChoosed=!0,t.classList.remove("disabled"))}},{key:"createChooseDifficultyButtons",value:function(){var e=this,t=document.querySelector("#choose-difficulty-wrap");t.innerHTML="";for(var n=function(n){var s=document.createElement("div");s.classList.add("choose-difficulty-button"),s.id="choose-difficulty-button-"+n,n<=e.gameClass.difficulty&&s.classList.add("active"),s.addEventListener("click",(function(){e.gameClass.sound.play("click"),e.gameClass.difficulty=n;for(var t=Array.from(document.querySelectorAll(".choose-difficulty-button")),s=1;s<=t.length;s++)s<=n?t[s-1].classList.add("active"):t[s-1].classList.remove("active")})),s.addEventListener("mouseover",(function(){for(var e=Array.from(document.querySelectorAll(".choose-difficulty-button")),t=1;t<=e.length;t++)t<=n&&e[t-1].classList.add("hovered")})),s.addEventListener("mouseout",(function(){for(var e=Array.from(document.querySelectorAll(".choose-difficulty-button")),t=1;t<=e.length;t++)t<=n&&e[t-1].classList.remove("hovered")})),t.append(s)},s=1;s<=20;s++)n(s)}},{key:"initMusicButton",value:function(){var e=this,t=document.querySelector("#music-button"),n=window.localStorage.getItem("music");void 0===n||"true"===n?(window.localStorage.setItem("music",!0),t.classList.add("active"),this.gameClass.sound.musicActive=!0):"false"===n&&(this.gameClass.sound.music.volume(0),this.gameClass.sound.musicActive=!1,t.classList.remove("active")),t.addEventListener("click",(function(n){t.classList.toggle("active"),e.gameClass.sound.toggleMusic()}))}},{key:"initSoundButton",value:function(){var e=this,t=document.querySelector("#sound-button"),n=window.localStorage.getItem("sound");void 0===n||"true"===n?(window.localStorage.setItem("sound",!0),t.classList.add("active"),this.gameClass.sound.soundActive=!0):"false"===n&&(this.gameClass.sound.music.volume(0),this.gameClass.sound.click.volume(0),this.gameClass.sound.snakesCollision.volume(0),this.gameClass.sound.rabbitEaten.volume(0),this.gameClass.sound.getBonus.volume(0),this.gameClass.sound.bonusEnd.volume(0),this.gameClass.sound.bonusError.volume(0),this.gameClass.sound.soundActive=!1,t.classList.remove("active")),t.addEventListener("click",(function(n){t.classList.toggle("active"),e.gameClass.sound.toggleSound()}))}}]),e}(),h=n(1367);function d(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.musicActive=null,this.soundActive=null,this.musicVolume=.3,this.soundVolume=.5,this.snakesCollisionVolume=1,this.music=new h.Howl({src:["sounds/music.mp3"],loop:!0,volume:this.musicVolume}),this.click=new h.Howl({src:["sounds/click.mp3"],volume:this.soundVolume}),this.rabbitEaten=new h.Howl({src:["sounds/rabbit-eaten.mp3"],volume:this.soundVolume}),this.snakesCollision=new h.Howl({src:["sounds/snakes-collision.mp3"],volume:this.snakesCollisionVolume}),this.getBonus=new h.Howl({src:["sounds/get-bonus.mp3"],volume:this.soundVolume}),this.bonusEnd=new h.Howl({src:["sounds/bonus-end.mp3"],volume:this.soundVolume}),this.bonusError=new h.Howl({src:["sounds/bonus-error.mp3"],volume:this.soundVolume})}var t,n,s;return t=e,(n=[{key:"play",value:function(e){this[e].play()}},{key:"stop",value:function(e){this[e].stop()}},{key:"toggleMusic",value:function(){this.musicActive?(this.music.fade(this.music.volume(),0,300),this.musicActive=!1,window.localStorage.setItem("music",!1)):(this.music.fade(0,this.musicVolume,300),this.musicActive=!0,window.localStorage.setItem("music",!0))}},{key:"toggleSound",value:function(){this.soundActive?(this.click.fade(this.click.volume(),0,300),this.snakesCollision.fade(this.snakesCollision.volume(),0,300),this.rabbitEaten.fade(this.rabbitEaten.volume(),0,300),this.getBonus.fade(this.getBonus.volume(),0,300),this.bonusEnd.fade(this.bonusEnd.volume(),0,300),this.bonusError.fade(this.bonusError.volume(),0,300),this.soundActive=!1,window.localStorage.setItem("sound",!1)):(this.click.fade(0,this.soundVolume,300),this.snakesCollision.fade(0,this.snakesCollision.volume(),300),this.rabbitEaten.fade(0,this.soundVolume,300),this.getBonus.fade(0,this.soundVolume,300),this.bonusEnd.fade(0,this.soundVolume,300),this.bonusError.fade(0,this.soundVolume,300),this.soundActive=!0,window.localStorage.setItem("sound",!0))}}])&&d(t.prototype,n),s&&d(t,s),e}();function v(e,t){return Math.floor(e+Math.random()*(t+1-e))}function y(e,t){return"cell_"+e+"_"+t}function m(e,t,n){setTimeout((function(){if(e())return m(e,t,n)}),v(t,n))}function p(e,t){return e/100*t}var g=n(7076);function b(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var k=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.level=t,this.cell=n,this.health=s.RABBIT_MAX_HEALTH,this.nutritionally=s.RABBIT_NUTRITIONALLY*(2*this.level);var a=this.nutritionally;this.healthInterval=setInterval((function(){g.Z.remove(i),(0,g.Z)({targets:i,health:i.health-p(i.health,10),nutritionally:p(a,i.health),duration:700,easing:"easeOutExpo",complete:function(){i.health<=s.RABBIT_MIN_HEALTH&&i.destroy()}})}),900)}var t,n,i;return t=e,(n=[{key:"destroy",value:function(){clearInterval(this.healthInterval),this.cell.rabbit=null}}])&&b(t.prototype,n),i&&b(t,i),e}();function w(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var C=function(){function e(t,n,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameClass=t,this.type=n,this.level=i,this.cell=a,this.fieldTime=s.BONUS_FIELD_TIME+2*this.level,this.activeTime=s.BONUS_ACTIVE_TIME*this.level,this.fieldInterval=null,this.activeInterval=null,this.activeTickHandler=null,this.deactivateHandler=null,this.startFieldTimer()}var t,n,i;return t=e,(n=[{key:"startFieldTimer",value:function(){var e=this;this.fieldInterval=setInterval((function(){e.fieldTime--,e.fieldTime<1&&e.removeFromField()}),1e3)}},{key:"activate",value:function(){var e=this;this.gameClass.sound.play("getBonus"),this.activeInterval=setInterval((function(){"play"===e.gameClass.state&&(e.activeTime--,"function"==typeof e.activeTickHandler&&e.activeTickHandler()),e.activeTime<1&&(e.gameClass.sound.play("bonusEnd"),e.deactivate())}),1e3)}},{key:"deactivate",value:function(){clearInterval(this.activeInterval),"function"==typeof this.deactivateHandler&&this.deactivateHandler()}},{key:"removeFromField",value:function(){clearInterval(this.fieldInterval),this.cell.bonus=null}}])&&w(t.prototype,n),i&&w(t,i),e}();function E(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw a}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function L(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameClass=t,this.cells={},this.width=s.FIELD_WIDTH,this.height=s.FIELD_HEIGHT}var t,n,i;return t=e,(n=[{key:"init",value:function(){for(var e=document.querySelector("#field"),t=1;t<=this.height;t++){var n=document.createElement("div");n.classList.add("row");for(var s=1;s<=this.width;s++){var i=document.createElement("div");i.classList.add("cell"),i.id=y(s,t);var a=document.createElement("div");a.classList.add("cell-inner"),i.append(a),n.append(i),this.cells[y(s,t)]={x:s,y:t,snake:null,bonus:null,rabbit:null}}e.append(n)}}},{key:"draw",value:function(){for(var e in this.cells){var t=this.cells[e].x,n=this.cells[e].y,s=this.cells[e].snake,i=this.cells[e].rabbit,a=this.cells[e].bonus,r=(this.cells[e].angle,document.querySelector("#"+y(t,n))),l=document.querySelector("#"+y(t,n)+" > .cell-inner");r&&(l.className="cell-inner",l.innerText="",s?(l.classList.add("snake-"+s.id),s.transparency&&l.classList.add("transparent")):i?(l.classList.add("rabbit-"+i.level),l.innerText=Math.floor(i.health)):a&&l.classList.add("bonus-"+a.type+"-"+a.level))}var o,u=E(this.gameClass.players);try{for(u.s();!(o=u.n()).done;){var c=o.value;for(var h in c.bonusesWrapEl.innerHTML="",c.bonuses){var d=c.bonuses[h].type,f=c.bonuses[h].level,v=c.bonuses[h].activeTime,m=document.createElement("div");m.classList.add("bonus","bonus-"+d+"-"+f),m.innerText=v,c.bonusesWrapEl.append(m)}}}catch(e){u.e(e)}finally{u.f()}}},{key:"setSnake",value:function(e){var t=this;!function e(n){var s,i,a=["top","right","bottom","left"][v(0,3)];if("top"===a&&(s=v(3,t.gameClass.field.width-2),i=t.gameClass.field.height),"right"===a&&(s=1,i=v(1,t.gameClass.field.height-2)),"bottom"===a&&(s=v(3,t.gameClass.field.width-2),i=1),"left"===a&&(s=t.gameClass.field.width,i=v(3,t.gameClass.field.height-2)),null!==t.gameClass.field.cells[y(s,i)].snake)return e(n);n.born(s,i,a)}(e)}},{key:"removeSnake",value:function(e){for(var t in this.cells)this.cells[t].snake&&this.cells[t].snake.id===e.id&&(this.cells[t].snake=null)}},{key:"spewRabbit",value:function(){var e=0;for(var t in this.cells)if(this.cells[t].rabbit&&++e>this.gameClass.players.length+1)return;var n=this.chooseLevel(1,5,100),s=this.getFreeCell(),i=new k(n,s);s.rabbit=i}},{key:"spewBonus",value:function(){var e=0;for(var t in this.cells)if(this.cells[t].bonus&&++e>=this.gameClass.players.length)return;var n=this.getFreeCell(),s=this.chooseLevel(1,5,50),i=new C(this.gameClass,function(){for(var e=null,t=v(1,100),n=0,s=[{name:"freeze",range:[1,3]},{name:"cut",range:[4,5]},{name:"transparency",range:[6,15]},{name:"score",range:[31,100]}];n<s.length;n++){var i=s[n];t>=i.range[0]&&t<=i.range[1]&&(e=i.name)}return e}(),s,n);n.bonus=i}},{key:"chooseLevel",value:function(e,t,n){var s=1===v(1,n*e/this.gameClass.difficulty);return e!==t&&s?this.chooseLevel(e+1,t,n):e}},{key:"getFreeCell",value:function(){var e=[];for(var t in this.cells){var n=this.cells[t];null===n.snake&&null===n.bonus&&null===n.rabbit&&e.push(t)}return this.cells[e[v(0,e.length-1)]]}},{key:"clean",value:function(){var e,t=E(this.gameClass.players);try{for(t.s();!(e=t.n()).done;)e.value.snake.destroy()}catch(e){t.e(e)}finally{t.f()}for(var n in this.cells)this.cells[n].bonus&&this.cells[n].bonus.removeFromField(),this.cells[n].rabbit&&this.cells[n].rabbit.destroy()}}])&&L(t.prototype,n),i&&L(t,i),e}();function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],s=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(s=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function x(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerClass=t,this.gameClass=t.gameClass,this.id=t.id,this.initialSize=5,this.cells=[],this.direction=null,this.transparency=!1,this.directionLocked=!1,this.bodyKeydownHandler=this.bodyKeydownHandler.bind(this),document.querySelector("body").addEventListener("keydown",this.bodyKeydownHandler)}var t,n,s;return t=e,(n=[{key:"born",value:function(e,t,n){var s=this.gameClass.field;this.direction=n;for(var i=0;i<this.initialSize;i++){var a=void 0,r=void 0;"top"===n&&(a=e,r=t+i),"right"===n&&(a=e-i,r=t),"bottom"===n&&(a=e,r=t-i),"left"===n&&(a=e+i,r=t),this.cells.push({x:a,y:r}),s.cells[y(a,r)]&&(s.cells[y(a,r)].snake=this)}}},{key:"crawl",value:function(){var e=this,t=function(t){var n=e.playerClass.bonuses;for(var s in n)if(s===t)return n[t];return!1},n=t("freeze");if(t("transparency"),t("cut"),t("score"),n)return!0;var s,i,a,r,l,o,u,c=T((a=e.gameClass.field.width,r=e.gameClass.field.height,l=e.cells[0].x,o=e.cells[0].y,"top"===e.direction&&(s=l,i=o-1<1?r:o-1),"right"===e.direction&&(i=o,s=l+1>a?1:l+1),"bottom"===e.direction&&(s=l,i=o+1>r?1:o+1),"left"===e.direction&&(i=o,s=l-1<1?a:l-1),[s,i]),2),h=c[0],d=c[1],f=function(t,n){return null!==e.gameClass.field.cells[y(t,n)].rabbit&&(e.playerClass.increaceScore(e.gameClass.field.cells[y(t,n)].rabbit.nutritionally),e.gameClass.field.cells[y(t,n)].rabbit.destroy(),!0)}(h,d),v=(function(t,n){if(null!==e.gameClass.field.cells[y(t,n)].bonus){var s=e.gameClass.field.cells[y(t,n)].bonus;e.playerClass.addBonus(s),s.removeFromField()}}(h,d),function(t,n,s){var i=e.gameClass.field.cells[y(t,n)].snake,a=e.cells[e.cells.length-1];return!(!i||e.transparency||i&&i.transparency||y(t,n)===y(a.x,a.y)&&!s)}(h,d,f)),m=function(t,n,s){var i=[];if(s){i.push({x:t,y:n});for(var a=0;a<e.cells.length;a++)i.push({x:e.cells[a].x,y:e.cells[a].y})}else for(var r=0;r<e.cells.length;r++)i[r]={},0===r?(i[r].x=t,i[r].y=n):(i[r].x=e.cells[r-1].x,i[r].y=e.cells[r-1].y);return i}(h,d,f);return function(t){for(var n=0;n<t.length;n++){var s=y(t[n].x,t[n].y);e.gameClass.field.cells[s]&&(e.gameClass.field.cells[s].snake=e)}}(m),function(t){for(var n=y(e.cells[e.cells.length-1].x,e.cells[e.cells.length-1].y),s=!1,i=0;i<e.cells.length-1;i++)y(e.cells[i].x,e.cells[i].y)===n&&(s=!0);!e.gameClass.field.cells[n]||t||s||(e.gameClass.field.cells[n].snake=null)}(f),u=m,e.cells=u,f&&this.gameClass.sound.play("rabbitEaten"),v&&this.gameClass.sound.play("snakesCollision"),this.directionLocked=!1,!v}},{key:"changeDirection",value:function(e,t){e.keyCode!==t[0]||["top","bottom"].includes(this.direction)||(this.directionLocked=!0,this.direction="top"),e.keyCode!==t[1]||["right","left"].includes(this.direction)||(this.directionLocked=!0,this.direction="right"),e.keyCode!==t[2]||["top","bottom"].includes(this.direction)||(this.directionLocked=!0,this.direction="bottom"),e.keyCode!==t[3]||["right","left"].includes(this.direction)||(this.directionLocked=!0,this.direction="left")}},{key:"bodyKeydownHandler",value:function(e){this.directionLocked||this.changeDirection(e,this.playerClass.controlKeys)}},{key:"destroy",value:function(){document.querySelector("body").removeEventListener("keydown",this.bodyKeydownHandler),this.gameClass.field.removeSnake(this)}}])&&x(t.prototype,n),s&&x(t,s),e}();function H(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameClass=t,this.id=n,this.wrapEl=null,this.playerEl=null,this.scoreEl=null,this.picksEl=null,this.bonusesWrapEl=null,this._score=0,this._picks=0,this.bonuses={},this.controlKeys=s.PLAYERS_KEYCODES[n],this.createSnake()}var t,n,i;return t=e,(n=[{key:"score",get:function(){return this._score},set:function(e){g.Z.remove(this),(0,g.Z)({targets:this.scoreEl,innerText:e,round:1,duration:700,easing:"easeOutExpo"}),this._score=e}},{key:"picks",get:function(){return this._picks},set:function(e){g.Z.remove(this),(0,g.Z)({targets:this.picksEl,innerText:e,round:1,duration:700,easing:"easeOutExpo"}),this._picks=e}},{key:"init",value:function(){this.wrapEl=document.querySelector("#players-wrap"),this.playerEl=document.createElement("div"),this.playerEl.classList.add("player","player-"+this.id),this.scoreEl=document.createElement("div"),this.scoreEl.classList.add("score"),this.scoreEl.innerText=this.score,this.picksEl=document.createElement("div"),this.picksEl.classList.add("picks"),this.picksEl.innerText=this.picks,this.bonusesWrapEl=document.createElement("div"),this.bonusesWrapEl.classList.add("bonuses-wrap"),this.playerEl.append(this.scoreEl),this.playerEl.append(this.picksEl),this.playerEl.append(this.bonusesWrapEl),this.wrapEl.append(this.playerEl)}},{key:"increaceScore",value:function(e){var t=this.bonuses.score;e*=this.gameClass.difficulty,t&&(e*=t.level+1),this.score+=e,this.picks++}},{key:"addBonus",value:function(e){var t=this;(!this.bonuses[e.type]||this.bonuses[e.type]&&this.bonuses[e.type].level<=e.level)&&(this.bonuses[e.type]&&this.bonuses[e.type].deactivate(),e.deactivateHandler=function(){"play"===t.gameClass.state&&("transparency"===e.type&&(t.snake.transparency=!1),delete t.bonuses[e.type])},e.activate(),"transparency"===e.type&&(this.snake.transparency=!0),"cut"===e.type&&(e.activeTickHandler=function(){if(t.snake.cells.length>t.snake.initialSize){var e=t.snake.cells.pop(),n=t.gameClass.field.cells[y(e.x,e.y)];n&&(n.snake=null)}}),this.bonuses[e.type]=e),this.bonuses[e.type]&&this.bonuses[e.type].level>e.level&&this.gameClass.sound.play("bonusError")}},{key:"cleanBonuses",value:function(){for(var e in this.bonuses)this.bonuses[e].deactivate();this.bonuses={}}},{key:"createSnake",value:function(){this.snake=new B(this),this.gameClass.field.setSnake(this.snake)}},{key:"destroy",value:function(){this.cleanBonuses(),this.playerEl.remove(),this.snake.destroy()}}])&&H(t.prototype,n),i&&H(t,i),e}();function _(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=M(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw a}}}}function M(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function j(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interface=new c(this),this.field=new I(this),this.sound=new f,this.players=[],this.difficulty=s.DEFAULT_DIFFICULTY,this.state=null,this.results=null}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.interface.init(),this.field.init()}},{key:"start",value:function(){var e=this;this.state||this.field.spewRabbit(),this.sound.play("music"),this.state="play",this.field.draw();var t=setInterval((function(){if("play"!==e.state)return clearInterval(t);var n,s=D(e.players);try{for(s.s();!(n=s.n()).done;)n.value.snake.crawl()||(e.field.draw(),e.end())}catch(e){s.e(e)}finally{s.f()}}),this.getSnakesSpeed()),n=setInterval((function(){if("play"!==e.state)return clearInterval(n);e.field.draw()}),s.DRAW_INTERVAL);m.apply(void 0,[function(){return"play"===e.state&&(e.field.spewRabbit(),!0)}].concat(_(this.getRabbitsFrequency()))),m.apply(void 0,[function(){return"play"===e.state&&(e.field.spewBonus(),!0)}].concat(_(this.getBonusFrequency())))}},{key:"pause",value:function(){this.state="pause"}},{key:"end",value:function(){this.state="end",this.sound.stop("music"),this.setGameResults(),this.updateAchievements(),this.interface.openEndMenu()}},{key:"togglePlayer",value:function(e){for(var t=0;t<this.players.length;t++)if(this.players[t].id===e)return this.players[t].destroy(),void this.players.splice(t,1);var n=new O(this,e);n.init(),this.players.push(n)}},{key:"getSnakesSpeed",value:function(){return 1e3/this.difficulty}},{key:"getRabbitsFrequency",value:function(){return[1e3,3e3]}},{key:"getBonusFrequency",value:function(){return[1e5/this.difficulty,2e5/this.difficulty]}},{key:"updateAchievements",value:function(){var e,t=JSON.parse(window.localStorage.getItem("achievements"))||[],n=D(this.players);try{for(n.s();!(e=n.n()).done;){var s=e.value,i=Math.round(s.score);i>0&&t.push(i)}}catch(e){n.e(e)}finally{n.f()}window.localStorage.setItem("achievements",JSON.stringify(t))}},{key:"setGameResults",value:function(){for(var e=JSON.parse(window.localStorage.getItem("achievements"))||[],t=[],n={},s=0;s<e.length;s++)t.push({score:e[s],currentGame:!1,playerID:null});var i,a=D(this.players);try{for(a.s();!(i=a.n()).done;){var r=i.value,l=Math.round(r.score);t.push({score:l,currentGame:!0,playerID:r.id})}}catch(e){a.e(e)}finally{a.f()}t.sort((function(e,t){return t.score-e.score}));for(var o=0;o<t.length;o++)(t[o].currentGame||o<3)&&(n[o+1]=t[o]);this.results=n}}])&&j(t.prototype,n),i&&j(t,i),e}())).init()}},t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,n.x=e=>{},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[1202,338],[3275,338]],s=e=>{},i=(i,a)=>{for(var r,l,[o,u,c,h]=a,d=0,f=[];d<o.length;d++)l=o[d],n.o(e,l)&&e[l]&&f.push(e[l][0]),e[l]=0;for(r in u)n.o(u,r)&&(n.m[r]=u[r]);for(c&&c(n),i&&i(a);f.length;)f.shift()();return h&&t.push.apply(t,h),s()},a=self.webpackChunk=self.webpackChunk||[];function r(){for(var s,i=0;i<t.length;i++){for(var a=t[i],r=!0,l=1;l<a.length;l++){var o=a[l];0!==e[o]&&(r=!1)}r&&(t.splice(i--,1),s=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),s}a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a));var l=n.x;n.x=()=>(n.x=l||(e=>{}),(s=r)())})();n.x()})();
//# sourceMappingURL=main.a502bb8e0ac2dc81f917.js.map