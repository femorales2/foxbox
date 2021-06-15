/**
 * we take the first word of the sentences and the rest will be in wordsLeft
 * @param pivot
 * @param wordsLeft
 * @returns {*[]|*}
 */

export default function combinations(pivot, ...wordsLeft) {
	if(wordsLeft.length) {

		let recursiveArrayHandler = wordsLeft.reduce((accumulatedWords, currentWord) => {
			let combinedLastWithNewOne = accumulatedWords[accumulatedWords.length - 1] + ` ${currentWord}`;

			accumulatedWords.push(combinedLastWithNewOne);

			return accumulatedWords;

		},[pivot]); // initialized with the pivot word

		return recursiveArrayHandler.concat(combinations(...wordsLeft));

	} else {

		return [pivot];

	}

}
