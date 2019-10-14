import "./plugins/rexuiplugin.min.js"

export default class PropertyButton extends RexPlugins.UI.Label {
    constructor(scene) {
        if (!scene) {
            console.error("HEY! PropertyToggle needs a scene!")
            return
        }

        const x = 850;
        const y = 50;
        const width = 20;
        const height = 20;

        const background = scene.rexUI.add.roundRectangle(x, y, 0, 0, height / 2, 0xff99ff)
        const text = scene.add.text(x - height / 8, y - height / 4, "P", { fontSize: height * 2 / 3 })

        super(scene, { width, height, x, y, background });
        super.add(text)
        this.background = background
        this.text = text

        this.setInteractive().on('pointerdown', (...args) => this.onClick(args) );
    }

    //
    onClick(...args) {
        console.log(args)
    }

    // override
    setInteractive() {
        this.background.setInteractive()
        return this;
    }
    on(...args) {
        this.background.on(...args)
    }
}