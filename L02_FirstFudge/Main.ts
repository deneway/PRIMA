// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>

namespace L02_FirstFudge {    

    import fudge = FudgeCore;

    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;

    function handleLoad (_event: Event): void {        
        
        const canvas: HTMLCanvasElement = document.querySelector("canvas");  //Nimmt nur erstes Element (SelectorAll nimmt alle)  const unveränderbar, let innerhalb des Blocks in dem sie deklariert ist, var innerhalb funktionsebne 
        fudge.RenderManager.initialize();

        let node: fudge.Node = new fudge.Node("Quad");

        let mesh: fudge.MeshQuad = new fudge.MeshQuad();
        let cmpMesh: fudge.ComponentMesh = new fudge.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        let mtrSolidWhite: fudge.Material = new fudge.Material("Solidwhite", fudge.ShaderUniColor, new fudge.CoatColored(new fudge.Color(1,1,1,0)));
        let cmpMaterial: fudge.ComponentMaterial = new fudge.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);

        let camComp: fudge.ComponentCamera = new fudge.ComponentCamera();
        camComp.pivot.translateZ(2);
        
        let viewport: fudge.Viewport = new fudge.Viewport();
        viewport.initialize("Viewport", node, camComp, canvas);  
        fudge.Debug.log(viewport);

        viewport.draw();
    
    }    
}