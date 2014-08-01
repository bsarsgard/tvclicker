// Declare game object
var Game = {
// game variables
name: "",
speed: 10,
rank: 999,
viewers: 0,
cash: 0,
day: 0,
dayPart: 0,
ticks: 0,
schedule: [
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
],
staff: [],
hires: [],
cheevos: [],

// state
istvclick: false,

// collections
maxViewers: 313900000,
jobs: [{
	id: 0,
	name: "Executive",
	salary: 100000,
	viewers: 1.5,
	cash: 1.5,
},{
	id: 1,
	name: "Producer",
	salary: 1000,
	viewers: 1.1,
	cash: 1.4,
},{
	id: 2,
	name: "Director",
	salary: 1000,
	viewers: 1.4,
	cash: 1.1,
},{
	id: 3,
	name: "Editor",
	salary: 1000,
	viewers: 1.2,
	cash: 1.2,
},{
	id: 4,
	name: "Manager",
	salary: 100,
	viewers: 1.1,
	cash: 1.1,
},{
	id: 5,
	name: "Sales",
	salary: 100,
	viewers: 1,
	cash: 1.2,
},{
	id: 6,
	name: "Cameraman",
	salary: 100,
	viewers: 1.2,
	cash: 1,
},{
	id: 7,
	name: "Writer",
	salary: 10,
	viewers: 1,
	cash: 1.1,
},{
	id: 8,
	name: "Actor",
	salary: 10,
	viewers: 1.1,
	cash: 1,
}],
dayParts: [{
	id: 0,
	name: "Morning",
	abbr: "mor",
	viewers: 1.3,
	cash: 1,
	night: false,
},{
	id: 1,
        name: "Afternoon",
	abbr: "aft",
	viewers: 1.2,
	cash: 1.2,
	night: false,
},{
	id: 2,
        name: "Evening",
	abbr: "eve",
	viewers: 2,
	cash: 2,
	night: true,
},{
	id: 3,
        name: "Late Night",
	abbr: "lat",
	viewers: 1,
	cash: 1.1,
	night: true,
}],
days: [{
	id: 0,
	name: "Monday",
	abbr: "mon",
	viewers: 1,
	cash: 1,
},{
	id: 1,
        name: "Tuesday",
	abbr: "tue",
	viewers: 1,
	cash: 1,
},{
	id: 2,
        name: "Wednesday",
	abbr: "wed",
	viewers: 1,
	cash: 1,
},{
	id: 3,
        name: "Thursday",
	abbr: "thu",
	viewers: 1,
	cash: 1,
},{
	id: 4,
        name: "Friday",
	abbr: "fri",
	viewers: 2,
	cash: 2,
},{
	id: 5,
        name: "Saturday",
	abbr: "sat",
	viewers: 2,
	cash: 2,
},{
	id: 6,
        name: "Sunday",
	abbr: "sun",
	viewers: 2,
	cash: 2,
}],
shows: [{
	id: 0,
	name: "Static",
	cost: 0,
	cash: 0,
	viewers: 0,
	episodes: [{
		name: 'Static',
		gif: 'img/tvclicker/static.gif',
	}],
}, {
	id: 1,
	name: "Infomercials",
	cost: 0,
	cash: 2,
	viewers: -1,
	episodes: [{
		name: 'The Burger Wizard',
		gif: 'img/tvclicker/infomercialburger.gif',
	},{
		name: 'The Chip Master',
		gif: 'img/tvclicker/infomercial-chips.gif',
	},{
		name: 'The Closet Closer',
		gif: 'img/tvclicker/infomercial-clothing.gif',
	},{
		name: 'The Dummy Drill',
		gif: 'img/tvclicker/infomercial-drill.gif',
	},{
		name: 'The Bingo Wingo',
		gif: 'img/tvclicker/infomercial-flabby.gif',
	},{
		name: 'The Re-Mulletizer',
		gif: 'img/tvclicker/infomercial-hair.gif',
	},{
		name: 'The Hammer Whammer',
		gif: 'img/tvclicker/infomercial-hammer.gif',
	},{
		name: 'INTERNET INTERNET INTERNET',
		gif: 'img/tvclicker/infomercial-internet.gif',
	},{
		name: 'The Litter Boxer',
		gif: 'img/tvclicker/infomercial-litter.gif',
	},{
		name: 'Magic Meatball Bowls',
		gif: 'img/tvclicker/infomercial-meatball.gif',
	},{
		name: 'Milk is hard',
		gif: 'img/tvclicker/infomercial-milk.gif',
	},{
		name: "What the ... I don't even",
		gif: 'img/tvclicker/infomercial-mouth-guard.gif',
	},{
		name: 'Pillow wants you to kill',
		gif: 'img/tvclicker/infomercial-pillow.gif',
	},{
		name: 'The Plunger Munger',
		gif: 'img/tvclicker/infomercial-plunger.gif',
	},{
		name: 'The Seed Sifter',
		gif: 'img/tvclicker/infomercial-seeds.gif',
	},{
		name: 'Learn how to eat a fucking taco',
		gif: 'img/tvclicker/infomercial-taco.gif',
	},{
		name: 'The Tape Murder',
		gif: 'img/tvclicker/infomercial-tape-measure.gif',
	},{
		name: "Help I'm being held against my will",
		gif: 'img/tvclicker/infomercial-window.gif',
	}],
}, {
	id: 2,
	name: "Televangelism",
	cost: 0,
	cash: 0,
	viewers: 1,
	episodes: [{
		name: "Sing for Jesus!",
		gif: "img/tvclicker/televangelism-choir.gif",
	},{
		name: "Satan put a spider on me, oh god kill it kill it!",
		gif: "img/tvclicker/televangelism-coat.gif",
	},{
		name: "Dancing the Gay Away",
		gif: "img/tvclicker/televangelism-dance.gif",
	},{
		name: "The #1 Club",
		gif: "img/tvclicker/televangelism-finger.gif",
	},{
		name: "Drunk on Jesus!",
		gif: "img/tvclicker/televangelism-seizure.gif",
	},{
		name: "Uncle Nutsy is the ONE TRUE GOD!",
		gif: "img/tvclicker/televangelism-unclenutsy.gif",
	}],
}, {
	id: 3,
	name: "Game Shows",
	cost: 10,
	cash: 3,
	viewers: 1,
	episodes: [{
		name: "Double Trouble",
		gif: "img/tvclicker/gameshow-doubledare.gif",
	},{
		name: "Nick of Time",
		gif: "img/tvclicker/gameshow-fistbump.gif",
	},{
		name: "Turd Furgison",
		gif: "img/tvclicker/gameshow-jeopardy.gif",
	},{
		name: "Game shows for people who didn't know they were on a game show!",
		gif: "img/tvclicker/gameshow-winner.gif",
	}],
}, {
	id: 4,
	name: "Cartoons",
	cost: 10,
	cash: 1,
	viewers: 3,
	episodes: [{
		name: "Butt Heads",
		gif: 'img/tvclicker/cartoon-beavisandbutthead.gif',
	},{
		name: "Denver's Lab",
		gif: 'img/tvclicker/cartoon-dexterslab.gif',
	},{
		name: "Pink Brains",
		gif: 'img/tvclicker/cartoon-pinkyandthebrain.gif',
	},{
		name: "Powderpuffs",
		gif: 'img/tvclicker/cartoon-ppg.gif',
	},{
		name: "Ron Stompy",
		gif: 'img/tvclicker/cartoon-renandstimpy.gif',
	},{
		name: "Teenage Militant Nazi Turtles",
		gif: 'img/tvclicker/cartoon-tmnt.gif',
	},{
		name: "Lunar Seamen",
		gif: 'img/tvclicker/cartoon-sailormoon.gif',
	},{
		name: "Ex-Men",
		gif: 'img/tvclicker/cartoon-xmen.gif',
	}],
}, {
	id: 5,
	name: "Sitcoms",
	cost: 100,
	cash: 2,
	viewers: 2,
	episodes: [{
		name: 'The Samsons',
		gif: 'img/tvclicker/cartoon-bart.gif',
	},{
		name: "Boy's Meat World",
		gif: "img/tvclicker/drama-boy-meets-world.gif"
	},{
		name: "Fresh Pants in Bel-Air",
		gif: "img/tvclicker/drama-fresh-prince.gif"
	},{
		name: "Friendship",
		gif: "img/tvclicker/drama-friends.gif"
	},{
		name: "Full Flush",
		gif: "img/tvclicker/drama-full-house.gif"
	},{
		name: "Home Employment",
		gif: "img/tvclicker/drama-home-improvement.gif"
	}],
}, {
	id: 6,
	name: "Drama",
	cost: 5000,
	cash: 3,
	viewers: 3,
	episodes: [{
		name: "Beaver Hills 01209",
		gif: "img/tvclicker/drama-90210.gif",
	},{
		name: "Next Files",
		gif: "img/tvclicker/drama-x-files.gif"
	},{
		name: "Mel Rose's Face",
		gif: "img/tvclicker/drama-melrose-place.gif"
	},{
		name: "UHF Rambo",
		gif: "img/tvclicker/drama-rambo.gif"
	},{
		name: "Saved by the Balls",
		gif: "img/tvclicker/drama-saved-by-the-bell.gif"
	}],
}],
awards: [{
	id: 0,
	name: "A room with a viewer",
	desc: "Get 1 viewer",
	check: function() {
		return Game.viewers > 0;
	},
},{
	id: 1,
	name: "Quick buck",
	desc: "Earn 1 dollar",
	check: function() {
		return Game.cash > 0;
	},
},{
	id: 2,
	name: "Saturday morning cartoons",
	desc: "Schedule cartoons in the Saturday Morning slot",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			if (Game.dayParts[iDayPart].name == 'Morning') {
				var iDay = Game.days.length;
				while (iDay--) {
					if (Game.days[iDay].name == 'Saturday') {
						if (Game.shows[Game.schedule[iDayPart][iDay]].name == 'Cartoons') {
							return true;
						}
						break;
					}
				}
				break;
			}
		}
		return false;
	},
},{
	id: 3,
	name: "Cartoon Network",
	desc: "Schedule nothing but Cartoons",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Cartoons') {
					return false;
				}
			}
		}
		return true;
	},
},{
	id: 4,
	name: "We Know Drama",
	desc: "Schedule nothing but Drama",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Drama') {
					return false;
				}
			}
		}
		return true;
	},
},{
	id: 5,
	name: "ClearChannel",
	desc: "Schedule nothing but infomercials",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Infomercials') {
					return false;
				}
			}
		}
		return true;
	},
},{
	id: 6,
	name: "Welcome aboard",
	desc: "Hire an employee",
	check: function() {
		return Game.staff.length > 0;
	},
},{
	id: 7,
	name: "You're Fired",
	desc: "Fire an employee",
	count: 0,
	check: function() {
		if (this.count > Game.staff.length) {
			return true;
		}
		this.count = Game.staff.length;
		return false;
	},
},{
	id: 8,
	name: "Danger Zone",
	desc: "Go into debt (negative cash reserves)",
	check: function() {
		return Game.cash < 0;
	},
},{
	id: 9,
	name: "One ... MILLION Dollars",
	desc: "Have a $1 million cash balance",
	check: function() {
		return Game.cash >= 1000000;
	},
},{
	id: 10,
	name: "We're number 1!",
	desc: "Reach rank #1",
	check: function() {
		return Game.rank == 1;
	},
},{
	id: 11,
	name: "CEO",
	desc: "Hire an executive",
	check: function() {
		var iStaff = Game.staff.length;
		while (iStaff--) {
			if (Game.jobs[Game.staff[iStaff].job].name == "Executive") {
				return true;
			}
		}
		return false;
	},
},{
	id: 12,
	name: "UHF",
	desc: "Make it out of Public Access",
	check: function() {
		return Game.rank <= 150;
	}
},{
	id: 13,
	name: "Network TV",
	desc: "Make it onto the national networks",
	check: function() {
		return Game.rank <= 100;
	}
},{
	id: 14,
	name: "Cable Time",
	desc: "Make it onto the cable networks",
	check: function() {
		return Game.rank <= 50;
	}
},{
	id: 15,
	name: "HBOwned",
	desc: "Make it onto premium cable",
	check: function() {
		return Game.rank <= 10;
	}
},{
	id: 16,
	name: "Golden Parachute",
	desc: "Fire an executive",
	count: 0,
	check: function() {
		var count = 0;
		var iStaff = Game.staff.length;
		while (iStaff--) {
			if (Game.jobs[Game.staff[iStaff].job].name == "Executive") {
				count++;
			}
		}
		if (this.count > count) {
			return true;
		}
		this.count = count;
		return false;
	},
},{
	id: 17,
	name: "Hiring Spree",
	desc: "Hire all available staff",
	check: function() {
		return Game.hires.length == 0;
	},
},{
	id: 18,
	name: "Very Funny",
	desc: "Schedule nothing but Sitcoms",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Sitcoms') {
					return false;
				}
			}
		}
		return true;
	},
},{
	id: 19,
	name: "The God Channel",
	desc: "Schedule nothing but Televangelism",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Televangelism') {
					return false;
				}
			}
		}
		return true;
	},
},{
	id: 20,
	name: "Gaming the System",
	desc: "Schedule nothing but Game Shows",
	check: function() {
		var iDayPart = Game.dayParts.length;
		while (iDayPart--) {
			var iDay = Game.days.length;
			while (iDay--) {
				if (Game.shows[Game.schedule[iDayPart][iDay]].name != 'Game Shows') {
					return false;
				}
			}
		}
		return true;
	},
}],

