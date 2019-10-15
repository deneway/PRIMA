// Variablen in Namespaces einklammern

namespace L02_FirstFudge {    

    import fudge = FudgeCore;

    window.addEventListener("load", handleLoad);

    function handleLoad(event: Event): void {        
        
        const canvas = document.querySelector("canvas");  //Nimmt nur erstes Element (SelectorAll nimmt alle)  const unveränderbar, let innerhalb des Blocks in dem sie deklariert ist, var innerhalb funktionsebne 
        console.log(canvas);

        let viewport: fudge.Viewport = new fudge.Viewport();
        viewport.initialize("Viewport", null, null,canvas);  
    
    }    
}