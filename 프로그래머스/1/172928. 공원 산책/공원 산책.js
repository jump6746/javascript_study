function solution(park, routes) {
	const w = park[0].length;
	const h = park.length;
	const robot = [];

	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			if (park[j][i] === 'S') {
				robot.push(j, i);
			}
		}
	}

	for (let i = 0; i < routes.length; i++) {
		let [op, n] = routes[i].split(' ');
		n = parseInt(n);

		if (op === 'E') {
			let available = true;
			if (robot[1] + n > w - 1) continue;
			for (let j = robot[1]; j <= robot[1] + n; j++) {
				if (park[robot[0]][j] === 'X') {
					available = false;
				}
			}

			if (available) {
				robot[1] += n;
			}
		} else if (op === 'W') {
			let available = true;
			if (robot[1] - n < 0) continue;
			for (let j = robot[1]; j >= robot[1] - n; j--) {
				if (park[robot[0]][j] === 'X') {
					available = false;
				}
			}
			if (available) {
				robot[1] -= n;
			}
		} else if (op === 'S') {
			let available = true;
			if (robot[0] + n > h - 1) continue;
			for (let j = robot[0]; j <= robot[0] + n; j++) {
				if (park[j][robot[1]] === 'X') {
					available = false;
				}
			}

			if (available) {
				robot[0] += n;
			}
		} else if (op === 'N') {
			let available = true;
			if (robot[0] - n < 0) continue;
			for (let j = robot[0]; j >= robot[0] - n; j--) {
				if (park[j][robot[1]] === 'X') {
					available = false;
				}
			}
			if (available) {
				robot[0] -= n;
			}
		}
	}
	return robot;
}