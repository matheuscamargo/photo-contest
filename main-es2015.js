(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/final-order/final-order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/final-order/final-order.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow\">\r\n  <h1 translate>FINAL_LAST_STEP</h1>\r\n  <p class=\"button\"><a href={{formLink}} class=\"button\" translate>FINAL_OPEN_FORMS</a></p>\r\n  <p translate>FINAL_RESULT_EXPLANATION</p>\r\n  <p translate>FINAL_RESULT_FOLLOW_LINK</p>\r\n  <section class=\"non-inline-div\" *ngFor=\"let group of results\">\r\n    <p class=\"score\" translate [translateParams]=\"{score: group.score}\">FINAL_SCORE</p>\r\n    <div class=\"inline-div\" *ngFor=\"let photo of group.photos\">\r\n        <img src=\"assets/{{photo.index}}.jpg\" />\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow\">\r\n    <p>\r\n        <a class=\"language\" [routerLink]=\"\" (click)=\"changeLanguage('pt')\">Português</a> | <a class=\"language\"\r\n            [routerLink]=\"\" (click)=\"changeLanguage('en')\">English</a>\r\n    </p>\r\n    <h1 translate>INTRO_PHOTO_CONTEST</h1>\r\n\r\n    <p translate>INTRO_WELCOME</p>\r\n\r\n    <p translate>INTRO_PICK</p>\r\n    <p class=\"option-description\" translate>INTRO_MERGESORT_DESCRIPTION</p>\r\n    <p class=\"button\">\r\n        <button (click)=\"chooseAlgorithm('mergesort')\" translate\r\n            [translateParams]=\"{mergeSortQuantity: mergeSortQuantity}\">\r\n            INTRO_MERGESORT_BUTTON\r\n        </button>\r\n    </p>\r\n    <p class=\"option-description\" translate>INTRO_ELIMINATION_DESCRIPTION</p>\r\n    <p class=\"button\">\r\n        <button (click)=\"chooseAlgorithm('elimination')\" translate\r\n            [translateParams]=\"{eliminationQuantity: eliminationQuantity}\">\r\n            INTRO_ELIMINATION_BUTTON\r\n        </button>\r\n    </p>\r\n    <hr>\r\n    <h2 translate>INTRO_ADDITIONAL_DETAILS</h2>    \r\n\r\n    <h3 translate>INTRO_CONTESTANTS_TITLE</h3>\r\n    <p translate>INTRO_CONTESTANTS_DETAILS</p>\r\n\r\n    <h3 translate>INTRO_RULES_TITLE</h3>\r\n    <p translate>INTRO_RULES_DETAILS</p>\r\n\r\n    <h3 translate>INTRO_WHY_2_TYPES_TITLE</h3>\r\n    <p translate>INTRO_WHY_2_TYPES_DETAILS</p>\r\n\r\n    <h3 translate>INTRO_MERGESORT_TITLE</h3>\r\n    <p [innerHTML]=\"'INTRO_MERGESORT_DETAILS' | translate: {mergeSortQuantity: mergeSortQuantity}\"></p>\r\n\r\n    <h3 translate>INTRO_ELIMINATION_TITLE</h3>\r\n    <p [innerHTML]=\"'INTRO_ELIMINATION_DETAILS' | translate\"></p>\r\n\r\n    <h3 translate>INTRO_VOTES_COMPUTED_TITLE</h3>\r\n    <p translate>INTRO_VOTES_COMPUTED_DETAILS</p>\r\n\r\n    <h3 translate>INTRO_SOURCE_CODE_TITLE</h3>\r\n    <p>\r\n        <a href=\"https://github.com/matheuscamargo/photo-contest\">https://github.com/matheuscamargo/photo-contest</a>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photo-picker/photo-picker.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photo-picker/photo-picker.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"remaining\" translate [translateParams]=\"{quantityOfRemainingRounds: quantityOfRemainingRounds}\">PICKER_REMAINING_VOTES</p>\r\n<p translate>PICKER_PICK_BEST_PHOTO</p>\r\n<div class=\"option\">\r\n    <input type=\"image\" src=\"assets/{{photoA.index}}.jpg\" (click)=\"vote('a')\" />\r\n</div>\r\n<div class=\"option\">\r\n    <input type=\"image\" src=\"assets/{{photoB.index}}.jpg\" (click)=\"vote('b')\" />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/voting/voting.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voting/voting.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-intro *ngIf=\"!votingAlgorithmSelected\"\n           [mergeSortQuantity]=\"mergeSortQuantitity\"\n           [eliminationQuantity]=\"eliminationQuantity\"\n           (choseAlgorithm)=\"onChoseAlgorithm($event)\">\n</app-intro>\n\n<app-photo-picker *ngIf=\"votingAlgorithmSelected && !isFinished\"\n                  [quantityOfRemainingRounds]=\"quantityOfRemainingRounds\"\n                  [photoA]=\"photoA\"\n                  [photoB]=\"photoB\"\n                  (votedForPhoto)=\"onVoted($event)\">\n</app-photo-picker>\n\n<app-final-order *ngIf=\"votingAlgorithmSelected && isFinished\"\n                 [results]=\"results\">  \n</app-final-order>"

/***/ }),