// serialization
save: function() {
	$.cookie('tvclicker', {
		name: this.name,
		rank: this.rank,
		viewers: this.viewers,
		cash: this.cash,
		day: this.day,
		dayPart: this.dayPart,
		ticks: this.ticks,
		schedule: this.schedule,
		staff: this.staff,
		hires: this.hires,
		cheevos: this.cheevos,
	}, { expires: 365 });
},
load: function() {
	var cookie = $.cookie('tvclicker');
	if (cookie !== undefined) {
		this.name = cookie.name;
		this.rank = cookie.rank;
		this.viewers = cookie.viewers;
		this.cash = cookie.cash;
		this.day = cookie.day;
		this.dayPart = cookie.dayPart;
		this.ticks = cookie.ticks;
		this.schedule = cookie.schedule;
		this.staff = cookie.staff;
		this.hires = cookie.hires;
		this.cheevos = cookie.cheevos;
	}
},
reset: function() {
	Game.name = "Awful Channel " + Math.floor(Math.random() * 99 + 1);
	Game.rank = 999;
	Game.viewers = 0;
	Game.cash = 0;
	Game.day = 0;
	Game.dayPart = 0;
	Game.ticks = 0;
	Game.schedule = [
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
	];
	Game.staff = [];
	Game.hires = [];
	//Game.cheevos = [];
	Game.refreshHires();

	// clear cheevos counts
	var iAwards = this.awards.length;
	while (iAwards--) {
		if (this.awards[iAwards].count !== undefined) {
			this.awards[iAwards].count = 0;
		}
	}
	Game.save();
},

