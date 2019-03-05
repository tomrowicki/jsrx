function (getSearchResultSet, keyPresses, textBox) {

	var getSearchResultSets =
		keyPresses.
			map(function () {
				return textBox.value;
			}).
			throttleTime(1000).

			// TODO: Make sure we only get distinct values
			distinctUntilChanged().
			// TODO: Make sure the text is not empty
      filter(function(text) {return text.size > 0;}).

			concatMap(function (text) {
				return getSearchResultSet(text).takeUntil(keyPresses);
			});

	return getSearchResultSets;
}
		
