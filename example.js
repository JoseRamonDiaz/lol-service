var gg = new (require('./client.js'))

// gg.Live('lan')
// 	.then((json) => {
// 		console.log(json)
// 	})
// 	.catch((error) => {
// 		console.error(error)
// 	})

// gg.Live('lan', function(error, data) {
// 	console.log(error || data)
// })

//gg.Renew("lan", 1766312, print);

gg.Champions('lan', 'Slayermx117', '11')
.then(
	(champs) => {
		console.log(champs);
	}
)
.catch(
	(error) => {
		console.log(error);
	}
);

function print(error, data){
	console.log(error || data);
}