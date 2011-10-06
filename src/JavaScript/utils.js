exports.a = function (x)
{
	console.log(x);
}

exports.foreach = function(action, arr)
{
	for (var i = 0; i < arr.length; i++)
	{
		action(arr[i], i, arr);
	}
}

exports.sum = function (numbers)
{
/*	function addToTotal(num) { total += num; }

	var total = 0;
	exports.foreach(addToTotal, numbers);
	return total;*/
	
	function add(a, b) { return a + b; }
	return exports.reduce(add, 0, numbers);
}

function sum_all()
{
	return reduce(add, 0, arguments);
}

exports.reduce = function(combine, base, arr)
{
	var res = base;
	exports.foreach(function(a) { res = combine(res, a); }, arr);
	return res;
}

exports.countZeroes = function(numbers)
{
/*	var res = 0;
	exports.foreach(function(a) { if (a == 0) res++; }, numbers);
	return res;*/
	
	function count(c, a) { return a == 0? c + 1 : c; }
	return exports.reduce(count, 0, numbers);
}

//[2,4].every(isEven) //true
//[2,4].some(isOdd) //false
//[2,4].map(power(2)) // [4,16]
//[2,4].filter(lessThan(3)) // [2]

//forEach
//[2,4].reduce(substract, 0) //0-2-4=6
//[2,4].reduceRight(substact, 0) //0-4-2=6

exports.every = function(predicate, arr)
{
/*	var res = true;
	exports.foreach(
//		function(a) { res &= predicate(a) },
		function(a) { res = predicate(a)? res : false },
		arr);
	return res;*/
	
	var res = true;
	for (var i = 0; i < arr.length; i++)
	{
		if (!predicate(arr[i]))
		{
			res = false;
			break;
		}
	}
	return res;
}

exports.isEven = function(a)
{
	return a % 2 == 0;
}

exports.some = function(predicate, arr)
{
	var res = false;
	exports.foreach(
		function(a) { res = predicate(a)? true : res; },
		arr);
	return res;
}

exports.map = function (action, arr)
{
	var res = [];
	exports.foreach(
		function (a) { res.push(action(a)); },
		arr);
	return res;
}

exports.power = function (a)
{
	return function (b)
	{
		var total = 1;
		for (var i = 0; i < a; i++)
		{
			total = total * b;
		}
		return total;
	};
}

exports.filter = function(predicate, arr)
{
	var res = [];
	exports.foreach(
		function(a) { if (predicate(a)) res.push(a); },
		arr);
	return res;
}

exports.negate = function(fn)
{
	return function()
	{
		fn.apply(null, arguments);
	}
}