/***/ "./src/app/algorithms/elimination/elimination-algorithm.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/algorithms/elimination/elimination-algorithm.service.ts ***!
  \*************************************************************************/
/*! exports provided: EliminationAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminationAlgorithmService", function() { return EliminationAlgorithmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vote-selection */ "./src/app/algorithms/vote-selection.ts");



let EliminationAlgorithmService = class EliminationAlgorithmService {
    constructor() {
        this.totalDesiredScore = 1000;
    }
    initialize(elements) {
        let quantityOfElements = elements.length;
        this.isInitialized = true;
        this.currentLevelScore = 1;
        this.remainingRounds = this.getInitialQuantityOfRounds(quantityOfElements);
        let firstLevelSize = this.getQuantityOfElementsOnFirstLevel(quantityOfElements);
        this.elementsOnCurrentLevel = elements.slice(0, firstLevelSize);
        this.elementsOnNextLevel = elements.slice(firstLevelSize);
        this.results = new Array(0);
    }
    getRemainingQuantityOfRounds() {
        this.ensureIsInitialized();
        return this.remainingRounds;
    }
    getInitialQuantityOfRounds(numberOfElements) {
        return numberOfElements - 1;
    }
    getVoteOptions() {
        this.ensureVotingIsNotOver();
        let length = this.elementsOnCurrentLevel.length;
        let optionB = this.elementsOnCurrentLevel[length - 1];
        let optionA = this.elementsOnCurrentLevel[length - 2];
        return { optionA: optionA, optionB: optionB };
    }
    voteFor(selected) {
        this.ensureVotingIsNotOver();
        this.remainingRounds--;
        let optionB = this.elementsOnCurrentLevel.pop();
        let optionA = this.elementsOnCurrentLevel.pop();
        if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA) {
            this.results.push({ elementIndex: optionB, score: this.currentLevelScore });
            this.elementsOnNextLevel.push(optionA);
        }
        else if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB) {
            this.results.push({ elementIndex: optionA, score: this.currentLevelScore });
            this.elementsOnNextLevel.push(optionB);
        }
        if (this.remainingRounds == 0) {
            let index = this.elementsOnNextLevel[0];
            this.results.push({ elementIndex: index, score: 2 * this.currentLevelScore });
            this.results = this.normalizeScores(this.results);
            return;
        }
        if (this.elementsOnCurrentLevel.length == 0) {
            this.elementsOnCurrentLevel = this.elementsOnNextLevel;
            this.elementsOnNextLevel = new Array(0);
            this.currentLevelScore *= 2;
        }
    }
    getResults() {
        this.ensureVotingIsOver();
        return this.results;
    }
    ensureIsInitialized() {
        if (!this.isInitialized) {
            throw new Error("Service should be initialized first.");
        }
    }
    ensureVotingIsNotOver() {
        if (this.remainingRounds <= 0) {
            throw new Error("Voting is over.");
        }
    }
    ensureVotingIsOver() {
        if (this.remainingRounds > 0) {
            throw new Error("Voting is not over.");
        }
    }
    getQuantityOfElementsOnFirstLevel(totalQuantity) {
        let powerOfTwoOfFirstCompleteLevel = Math.floor(Math.log2(totalQuantity));
        let sizeOfFirstCompleteLevel = Math.pow(2, powerOfTwoOfFirstCompleteLevel);
        return sizeOfFirstCompleteLevel == totalQuantity ?
            totalQuantity :
            2 * (totalQuantity - sizeOfFirstCompleteLevel);
    }
    normalizeScores(results) {
        let totalScore = results.map(r => r.score).reduce((prev, next) => prev + next);
        let adjustFactor = this.totalDesiredScore / totalScore;
        return results.map(r => {
            return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
        });
    }
};
EliminationAlgorithmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EliminationAlgorithmService);



