/**
 * @author       Benjamin D. Richards <benjamindrichards@gmail.com>
 * @copyright    2013-2026 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../utils/Class');
var Controller = require('./Controller');

/**
 * @classdesc
 * The Vignette Filter Controller.
 *
 * This controller manages the vignette effect for a Camera.
 *
 * The vignette effect is a visual technique where the edges of the screen,
 * or a Game Object, gradually darken or blur,
 * creating a frame-like appearance. This effect is used to draw the player's
 * focus towards the central action or subject, enhance immersion,
 * and provide a cinematic or artistic quality to the game's visuals.
 *
 * A Vignette effect is added to a Camera via the FilterList component:
 *
 * ```js
 * const camera = this.cameras.main;
 *
 * camera.filters.internal.addVignette();
 * camera.filters.exnternal.addVignette();
 * ```
 *
 * @class Vignette
 * @extends Phaser.Filters.Controller
 * @memberof Phaser.Filters
 * @constructor
 * @since 4.0.0
 *
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The camera that owns this filter.
 * @param {number} [x=0.5] - The horizontal offset of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [y=0.5] - The vertical offset of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [radius=0.5] - The radius of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [strength=0.5] - The strength of the vignette effect.
 */
var Vignette = new Class({

    Extends: Controller,

    initialize: function Vignette (camera, x, y, radius, strength)
    {
        if (x === undefined) { x = 0.5; }
        if (y === undefined) { y = 0.5; }
        if (radius === undefined) { radius = 0.5; }
        if (strength === undefined) { strength = 0.5; }

        Controller.call(this, camera, 'FilterVignette');

        /**
         * The horizontal offset of the vignette effect. This value is normalized to the range 0 to 1.
         *
         * @name Phaser.Filters.Vignette#x
         * @type {number}
         * @since 4.0.0
         */
        this.x = x;

        /**
         * The vertical offset of the vignette effect. This value is normalized to the range 0 to 1.
         *
         * @name Phaser.Filters.Vignette#y
         * @type {number}
         * @since 4.0.0
         */
        this.y = y;

        /**
         * The radius of the vignette effect. This value is normalized to the range 0 to 1.
         *
         * @name Phaser.Filters.Vignette#radius
         * @type {number}
         * @since 4.0.0
         */
        this.radius = radius;

        /**
         * The strength of the vignette effect.
         *
         * @name Phaser.Filters.Vignette#strength
         * @type {number}
         * @since 4.0.0
         */
        this.strength = strength;
    }
});

module.exports = Vignette;
