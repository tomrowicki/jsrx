var exercise12 = function() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];


	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

//150x200px

	return movieLists // Complete this expression!
	.map(function (movieType) {
		return movieType.videos.map(function (video) {
			return video.boxarts.filter(function(boxart){
				if (boxart.width === 150 && boxart.height == 200) {
					return boxart;
				}
			}).map(function(filteredBoxart){
					return {"id": video.id, "title": video.title, "boxart": filteredBoxart.url};
			});
		}).concatAll();
	}).concatAll();

};

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

console.log(exercise12());