/***/ }),

/***/ "./src/app/algorithms/mergesort/mergesort-algorithm.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/algorithms/mergesort/mergesort-algorithm.service.ts ***!
  \*********************************************************************/
/*! exports provided: MergesortAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergesortAlgorithmService", function() { return MergesortAlgorithmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vote-selection */ "./src/app/algorithms/vote-selection.ts");



let MergesortAlgorithmService = class MergesortAlgorithmService {
    constructor() {
        this.totalDesiredScore = 1000;
        // With the number below, the 1st photo will have ~360 points both
        // on elimination and merge sort.
        this.magicNumberFor12Photos = 1.56;
    }
    initialize(elements) {
        let quantityOfElements = elements.length;
        this.isInitialized = true;
        this.remainingRounds = this.getTotalQuantityOfRounds(quantityOfElements);
        this.currentBlockSize = 1;
        this.currentOptionA = this.mergedBlockStartIndex = 0;
        this.currentOptionB = 1;
        this.elements = elements;
        this.mergedBlock = new Array();
    }
    getRemainingQuantityOfRounds() {
        this.ensureIsInitialized();
        return this.remainingRounds;
    }
    getInitialQuantityOfRounds(numberOfElements) {
        return this.getTotalQuantityOfRounds(numberOfElements);
    }
    getVoteOptions() {
        this.ensureVotingIsNotOver();
        return {
            optionA: this.elements[this.currentOptionA],
            optionB: this.elements[this.currentOptionB]
        };
    }
    voteFor(selected) {
        this.ensureVotingIsNotOver();
        this.remainingRounds--;
        if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA) {
            this.mergedBlock.push(this.elements[this.currentOptionB++]);
        }
        else if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB) {
            this.mergedBlock.push(this.elements[this.currentOptionA++]);
        }
        if (this.currentOptionA >= this.elements.length ||
            this.currentOptionA >= this.mergedBlockStartIndex + this.currentBlockSize) {
            // Copy what remains of block B.
            while (this.currentOptionB < this.elements.length &&
                this.currentOptionB < this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
                this.mergedBlock.push(this.elements[this.currentOptionB++]);
                this.remainingRounds--;
            }
            // Adding back +1 since that does not count as a round.
            this.remainingRounds++;
        }
        else if (this.currentOptionB >= this.elements.length ||
            this.currentOptionB >= this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
            // Copy what remains of block A.
            while (this.currentOptionA < this.elements.length &&
                this.currentOptionA < this.mergedBlockStartIndex + this.currentBlockSize) {
                this.mergedBlock.push(this.elements[this.currentOptionA++]);
                this.remainingRounds--;
            }
            // Adding back +1 since that does not count as a round.
            this.remainingRounds++;
        }
        if (this.mergedBlock.length == (this.currentBlockSize * 2) ||
            this.remainingRounds == 0) {
            // Current merge is over, prepare next merge.
            this.copyArray(this.elements, this.mergedBlockStartIndex, this.mergedBlock);
            this.mergedBlockStartIndex += this.mergedBlock.length;
            this.currentOptionA = this.mergedBlockStartIndex;
            this.currentOptionB = this.currentOptionA + this.currentBlockSize;
            if (this.currentOptionA >= this.elements.length ||
                this.currentOptionB >= this.elements.length) {
                // Current level is done.
                this.currentBlockSize *= 2;
                this.mergedBlockStartIndex = 0;
                this.currentOptionA = 0;
                this.currentOptionB = this.currentBlockSize;
            }
            this.mergedBlock = new Array();
        }
    }
    getResults() {
        this.ensureVotingIsOver();
        if (this.results == null) {
            this.results = this.elements.map((v, i) => { return { elementIndex: v, score: i }; });
            this.normalizeScores(this.results);
        }
        return this.results;
    }
    ensureIsInitialized() {
        if (!this.isInitialized) {
            throw new Error("Service should be initialized first.");
        }
    }
    ensureVotingIsNotOver() {
        if (this.remainingRounds <= 0) {
            throw new Error("Voting is over.");
        }
    }
    ensureVotingIsOver() {
        if (this.remainingRounds > 0) {
            throw new Error("Voting is not over.");
        }
    }
    normalizeScores(results) {
        let adjustedResults = this.results.map(r => {
            return {
                elementIndex: r.elementIndex,
                score: Math.pow(this.magicNumberFor12Photos, r.score)
            };
        });
        let totalScore = adjustedResults.map(r => r.score).reduce((prev, next) => prev + next);
        let adjustFactor = this.totalDesiredScore / totalScore;
        this.results = adjustedResults.map(r => {
            return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
        });
    }
    getTotalQuantityOfRounds(inputSize) {
        let blockSize = 1;
        let quantity = 0;
        while (blockSize < inputSize) {
            let fullBlocks = Math.floor(inputSize / blockSize);
            let fullBlockPairs = Math.floor(fullBlocks / 2);
            quantity += fullBlockPairs * (2 * blockSize - 1);
            let remainingElements = inputSize - fullBlockPairs * blockSize * 2;
            if (remainingElements > blockSize) {
                quantity += remainingElements - 1;
            }
            blockSize *= 2;
        }
        return quantity;
    }
    copyArray(elements, mergedBlockStartIndex, mergedBlock) {
        let length = mergedBlock.length;
        for (let i = 0; i < length; i++) {
            elements[mergedBlockStartIndex + i] = mergedBlock[i];
        }
    }
};
MergesortAlgorithmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MergesortAlgorithmService);



