"use strict";
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
var L03_PongPaddle;
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
(function (L03_PongPaddle) {
    var ƒ = FudgeCore;
    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;
    //globaleVariabeln
    let pong = new ƒ.Node("Pong");
    let ball = new ƒ.Node("Ball");
    let paddleL = new ƒ.Node("PaddleL");
    let paddleR = new ƒ.Node("PaddleR");
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
        let viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", pong, camComp, canvas);
        ƒ.Debug.log(viewport);
        viewport.draw();
    }
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
})(L03_PongPaddle || (L03_PongPaddle = {}));
//Hausaufgabe NicoKlein97 hoch und herunterfahren Eventlistener
//# sourceMappingURL=Main.js.map