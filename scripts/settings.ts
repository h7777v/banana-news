function SC(name: string, value: string, days: number): undefined{
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
};

function GC(name: string): string | null {
    const cookies = document.cookie.split("; ");
    for (const c of cookies) {
        const [key, val] = c.split("=");
        if (key == name) return val;
    }
    return null;
};

window.addEventListener("load", () => {
    var mode = GC("rndmode");
    var val: string;
    switch (mode){
        case "0":
            val = "false";
            break;
        case "1":
            val = "-1";
            break;
        case "2":
            val = "true";
            break;
        default:
            val = "true";
            mode = "2";
            break;
    }
    (()=>{
        const radios = document.querySelectorAll<HTMLInputElement>('input[name="toggle"]');
        for (const radio of radios) {
            radio.checked = (radio.value === val);
        };
    })();
});

const button = document.getElementById("apply") as HTMLButtonElement;

button.addEventListener("click", (event: MouseEvent) => {
    const select = document.querySelector<HTMLInputElement>('input[name="toggle"]:checked');
    if (select) {
        switch (select.value) {
            case "false":
                SC("rndmode", "0", 30);
                break;
            case "-1":
                SC("rndmode", "1", 30);
            case "true":
                SC("rndmode", "2", 30);
            default:
                SC("rndmode", "2", 30);
                break;
        }
    }
});