/***/ }),

/***/ "./src/app/algorithms/vote-selection.ts":
/*!**********************************************!*\
  !*** ./src/app/algorithms/vote-selection.ts ***!
  \**********************************************/
/*! exports provided: VoteSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteSelection", function() { return VoteSelection; });
var VoteSelection;
(function (VoteSelection) {
    VoteSelection[VoteSelection["OptionA"] = 0] = "OptionA";
    VoteSelection[VoteSelection["OptionB"] = 1] = "OptionB";
})(VoteSelection || (VoteSelection = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _voting_voting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voting/voting.component */ "./src/app/voting/voting.component.ts");




const routes = [
    { path: '', component: _voting_voting_component__WEBPACK_IMPORTED_MODULE_3__["VotingComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.param = { value: 'world' };
        this.title = 'angular-photo-contest';
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
        // Use 'pt' if first browser language is either 'pt' or 'pt-BR'.
        translate.use(browserLang.match(/^pt/) ? 'pt' : 'en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _voting_voting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voting/voting.component */ "./src/app/voting/voting.component.ts");
/* harmony import */ var _photo_picker_photo_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-picker/photo-picker.component */ "./src/app/photo-picker/photo-picker.component.ts");
/* harmony import */ var _final_order_final_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./final-order/final-order.component */ "./src/app/final-order/final-order.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");












// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _voting_voting_component__WEBPACK_IMPORTED_MODULE_8__["VotingComponent"],
            _photo_picker_photo_picker_component__WEBPACK_IMPORTED_MODULE_9__["PhotoPickerComponent"],
            _final_order_final_order_component__WEBPACK_IMPORTED_MODULE_10__["FinalOrderComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__["IntroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/final-order/final-order.component.scss":
/*!********************************************************!*\
  !*** ./src/app/final-order/final-order.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-div {\n  display: inline-block;\n  margin: 4px;\n}\n\n.non-inline-div {\n  clear: left;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nimg {\n  max-width: 200px;\n  max-height: 200px;\n  height: auto;\n  width: auto;\n}\n\np.score {\n  margin: 0;\n  font-weight: 900;\n  margin-top: 10px;\n}\n\np.button {\n  text-align: center;\n}\n\na.button {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtb3JkZXIvQzpcXGRldlxcYW5ndWxhci1waG90by1jb250ZXN0L3NyY1xcYXBwXFxmaW5hbC1vcmRlclxcZmluYWwtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbmFsLW9yZGVyL2ZpbmFsLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLW9yZGVyL2ZpbmFsLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZS1kaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5ub24taW5saW5lLWRpdiB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnAuc2NvcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnAuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYS5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiLmlubGluZS1kaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4ubm9uLWlubGluZS1kaXYge1xuICBjbGVhcjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxucC5zY29yZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxucC5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/final-order/final-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/final-order/final-order.component.ts ***!
  \******************************************************/
/*! exports provided: FinalOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalOrderComponent", function() { return FinalOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form.service */ "./src/app/form.service.ts");



let FinalOrderComponent = class FinalOrderComponent {
    constructor(formService) {
        this.formService = formService;
    }
    ngOnInit() {
        this.formResult = this.getFormArray(this.results);
        this.formLink = this.formService.getFormLink(this.formResult);
    }
    getFormArray(results) {
        let length = 0;
        for (let result of this.results) {
            length += result.photos.length;
        }
        let output = new Array(length);
        for (let result of this.results) {
            for (let photo of result.photos) {
                output[photo.index] = result.score;
            }
        }
        return output;
    }
};
FinalOrderComponent.ctorParameters = () => [
    { type: _form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FinalOrderComponent.prototype, "results", void 0);
FinalOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final-order',
        template: __webpack_require__(/*! raw-loader!./final-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/final-order/final-order.component.html"),
        styles: [__webpack_require__(/*! ./final-order.component.scss */ "./src/app/final-order/final-order.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]])
], FinalOrderComponent);



/***/ }),

