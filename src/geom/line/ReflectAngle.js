/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2026 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Angle = require('./Angle');
var NormalAngle = require('./NormalAngle');

/**
 * Calculates the reflected angle of Line A off the surface represented by Line B. This is the outgoing angle based on the angle of incidence (Line A) and the surface normal of Line B. The result is in radians.
 *
 * @function Phaser.Geom.Line.ReflectAngle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} lineA - The first line.
 * @param {Phaser.Geom.Line} lineB - The second line.
 *
 * @return {number} The reflected angle between each line.
 */
var ReflectAngle = function (lineA, lineB)
{
    return (2 * NormalAngle(lineB) - Math.PI - Angle(lineA));
};

module.exports = ReflectAngle;
