function compareArrays(arr1, arr2) {
	return arr1.length !== arr2.length ? false : arr1.every((elem, index) => elem === arr2[index])
}

function getUsersNamesInAgeRange(users, gender) {
	return users
	    .filter((elem) => elem.gender === gender)
		.reduce((res, current, ind, arr) => res += current.age / arr.length, 0)
}