// game methods
click: function() {
	this.viewers++;
},
setSchedule: function(evt) {
	evt.preventDefault();
	Game.schedule[evt.data.dayPart][evt.data.day] = evt.data.show;
	Game.updateSchedule();
	Game.updateBudget();
},
doHire: function(evt) {
	evt.preventDefault();
	var hire = Game.hires[evt.data.hire];
	var salary = (Game.jobs[hire.job].salary * hire.salary);
	Game.cash -= salary;
	Game.staff.push(hire);
	Game.hires.splice(evt.data.hire, 1);
	Game.updateHires();
	Game.updateStaff();
	Game.updateBudget();
	Game.updateStats();
},
doDismiss: function(evt) {
	evt.preventDefault();
	Game.hires.splice(evt.data.hire, 1);
	Game.updateHires();
},
doFire: function(evt) {
	evt.preventDefault();
	Game.staff.splice(evt.data.fire, 1);
	Game.updateStaff();
	Game.updateBudget();
},
dismissAwardNotification: function(evt) {
	$("#award-notification-" + evt.data.id).remove();
},
getRatings: function(iDayPart, iDay) {
	var show = Game.shows[Game.schedule[iDayPart][iDay]];
	var day = Game.days[iDay];
	var dayPart = Game.dayParts[iDayPart];
	// get new viewers
	var viewers = (show.viewers * day.viewers * dayPart.viewers);
	// generate cash
	var cash = (show.cash * day.cash * dayPart.cash);
	// build jobmults table to penalize job redundancy
	var jobMults = [];
	var iStaff = this.staff.length;
	while (iStaff--) {
		if (jobMults[this.staff[iStaff].job] === undefined) {
			jobMults[this.staff[iStaff].job] = 1;
		} else {
			jobMults[this.staff[iStaff].job] = jobMults[this.staff[iStaff].job] / 1.2;
		}
	}
	iStaff = this.staff.length;
	while (iStaff--) {
		var job = this.jobs[this.staff[iStaff].job];
		var skill = (1 + this.staff[iStaff].skill / 10) * jobMults[job.id];
		cash *= skill * job.cash;
		viewers *= skill * job.viewers;
	}
	var viewership = 1 + (Game.viewers / 1000);
	cash *= viewership;
	var cost = show.cost * viewership;
	return {
		cash: Math.round(cash),
		viewers: Math.round(viewers),
		cost: Math.round(cost),
	}
},
doRatings: function() {
	var ratings = Game.getRatings(Game.dayPart, Game.day);
	Game.viewers += Math.floor(ratings.viewers);
	Game.cash += Math.floor(ratings.cash);

	// subtract costs
	Game.cash -= ratings.cost;

	if (Game.viewers < 0) {
		Game.viewers = 0;
	} else if (Game.viewers > Game.maxViewers) {
		Game.viewers = Game.maxViewers;
	}

	// calculate rank
	if (Game.viewers == 0) {
		Game.rank = 999;
	} else {
		var rank = 1;
		var rankViewers = Game.maxViewers;
		while (Game.viewers < rankViewers) {
			rank++;
			rankViewers = rankViewers / 1.1;
		}
		Game.rank = rank;
	}
},