/***/ "./src/app/form.service.ts":
/*!*********************************!*\
  !*** ./src/app/form.service.ts ***!
  \*********************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



let FormService = class FormService {
    constructor() {
        this.googleFormsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].formsUrl;
    }
    getFormLink(scores) {
        var result = this.googleFormsUrl;
        scores.forEach(function (score, _) {
            result = result.replace('=0', '=' + score);
        });
        return result;
    }
};
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormService);



/***/ }),

/***/ "./src/app/intro/intro.component.scss":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #ffffff;\n  font-family: \"Trebuchet MS\", Verdana, Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  line-height: 1.4;\n  background-color: #43423e;\n}\n\nbutton, a.button {\n  font-family: \"Trebuchet MS\";\n  background-color: #e28a26;\n  border: 0.1rem solid #e28a26;\n  margin: 0 auto;\n  left: 50%;\n  border-radius: 0.4rem;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  line-height: 3.8rem;\n  padding: 0 3rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\nbutton:hover, button:focus, a.button:hover, a.button:focus {\n  background-color: #ffffff;\n  border-color: #ffffff;\n  color: #fff;\n}\n\nli {\n  margin-bottom: 1.5rem;\n}\n\nul {\n  list-style: none;\n}\n\nh1, h2 {\n  text-align: center;\n  font-weight: 300;\n  letter-spacing: -0.1rem;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1.2;\n}\n\nh2 {\n  font-size: 2rem;\n  line-height: 1.25;\n}\n\ndiv.narrow {\n  max-width: 900px;\n  margin: auto;\n}\n\na {\n  color: #e28a26;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\np.button {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n\np.option-description {\n  font-weight: 900;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\na.language {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vQzpcXGRldlxcYW5ndWxhci1waG90by1jb250ZXN0L3NyY1xcYXBwXFxpbnRyb1xcaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnRyby9DOlxcZGV2XFxhbmd1bGFyLXBob3RvLWNvbnRlc3Qvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxjQUhjO0VBSWpCLGtFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNDLHlCQUFBO0FDTEY7O0FEUUE7RUFDSSwyQkFBQTtFQUNBLHlCQWJZO0VBY1osNEJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNILHFCQUFBO0VBQ0EsV0FuQmU7RUFvQmYsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDRyxxQkFBQTtBQ0xKOztBRE1JO0VBQ0kseUJBNUJVO0VBNkJoQixxQkE3QmdCO0VBOEJoQixXQWhDYztBQzRCaEI7O0FEUUE7RUFDSSxxQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNDLGtCQUFBO0VBQ0csZ0JBQUE7RUFDSCx1QkFBQTtFQUNBLHFCQUFBO0VBQ0csYUFBQTtBQ0xKOztBRFFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FDTEQ7O0FEUUE7RUFDQyxlQUFBO0VBQ0csaUJBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0MsY0FuRWU7RUFvRWYscUJBQUE7QUNMRDs7QURNQztFQUNDLDBCQUFBO0FDSkY7O0FDbkVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURzRUo7O0FDbkVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEc0VKOztBQ25FQTtFQUNJLGdCQUFBO0FEc0VKIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTb21lIGlkZWFzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21pbGxpZ3JhbS9taWxsaWdyYW1cclxuXHJcbiRjb2xvci1pbml0aWFsOiAjZmZmICFkZWZhdWx0O1xyXG4kY29sb3ItcHJpbWFyeTogI2UyOGEyNiAhZGVmYXVsdDtcclxuJGNvbG9yLXNlY29uZGFyeTogI2ZmZmZmZiAhZGVmYXVsdDtcclxuXHJcbmJvZHkge1xyXG4gICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XHJcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFZlcmRhbmEsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxLjFlbTtcclxuXHRsaW5lLWhlaWdodDogMS40O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQyM2U7XHJcbn1cclxuXHJcbmJ1dHRvbiwgYS5idXR0b24ge1x0XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IC40cmVtO1xyXG5cdGNvbG9yOiAkY29sb3ItaW5pdGlhbDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDMuOHJlbTtcclxuXHRwYWRkaW5nOiAwIDMuMHJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XHJcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XHJcblx0XHRjb2xvcjogJGNvbG9yLWluaXRpYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaDEsIGgyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAtLjFyZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbn1cclxuXHJcbmRpdi5uYXJyb3cge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHQmOmhvdmVyIHtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxufVxyXG4iLCJib2R5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBWZXJkYW5hLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MjNlO1xufVxuXG5idXR0b24sIGEuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjhhMjY7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICNlMjhhMjY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjhyZW07XG4gIHBhZGRpbmc6IDAgM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cywgYS5idXR0b246aG92ZXIsIGEuYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGkge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaDEsIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG5kaXYubmFycm93IHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5hIHtcbiAgY29sb3I6ICNlMjhhMjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxucC5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbnAub3B0aW9uLWRlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5hLmxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbnAuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5wLm9wdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuYS5sYW5ndWFnZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let IntroComponent = class IntroComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.choseAlgorithm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    changeLanguage(language) {
        this.translateService.use(language);
    }
    chooseAlgorithm(algorithm) {
        this.choseAlgorithm.emit(algorithm);
    }
};
IntroComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], IntroComponent.prototype, "mergeSortQuantity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], IntroComponent.prototype, "eliminationQuantity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IntroComponent.prototype, "choseAlgorithm", void 0);
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
        styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/intro/intro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], IntroComponent);



