function (getSearchResultSet, keyPresses, textBox) {

	var getSearchResultSets =
		keyPresses.
		map(function () {
			return textBox.value;
		}).throttleTime(1000).
		// TODO: Ensure that we only trigger a maximum of one search request per second
		concatMap(function (text) {
		// TODO: Ensure this sequence ends as soon as another key press arrives
		return getSearchResultSet(text).takeUntil(keyPresses);
	});

	return getSearchResultSets;
}
		
