// Variablen in Namespaces einklammern
///<reference types="../FUDGE/Build/FudgeCore.js"/>

namespace L04_PongAnimated {    

    interface KeyPress {
        [code: string]: boolean;
    }



    import ƒ = FudgeCore;

    export let viewport: ƒ.Viewport;

    window.addEventListener("load", handleLoad);
    // export let viewport: fudge.Viewport;
    let keyPressed: KeyPress = {};
    //globaleVariabeln
    let pong: ƒ.Node = new ƒ.Node("Pong");
    let ball: ƒ.Node = new ƒ.Node("Ball");
    let paddleL: ƒ.Node = new ƒ.Node("PaddleL"); 
    let paddleR: ƒ.Node = new ƒ.Node("PaddleR");

    let randX: number = Zufallswert();
    let randY: number = Zufallswert();

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
        viewport.draw();

        // setIntervall(handler, milliseconds);
        // requestAnimationFrame(handler);
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        ƒ.Loop.start();

        document.addEventListener("keydown", function (event) {
            keyPressed[event.code] = true;
        },                        false);

        document.addEventListener("keyup", function (event) {
            keyPressed[event.code] = false;
        },                        false);

          
    }    

    function update(_event: Event) {

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
        viewport.draw();
    }



    //Gegenstände
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

    function MovePong(): void {
        ball.cmpTransform.local.translate(new ƒ.Vector3(randX, randY, 0));
        if (ball.cmpTransform.local.translation["data"][0] >= 21) {
            randX = randX * -1;
            
        } else if (ball.cmpTransform.local.translation["data"][0] <= -21) {
            randX = randX * -1;
            
        } else if (ball.cmpTransform.local.translation["data"][1] >= 14) {
            randY = randY * -1;
        } else if (ball.cmpTransform.local.translation["data"][1] <= -14) {
            randY = randY * -1; 
    }
    }

    function Zufallswert(): number {
        if (Math.random() <= 0.5) {
            return Math.random() * (+0.3 - +0.05) + + 0.05;
        } else {
            return (Math.random() * (+0.3 - +0.05) + + 0.05) * -1;
        }
    }
 



}


//Hausaufgabe: Ball bewegen !!