/***/ }),

/***/ "./src/app/photo-picker/photo-picker.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/photo-picker/photo-picker.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option {\n  float: left;\n  margin: 10px;\n  max-width: 100%;\n}\n\ninput {\n  max-width: 100%;\n  max-height: 800px;\n}\n\n@media (min-width: 800px) {\n  .option {\n    max-width: 45%;\n  }\n}\n\np {\n  text-align: center;\n  font-size: 1.2em;\n}\n\np.remaining {\n  font-weight: 900;\n  font-size: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tcGlja2VyL0M6XFxkZXZcXGFuZ3VsYXItcGhvdG8tY29udGVzdC9zcmNcXGFwcFxccGhvdG8tcGlja2VyXFxwaG90by1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bob3RvLXBpY2tlci9waG90by1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxjQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLXBpY2tlci9waG90by1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dCB7ICAgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogODAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgeyAgXHJcbiAgICAub3B0aW9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgJi5yZW1haW5pbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIH1cclxufSIsIi5vcHRpb24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5vcHRpb24ge1xuICAgIG1heC13aWR0aDogNDUlO1xuICB9XG59XG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxucC5yZW1haW5pbmcge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEuNmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/photo-picker/photo-picker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-picker/photo-picker.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPickerComponent", function() { return PhotoPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ "./src/app/photo.ts");



