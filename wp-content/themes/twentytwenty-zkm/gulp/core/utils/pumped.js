/**
 * Booyah! Prefix your Gulp notifications
 * with a <Legendary> exclamation!
 *
 * @author Max GJ Panas <http://maxpanas.com/>
 *
 * @param achievement
 */
module.exports = function(achievement) {
	const exclamations = ['Sweet', 'Awesome', 'Epic', 'Wow', 'High Five', 'Yay', 'YEAH!', 'Booyah'];

	const randomIndex = Math.floor(Math.random() * exclamations.length);

	return [exclamations[randomIndex], '! ', achievement].join('');
};
