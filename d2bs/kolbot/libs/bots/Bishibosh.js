/**
*	@filename	Bishibosh.js
*	@author		amOKchen, DarkHorseDre
*	@desc		kill Bishibosh
*/

function Bishibosh() {
	Town.doChores();
	Pather.useWaypoint(3);
	Precast.doPrecast(true);

	if (!Pather.moveToPreset(me.area, 1, 734, 0, 0)) { // area, unitType, unitId, offX, offY, clearPath, pop (
		throw new Error("Failed to move to Bishibosh");
	}

	Attack.clear(15, 0, getLocaleString(2869)); // Bishibosh

	return true;
}