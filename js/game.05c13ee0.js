(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"17de":function(e,t,s){},"7d36":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("transition",{attrs:{mode:"out-in"}},[e.score.success===e.numberOfQuestions?s("succeeded",{attrs:{test:e.test}}):e.score.failed>5?s("failed",{attrs:{test:e.test}}):e._e()],1),e.score.success!==e.numberOfQuestions&&e.score.failed<=5?[s("score",{staticClass:"score-container"}),s("flag",{staticClass:"flag-container",attrs:{code:e.currentFlag}}),s("guessing-buttons",{staticClass:"buttons-container",attrs:{flags:e.currentOptions,"correct-flag":e.currentFlag,"current-guess":e.currentGuess,"just-guessed":e.justGuessed},on:{guess:e.guessFlag},nativeOn:{click:function(t){e.failedIcon(e.currentFlag)}}})]:e._e()],2)},r=[],u=s("be94"),c=(s("cadf"),s("551c"),s("097d"),s("2f62")),a=s("f929"),o=s("bd0c"),i=s("6018"),d=s("e44f"),f=s("3041"),l={name:"GameChallenge",data:function(){return{test:{}}},mounted:function(){this.setGameMode("challenge"),this.getRandomFlag(),this.getRandomOptions()},components:{Flag:a["a"],GuessingButtons:o["a"],Score:i["a"],Failed:d["a"],Succeeded:f["a"]},methods:Object(u["a"])({},Object(c["b"])(["guessFlag","setGameMode","getRandomFlag","getRandomOptions"]),{failedIcon:function(e){this.test=e}}),computed:Object(u["a"])({},Object(c["c"])({currentFlag:function(e){var t=e.currentFlag;return t},currentOptions:function(e){var t=e.currentOptions;return t},justGuessed:function(e){var t=e.justGuessed;return t},currentGuess:function(e){var t=e.currentGuess;return t},score:function(e){var t=e.score;return t},numberOfQuestions:function(e){var t=e.numberOfQuestions;return t}}))},g=l,m=(s("db12"),s("2877")),b=Object(m["a"])(g,n,r,!1,null,"bf6f9cd6",null);b.options.__file="Game.vue";t["default"]=b.exports},db12:function(e,t,s){"use strict";var n=s("17de"),r=s.n(n);r.a}}]);
//# sourceMappingURL=game.05c13ee0.js.map