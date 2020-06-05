class ScriptObj {
    constructor(name, id, email, lang) {
        this.fullname = name,
            this.id = id,
            this.email = email,
            this.language = lang,
            this.output = this.output()
    }
    output() {
        return `Hello World, this is ${this.fullname} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`
    }
}

sammyScript = new ScriptObj("Samaru Ebinne", "HNG-00086", "sammyebinne@gmail.com", "JavaScript");



console.log(sammyScript.output);