let PhotoPickerComponent = class PhotoPickerComponent {
    constructor() {
        this.votedForPhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    vote(photo) {
        if (photo != 'a' && photo != 'b') {
            throw new Error("Unknown photo parameter.");
        }
        this.votedForPhoto.emit(photo);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _photo__WEBPACK_IMPORTED_MODULE_2__["Photo"])
], PhotoPickerComponent.prototype, "photoA", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _photo__WEBPACK_IMPORTED_MODULE_2__["Photo"])
], PhotoPickerComponent.prototype, "photoB", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PhotoPickerComponent.prototype, "quantityOfRemainingRounds", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhotoPickerComponent.prototype, "votedForPhoto", void 0);
PhotoPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-picker',
        template: __webpack_require__(/*! raw-loader!./photo-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/photo-picker/photo-picker.component.html"),
        styles: [__webpack_require__(/*! ./photo-picker.component.scss */ "./src/app/photo-picker/photo-picker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhotoPickerComponent);



/***/ }),

/***/ "./src/app/photo.ts":
/*!**************************!*\
  !*** ./src/app/photo.ts ***!
  \**************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
class Photo {
}


/***/ }),

/***/ "./src/app/photos.service.ts":
/*!***********************************!*\
  !*** ./src/app/photos.service.ts ***!
  \***********************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



let PhotosService = class PhotosService {
    constructor() {
        this.photos = new Array();
        for (var i = 0; i < _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].numberOfPhotos; i++) {
            this.photos.push({ index: i, filePath: i.toString() });
        }
    }
    getPhotos() {
        return this.photos;
    }
};
PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhotosService);



/***/ }),

/***/ "./src/app/voting/voting.component.scss":
/*!**********************************************!*\
  !*** ./src/app/voting/voting.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGluZy92b3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/voting/voting.component.ts":
/*!********************************************!*\
  !*** ./src/app/voting/voting.component.ts ***!
  \********************************************/
