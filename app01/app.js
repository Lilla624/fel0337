"use strict";
/*
File: app.js
Author: Varga Lilla
Copyright: 2024, Varga Lilla
Group: Szoft I-1-N
Date: 2024-05-30
Github: https://github.com/Lilla624/
Licenc: GNU GPL
*/

class ellipszoid {
    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.sideAInput = document.querySelector("#sideA");
        this.sideBInput = document.querySelector("#sideB");
        this.sideCInput = document.querySelector("#sideC");
        this.volumeInput = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }
    handleEvent() {
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        var _a, _b;
        const sideA = Number((_a = this.sideAInput) === null || _a === void 0 ? void 0 : _a.value);
        const sideB = Number((_b = this.sideBInput) === null || _b === void 0 ? void 0 : _b.value);
        const sideC = Number((_c = this.sideCInput) === null || _c === void 0 ? void 0 : _c.value);
        const volume = this.calcArea(sideA, sideB, sideC);
        this.rederResult(volume);
    }
    calcVolume(sideA, sideB, sideC) {
        const rad = 4/3 * Math.PI * sideA * sideB * sideC;
        return Math.pow(volume) * Math.sin(rad);
    }
    rederResult(volume) {
        if (this.volumeInput) {
            this.volumeInput.value = String(volume);
        }
    }
}
new ellipszoid();