// display
refreshHires: function() {
	//this.hires = [];
	if (this.hires.length == 3) {
		this.hires.splice(0, 1);
	}
	this.hires.push({
		name: getrandomname(),
		job: Math.floor(Math.random() * this.jobs.length),
		salary: Math.floor(Math.random() * 10) + 1,
		skill: Math.floor(Math.random() * 10) + 1,
	});
},
updateStaff: function() {
	var staffs = "";
	var skill;
	var iStaff = this.staff.length;
	while (iStaff--) {
		var staff = this.staff[iStaff];
		if (staff.skill >= 10) {
			skill = "Exceptional";
		} else if (staff.skill >= 8) {
			skill = "Great";
		} else if (staff.skill >= 4) {
			skill = "Average";
		} else if (staff.skill >= 2) {
			skill = "Poor";
		} else {
			skill = "Terrible";
		}
		staffs += '<tr>' +
			'<td>' + staff.name + '</td>' +
			'<td>' + this.jobs[staff.job].name + '</td>' +
			'<td>' + skill + '</td>' + '<td><span ' +
			'class="label label-important">$' +
			(this.jobs[staff.job].salary * staff.salary).toLocaleString("en") + 
			'</span></td>' +
			'<td><a class="btn btn-danger" href="#" id="staff-' +
			iStaff + '-fire">Fire</a></td>' +
			'</tr>';
	}
	$(".staff-current").html(staffs);
	iStaff = this.staff.length;
	while (iStaff--) {
		$("#staff-" + iStaff + "-fire").click({
			fire: iStaff,
		}, Game.doFire);
	}
},
updateHires: function() {
	var hire, skill;
	var hires = "";
	var iHire = this.hires.length;
	while (iHire--) {
		hire = this.hires[iHire];
		if (hire.skill >= 10) {
			skill = "Exceptional";
		} else if (hire.skill >= 8) {
			skill = "Great";
		} else if (hire.skill >= 4) {
			skill = "Average";
		} else if (hire.skill >= 2) {
			skill = "Poor";
		} else {
			skill = "Terrible";
		}
		var salary = (this.jobs[hire.job].salary * hire.salary);
		hires += '<div class="alert alert-info">' +
			'<strong>' + hire.name + '</strong> (' +
			this.jobs[hire.job].name + ', ' + skill + '), $' +
			salary.toLocaleString("en") + '<br/>';
		if (this.cash >= salary) {
			hires += '<a class="btn btn-success"' +
				'href="#" id="hire-' +
				+ iHire + '-hire">Hire</a>';
		}
		/*
		hires += '<a class="btn btn-danger" href="#" id="hire-' +
			+ iHire + '-dismiss">Dismiss</a>' +
		*/
		hires += '</div>';
	}
	$(".hires").html(hires);
	iHire = this.hires.length;
	while (iHire--) {
		$("#hire-" + iHire + "-hire").click({
			hire: iHire,
		}, Game.doHire);
		$("#hire-" + iHire + "-dismiss").click({
			hire: iHire,
		}, Game.doDismiss);
	}
},
updateStats: function() {
	$(".stat-name").text(this.name);
	$(".stat-rank").text("#" + this.rank);
	if (this.viewers == this.maxViewers) {
		$(".stat-viewers").text("All of them");
	} else {
		$(".stat-viewers").text(this.viewers.toLocaleString("en"));
	}
	$(".stat-cash").text("$" + this.cash.toLocaleString("en"));
	if (Game.rank <= 10) {
		$(".stat-network").text("Premium Cable");
	} else if (Game.rank <= 50) {
		$(".stat-network").text("Basic Cable");
	} else if (Game.rank <= 100) {
		$(".stat-network").text("National Network");
	} else if (Game.rank <= 150) {
		$(".stat-network").text("Local Network");
	} else {
		$(".stat-network").text("Public Access");
	}
},
updateShow: function() {
	$(".stat-day").text(this.days[this.day].name);
	$(".stat-dayPart").text(this.dayParts[this.dayPart].name);
	var show = this.shows[this.schedule[this.dayPart][this.day]];
	var episode = show.episodes[Math.floor(Math.random() * show.episodes.length)];
	//$(".stat-show").hide();
	$(".stat-show").html(episode.name + "<br/>" +
		"<img src='" + episode.gif + "' style='width:400px;height:300px' />");
	//$(".stat-show").show();
	/*
	// set day/night
	if (this.dayParts[this.dayPart].night) {
		$(".stats").addClass("well");
	} else {
		$(".stats").removeClass("well");
	}
	*/
},
updateProgress: function() {
	//var progress = (this.ticks + 1) / this.speed * 100;
	$(".stat-progress").css('width', this.ticks + '%');
},
updateBudget: function() {
	var viewers = 0;
	var shows = 0;
	var staff = 0;
	var revenue = 0;
	var iDayPart = this.dayParts.length;
	while (iDayPart--) {
		var dayPart = this.dayParts[iDayPart];
		var iDay = this.days.length;
		while (iDay--) {
			/*
			var day = this.days[iDay];
			var show = this.shows[this.schedule[iDayPart][iDay]];
			var view = (
				show.viewers * day.viewers * dayPart.viewers);
			var cash = (show.cash * day.cash * dayPart.cash);
			var iStaff = this.staff.length;
			while (iStaff--) {
				cash *= (1 + this.staff[iStaff].skill / 10) * this.jobs[this.staff[iStaff].job].cash;
				view *= (1 + this.staff[iStaff].skill / 10) * this.jobs[this.staff[iStaff].job].viewers;
			}
			viewers += Math.floor(view);
			shows += show.cost;
			revenue += Math.floor(cash);
			*/
			var ratings = this.getRatings(iDayPart, iDay);
			viewers += ratings.viewers;
			revenue += ratings.cash;
			shows += ratings.cost;
		}
	}
	var iStaff = this.staff.length;
	while (iStaff--) {
		staff += (this.staff[iStaff].salary * this.jobs[this.staff[iStaff].job].salary);
	}
	$(".budget-viewers").text(viewers.toLocaleString("en"));
	$(".budget-shows").text("$-" + shows.toLocaleString("en"));
	$(".budget-staff").text("$-" + staff.toLocaleString("en"));
	$(".budget-revenue").text("$" + revenue.toLocaleString("en"));
	$(".budget-total").text("$" + (0 - shows - staff + revenue).toLocaleString("en"));
},
updateSchedule: function() {
	var iDayPart = this.dayParts.length;
	while (iDayPart--) {
		var iDay = this.days.length;
		while (iDay--) {
			var ratings = this.getRatings(iDayPart, iDay);
			var score = ratings.cash + ratings.viewers - ratings.cost;
			var cssClass = '';
			if (score > 0) {
				cssClass = 'btn-success';
			} else if (score < 0) {
				cssClass = 'btn-danger';
			}
			var sch = "sch-" + this.days[iDay].abbr + "-" +
				this.dayParts[iDayPart].abbr;
			
			var show = this.shows[this.schedule[iDayPart][iDay]];
			var html = '<div class="btn-group">' +
				'<a class="btn ' + cssClass +
				'" data-toggle="dropdown" ' +
				'href="#">' + show.name + '</a>' +
				'<a class="btn dropdown-toggle" ' +
				'data-toggle="dropdown" href="#">' +
				'<span class="caret"></span></a>' +
				'<ul class="dropdown-menu">'
			var iShow = this.shows.length;
			while (iShow--) {
				if (this.cash >= this.shows[iShow].cost ||
						this.shows[iShow].cost == 0) {
					html += '<li><a href="#" id="' +
						sch + '-' + iShow + '">' +
						this.shows[iShow].name + '</a></li>';
					$("#" + sch + "-" + iShow).click({
						day: iDay,
						dayPart: iDayPart,
						show: iShow,
					}, Game.setSchedule);
				}
			}
			html += '</ul></div>';
			html += '<div><span class="label label-success">$' + ratings.cash.toLocaleString("en") + '</span>';
			html += '<span class="label label-important">$' + ratings.cost.toLocaleString("en") + '</span>';
			html += '<span class="label">' + ratings.viewers.toLocaleString("en") + '</span></div>';
			//html += '<div>$' + (ratings.cash - ratings.cost) + ', ' + ratings.viewers + 'v</div>';
			$("#" + sch).html(html);

			iShow = this.shows.length;
			while (iShow--) {
				$("#" + sch + "-" + iShow).click({
					day: iDay,
					dayPart: iDayPart,
					show: iShow,
				}, Game.setSchedule);
			}
		}
	}
},
updateCheevos: function() {
	var awards = "<h3>Unlocked " + this.cheevos.length +
		" out of " + this.awards.length + "</h3>";
	if (this.cheevos.length == this.awards.length) {
		awards += '<center>' +
			'<!-- TRIPLE MC HAMMER -->' +
			'<img src="img/test/mchammer.gif">&nbsp;&nbsp;' +
			'<img src="img/test/mchammer.gif">&nbsp;&nbsp;' +
			'<img src="img/test/mchammer.gif">' +
			'</center>';
	}
	var iCheevos = this.cheevos.length;
	while (iCheevos--) {
		awards += '<div class="alert alert-success"><strong>' +
			this.awards[this.cheevos[iCheevos]].name +
			'</strong> - ' +
			this.awards[this.cheevos[iCheevos]].desc +
			'</div>';
	}
	var iAwards = this.awards.length;
	while (iAwards--) {
		if (this.cheevos.indexOf(iAwards) == -1) {
			awards += '<div class="alert alert-info">' +
				this.awards[iAwards].name +
				'</div>';
		}
	}
	$(".awards").html(awards);
},