/*! exports provided: VotingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function() { return VotingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/vote-selection */ "./src/app/algorithms/vote-selection.ts");
/* harmony import */ var _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/elimination/elimination-algorithm.service */ "./src/app/algorithms/elimination/elimination-algorithm.service.ts");
/* harmony import */ var _photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photos.service */ "./src/app/photos.service.ts");
/* harmony import */ var _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithms/mergesort/mergesort-algorithm.service */ "./src/app/algorithms/mergesort/mergesort-algorithm.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let VotingComponent = class VotingComponent {
    constructor() {
        this.numberOfPhotos = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].numberOfPhotos;
    }
    ngOnInit() {
        this.initialize();
    }
    onChoseAlgorithm(algorithm) {
        if (algorithm != "mergesort" && algorithm != "elimination") {
            throw new Error("Unknown algorithm parameter.");
        }
        if (algorithm == "mergesort") {
            this.algorithm = new _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__["MergesortAlgorithmService"]();
        }
        if (algorithm == "elimination") {
            this.algorithm = new _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["EliminationAlgorithmService"]();
        }
        let photoIndexArray = Array.from(Array(this.numberOfPhotos).keys());
        this.shuffleArray(photoIndexArray);
        this.algorithm.initialize(photoIndexArray);
        this.votingAlgorithmSelected = true;
        this.updateView();
    }
    onVoted(photo) {
        this.applyVote(photo);
    }
    initialize() {
        this.isFinished = false;
        this.votingAlgorithmSelected = false;
        this.mergeSortQuantitity =
            new _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__["MergesortAlgorithmService"]().getInitialQuantityOfRounds(this.numberOfPhotos);
        this.eliminationQuantity =
            new _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["EliminationAlgorithmService"]().getInitialQuantityOfRounds(this.numberOfPhotos);
        let photoService = new _photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]();
        this.photos = photoService.getPhotos();
    }
    applyVote(votedForIndex) {
        if (votedForIndex == 'a') {
            this.algorithm.voteFor(_algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA);
        }
        else if (votedForIndex == 'b') {
            this.algorithm.voteFor(_algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB);
        }
        else {
            // Add error.
            return;
        }
        this.updateView();
    }
    updateView() {
        if (this.algorithm.getRemainingQuantityOfRounds() == 0) {
            this.isFinished = true;
            this.results = this.convertResult(this.algorithm.getResults());
            return;
        }
        let voteOptions = this.algorithm.getVoteOptions();
        this.photoA = this.photos[voteOptions.optionA];
        this.photoB = this.photos[voteOptions.optionB];
        this.quantityOfRemainingRounds = this.algorithm.getRemainingQuantityOfRounds();
    }
    convertResult(results) {
        let output = {};
        for (let result of results) {
            if (!output.hasOwnProperty(result.score)) {
                output[result.score] = { score: result.score, photos: new Array(0) };
            }
            output[result.score].photos.push(this.photos[result.elementIndex]);
        }
        return Object.values(output).reverse();
    }
    shuffleArray(input) {
        let i, j, x;
        for (i = input.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = input[i];
            input[i] = input[j];
            input[j] = x;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], VotingComponent.prototype, "photos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VotingComponent.prototype, "algorithm", void 0);
VotingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voting',
        template: __webpack_require__(/*! raw-loader!./voting.component.html */ "./node_modules/raw-loader/index.js!./src/app/voting/voting.component.html"),
        styles: [__webpack_require__(/*! ./voting.component.scss */ "./src/app/voting/voting.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VotingComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    numberOfPhotos: 12,
    formsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_aBBI005lNZcfTaMFy2AEi_bzI4tJ75Bw0sOzzzGSwgrGYg/viewform?usp=pp_url&entry.468832349=0&entry.18502918=0&entry.1240903544=0&entry.2024966849=0&entry.1128203190=0&entry.1650137116=0&entry.407929624=0&entry.805346303=0&entry.307472477=0&entry.1709423003=0&entry.1115811744=0&entry.218112430=0"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\angular-photo-contest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map