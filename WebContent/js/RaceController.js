var app = angular.module('app');
app.controller('RaceController', ['$scope', '$timeout',
function ($scope, $timeout) {
	var text = 'For the thousandth time he remarshalled in his mind the events of those last few days before the tide had so suddenly turned.'
	var index = 0;
	var startTime = undefined;
	var endTime = undefined;

	var getWPM = function () {
		var timeDiff = (endTime - startTime) / 60000;
		
		return Math.round(text.split(' ').length / timeDiff);
	};

	var selectIndex = function (array, index) {
		if (index > -1 && index < array.length) {
			array[index] = '<span class="selectedWord">' + array[index] + '</span>';		
		} else if (index === array.length) {
			endTime = new Date();
			$scope.message = 'Done!';
			$timeout(function () {
				var wpm = getWPM();
				$scope.init();
				$scope.message = (wpm >= 60 ? 'Not bad, ' : '') + wpm + ' WPM. Try again?';
			}, 1000);
		}
		
		return array;
	};
	
	var getTextFromHTML = function (html) {
		var div = document.createElement('div');
		div.innerHTML = html;

	       	return div.textContent || div.innerText || '';	
	};


	$scope.init = function () {
		startTime = undefined;
		endTime = undefined;
		index = 0;
		$scope.text = selectIndex(text.split(' '), index).join(' ');
		$scope.message = 'Type the text into the input box.';
		$scope.inputWord;
	};

	$scope.change = function () {
		var wordArray = getTextFromHTML($scope.text).split(' ');
		var selectedWord = wordArray[index];

		if (startTime === undefined) {
			startTime = new Date();
		}

		if (index < wordArray.length - 1 && $scope.inputWord === selectedWord + ' ' || 
					index === wordArray.length - 1 && $scope.inputWord === selectedWord) {
			$scope.text = selectIndex(getTextFromHTML($scope.text).split(' '), ++index).join(' ');	
			$scope.inputWord = '';
		} 
	};
}]);