// the big loop
tick: function() {
	// set the tv
	if (Game.istvclick) {
		Game.istvclick = false;
		$(".img-tv-normal").hide();
		$(".img-tv-click").show();
	} else {
		$(".img-tv-normal").show();
		$(".img-tv-click").hide();
	}
	//if (Game.speed > 0 && ++Game.ticks >= Game.speed) {
	Game.ticks += Game.speed;
	if (Game.ticks > 100) {
		Game.ticks = 0;
		if (++Game.dayPart >= Game.dayParts.length) {
			// advance day
			Game.dayPart = 0;
			Game.refreshHires();
			if (++Game.day >= Game.days.length) {
				// advance week
				Game.day = 0;
				// pay salaries
				var iStaff = this.staff.length;
				while (iStaff--) {
					Game.cash -= (this.staff[iStaff].salary * this.jobs[this.staff[iStaff].job].salary);
				}
			}
			Game.updateBudget();
			Game.updateSchedule();
		}

		// process show ratings
		Game.doRatings();

		// save to cookie
		Game.save();

		// update screen
		Game.updateStats();
		Game.updateShow();
		Game.updateHires();
	}
	// check cheevos
	var iAwards = Game.awards.length;
	while (iAwards--) {
		if (Game.cheevos.indexOf(iAwards) == -1) {
			var award = Game.awards[iAwards];
			if (award.check()) {
				Game.cheevos.push(iAwards);
				$(".award-notification").html(
					'<div class="alert alert-success" id="award-notification-' + iAwards + '">' +
					'<a class="close" id="award-close-' + iAwards + '">x</a>' +
					'<img src="img/test/7upspot.gif"> ' +
					'Award unlocked!<br/>' +
					'<strong>' + award.name + '</strong> - ' + award.desc +
					'</div>'
				);
				$("#award-close-" + iAwards).click({
					id: iAwards,
				}, Game.dismissAwardNotification);
			}
		}
	}
	Game.updateCheevos();
	Game.updateProgress();
	setTimeout(Game.tick, 1000);
},
};

