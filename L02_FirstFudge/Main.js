"use strict";
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
var L02_FirstFudge;
// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>
(function (L02_FirstFudge) {
    var fudge = FudgeCore;
    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas"); //Nimmt nur erstes Element (SelectorAll nimmt alle)  const unveränderbar, let innerhalb des Blocks in dem sie deklariert ist, var innerhalb funktionsebne 
        fudge.RenderManager.initialize();
        let node = new fudge.Node("Quad");
        let mesh = new fudge.MeshQuad();
        let cmpMesh = new fudge.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let mtrSolidWhite = new fudge.Material("Solidwhite", fudge.ShaderUniColor, new fudge.CoatColored(new fudge.Color(1, 1, 1, 1)));
        let camComp = new fudge.ComponentCamera();
        camComp.pivot.translateZ(2);
        let viewport = new fudge.Viewport();
        viewport.initialize("Viewport", node, camComp, canvas);
        fudge.Debug.log(viewport);
        viewport.draw();
    }
})(L02_FirstFudge || (L02_FirstFudge = {}));
//# sourceMappingURL=Main.js.map