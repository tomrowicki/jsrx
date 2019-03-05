function (keyPresses, isAlpha) {

	return keyPresses.
		map(function (e) { return String.fromCharCode(e.keyCode); }).

		// Ensure we only have alphabetic characters
		filter(function (character) { return isAlpha(character); }).

		// TODO: Filter out successive repetitive keys
    distinctUntilChanged()

		// Building up a string of all the characters typed.
		scan(function (stringSoFar, character) {
			return stringSoFar + character;
		}, '');
}