// Load
$(function() {
	$.cookie.json = true;
	if ($.cookie('tvclicker') !== undefined) {
		Game.load();
	} else {
		Game.reset();
	}
	// tv click
	$(".button-tvclick").click(function(evt) {
		evt.preventDefault();
		$(".img-tv-normal").hide();
		$(".img-tv-click").show();
		Game.istvclick = true;
		Game.click();
		Game.updateStats();
	});
	// game reset
	$(".button-reset").click(function(evt) {
		if (confirm("This will delete all progress! Are you sure?")) {
			evt.preventDefault();
			Game.reset();
			Game.updateSchedule();
			Game.updateStats();
			Game.updateShow();
			Game.updateBudget();
			Game.updateHires();
			Game.updateStaff();
		}
	});
	// rename
	$(".stat-name").click(function(evt) {
		var name = prompt("Rename Channel?", Game.name);
		if (name != '' && name !== null) {
			Game.name = name;
			Game.updateStats();
		}
	});
	// speed controls
	$(".button-speed-pause").click(function(evt) {
		Game.speed = 0;
		$(".button-speed-pause").removeClass("btn-default").addClass("btn-primary");
		$(".button-speed-slow").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-normal").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-fast").removeClass("btn-primary").addClass("btn-default");
	});
	$(".button-speed-slow").click(function(evt) {
		Game.speed = 5;
		$(".button-speed-pause").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-slow").removeClass("btn-default").addClass("btn-primary");
		$(".button-speed-normal").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-fast").removeClass("btn-primary").addClass("btn-default");
	});
	$(".button-speed-normal").click(function(evt) {
		Game.speed = 10;
		$(".button-speed-pause").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-slow").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-normal").removeClass("btn-default").addClass("btn-primary");
		$(".button-speed-fast").removeClass("btn-primary").addClass("btn-default");
	});
	$(".button-speed-fast").click(function(evt) {
		Game.speed = 20;
		$(".button-speed-pause").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-slow").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-normal").removeClass("btn-primary").addClass("btn-default");
		$(".button-speed-fast").removeClass("btn-default").addClass("btn-primary");
	});
	// staff sorting
	$(".staff-head-name").click(function(evt) {
		Game.staff.sort(function(a,b) { return b.name.localeCompare(a.name); });
		Game.updateStaff();
	});
	$(".staff-head-job").click(function(evt) {
		Game.staff.sort(function(a,b) { return Game.jobs[b.job].name.localeCompare(Game.jobs[a.job].name); });
		Game.updateStaff();
	});
	$(".staff-head-skill").click(function(evt) {
		Game.staff.sort(function(a,b) { return a.skill - b.skill; });
		Game.updateStaff();
	});
	$(".staff-head-salary").click(function(evt) {
		Game.staff.sort(function(a,b) { return (Game.jobs[a.job].salary * a.salary) - (Game.jobs[b.job].salary * b.salary); });
		Game.updateStaff();
	});

	// initiate game loop
	Game.tick();

	// initialize schedule
	Game.updateSchedule();
	Game.updateStats();
	Game.updateShow();
	Game.updateBudget();
	Game.updateHires();
	Game.updateStaff();
});
