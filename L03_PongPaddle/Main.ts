// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>

namespace L03_PongPaddle {    

    import ƒ = FudgeCore;

    export let viewport: ƒ.Viewport;

    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;

    //globaleVariabeln
    let pong: ƒ.Node = new ƒ.Node("Pong");
    let ball: ƒ.Node = new ƒ.Node("Ball");
    let paddleL: ƒ.Node = new ƒ.Node("PaddleL"); 
    let paddleR: ƒ.Node = new ƒ.Node("PaddleR");

    function handleLoad (_event: Event): void {        
        
        const canvas: HTMLCanvasElement = document.querySelector("canvas");  //Nimmt nur erstes Element (SelectorAll nimmt alle)  const unveränderbar, let innerhalb des Blocks in dem sie deklariert ist, var innerhalb funktionsebne 
        ƒ.RenderManager.initialize();

        let pong: ƒ.Node = createPong();

        let camComp: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        camComp.pivot.translateZ(42);

        paddleR.cmpTransform.local.translateX(20);
        paddleL.cmpTransform.local.translateX(-20);
        ( <ƒ.ComponentMesh> paddleR.getComponent(ƒ.ComponentMesh)).pivot.scaleY(4);
        ( <ƒ.ComponentMesh> paddleL.getComponent(ƒ.ComponentMesh)).pivot.scaleY(4);
        
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", pong, camComp, canvas);  
        ƒ.Debug.log(viewport);

        KeyDownEvent();

        viewport.draw();
    
    }    

    function createPong(): ƒ.Node {

        let mtrSolidBlue: ƒ.Material = new ƒ.Material("Solidwhite", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.5, 1, 1, 0)));
        let mtrSolidWhite: ƒ.Material = new ƒ.Material("Solidwhite", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 0)));
        let meshQuad: ƒ.MeshQuad = new ƒ.MeshQuad();

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

    //Game Properties

    function KeyDownEvent(): void {

        document.body.onkeydown = function(e: KeyboardEvent): void {
            if (e.keyCode == 38) {
                (<ƒ.ComponentMesh>paddleR.getComponent(ƒ.ComponentMesh)).pivot.translateY(0.35); 
                viewport.draw();
            } else if (e.keyCode == 40) {
                (<ƒ.ComponentMesh>paddleR.getComponent(ƒ.ComponentMesh)).pivot.translateY(-0.35);
                viewport.draw();
            } else if (e.keyCode == 87) {
                (<ƒ.ComponentMesh>paddleL.getComponent(ƒ.ComponentMesh)).pivot.translateY(0.35);
                viewport.draw();
            } else if (e.keyCode == 83) {
                (<ƒ.ComponentMesh>paddleL.getComponent(ƒ.ComponentMesh)).pivot.translateY(-0.35);
                viewport.draw();
            } 
        };

}       
}
