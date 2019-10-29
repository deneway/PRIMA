"use strict";
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
var L04_PongAnimated;
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
(function (L04_PongAnimated) {
    var ƒ = FudgeCore;
    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;
    let keyPressed = {};
    //globaleVariabeln
    let pong = new ƒ.Node("Pong");
    let ball = new ƒ.Node("Ball");
    let paddleL = new ƒ.Node("PaddleL");
    let paddleR = new ƒ.Node("PaddleR");
    let randX = Zufallswert();
    let randY = Zufallswert();
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas"); //Nimmt nur erstes Element (SelectorAll nimmt alle)  const unveränderbar, let innerhalb des Blocks in dem sie deklariert ist, var innerhalb funktionsebne 
        ƒ.RenderManager.initialize();
        let pong = createPong();
        let camComp = new ƒ.ComponentCamera();
        camComp.pivot.translateZ(42);
        paddleR.cmpTransform.local.translateX(20);
        paddleL.cmpTransform.local.translateX(-20);
        paddleR.getComponent(ƒ.ComponentMesh).pivot.scaleY(4);
        paddleL.getComponent(ƒ.ComponentMesh).pivot.scaleY(4);
        L04_PongAnimated.viewport = new ƒ.Viewport();
        L04_PongAnimated.viewport.initialize("Viewport", pong, camComp, canvas);
        ƒ.Debug.log(L04_PongAnimated.viewport);
        L04_PongAnimated.viewport.draw();
        // setIntervall(handler, milliseconds);
        // requestAnimationFrame(handler);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ƒ.Loop.start();
        document.addEventListener("keydown", function (event) {
            keyPressed[event.code] = true;
        }, false);
        document.addEventListener("keyup", function (event) {
            keyPressed[event.code] = false;
        }, false);
    }
    function update(_event) {
        if (keyPressed[ƒ.KEYBOARD_CODE.ARROW_UP]) {
            paddleR.cmpTransform.local.translate(new ƒ.Vector3(0, 0.3, 0));
        }
        if (keyPressed[ƒ.KEYBOARD_CODE.ARROW_DOWN]) {
            paddleR.cmpTransform.local.translate(new ƒ.Vector3(0, -0.3, 0));
        }
        if (keyPressed[ƒ.KEYBOARD_CODE.W]) {
            paddleL.cmpTransform.local.translate(new ƒ.Vector3(0, 0.3, 0));
        }
        if (keyPressed[ƒ.KEYBOARD_CODE.S]) {
            paddleL.cmpTransform.local.translate(new ƒ.Vector3(0, -0.3, 0));
        }
        MovePong();
        ƒ.RenderManager.update();
        L04_PongAnimated.viewport.draw();
    }
    //Gegenstände
    function createPong() {
        let mtrSolidBlue = new ƒ.Material("Solidwhite", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.5, 1, 1, 0)));
        let mtrSolidWhite = new ƒ.Material("Solidwhite", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 0)));
        let meshQuad = new ƒ.MeshQuad();
        ball.addComponent(new ƒ.ComponentMesh(meshQuad));
        paddleL.addComponent(new ƒ.ComponentMesh(meshQuad));
        paddleR.addComponent(new ƒ.ComponentMesh(meshQuad));
        ball.addComponent(new ƒ.ComponentMaterial(mtrSolidWhite));
        paddleL.addComponent(new ƒ.ComponentMaterial(mtrSolidBlue));
        paddleR.addComponent(new ƒ.ComponentMaterial(mtrSolidBlue));
        ball.addComponent(new ƒ.ComponentTransform());
        paddleL.addComponent(new ƒ.ComponentTransform());
        paddleR.addComponent(new ƒ.ComponentTransform());
        pong.appendChild(ball);
        pong.appendChild(paddleL);
        pong.appendChild(paddleR);
        return pong;
    }
    function MovePong() {
        ball.cmpTransform.local.translate(new ƒ.Vector3(randX, randY, 0));
        if (ball.cmpTransform.local.translation["data"][0] >= 21) {
            randX = randX * -1;
        }
        else if (ball.cmpTransform.local.translation["data"][0] <= -21) {
            randX = randX * -1;
        }
        else if (ball.cmpTransform.local.translation["data"][1] >= 14) {
            randY = randY * -1;
        }
        else if (ball.cmpTransform.local.translation["data"][1] <= -14) {
            randY = randY * -1;
        }
    }
    function Zufallswert() {
        if (Math.random() <= 0.5) {
            return Math.random() * (+0.3 - +0.05) + +0.05;
        }
        else {
            return (Math.random() * (+0.3 - +0.05) + +0.05) * -1;
        }
    }
})(L04_PongAnimated || (L04_PongAnimated = {}));
//Hausaufgabe: Ball bewegen !!
//# sourceMappingURL=Main.js.map