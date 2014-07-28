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
jobs: [{
	id: 0,
	name: "Executive",
	salary: 100,
	viewers: 1.5,
	cash: 1.5,
},{
	id: 1,
	name: "Producer",
	salary: 50,
	viewers: 1,
	cash: 1.3,
},{
	id: 2,
	name: "Director",
	salary: 50,
	viewers: 1.3,
	cash: 1,
},{
	id: 3,
	name: "Editor",
	salary: 50,
	viewers: 1.2,
	cash: 1.2,
},{
	id: 4,
	name: "Manager",
	salary: 20,
	viewers: 1.1,
	cash: 1.1,
},{
	id: 5,
	name: "Sales",
	salary: 20,
	viewers: 1,
	cash: 1.2,
},{
	id: 6,
	name: "Cameraman",
	salary: 20,
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
	viewers: 2,
	cash: 2,
	night: false,
},{
	id: 1,
        name: "Afternoon",
	abbr: "aft",
	viewers: 3,
	cash: 1,
	night: false,
},{
	id: 2,
        name: "Evening",
	abbr: "eve",
	viewers: 3,
	cash: 3,
	night: true,
},{
	id: 3,
        name: "Late Night",
	abbr: "lat",
	viewers: 1,
	cash: 1,
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
	viewers: 1,
	cash: 1,
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
	cssClass: "",
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
	cssClass: "btn-success",
	cost: 0,
	cash: 2,
	viewers: -2,
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
		name: 'The Flabmaster',
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
		name: "What the I don't even",
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
	name: "Cartoons",
	cssClass: "btn-danger",
	cost: 2,
	cash: 0,
	viewers: 2,
	episodes: [{
		name: 'The Samsons',
		gif: 'img/tvclicker/cartoon-bart.gif',
	},{
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
	id: 3,
	name: "Drama",
	cssClass: "btn-warning",
	cost: 2,
	cash: 1,
	viewers: 1,
	episodes: [{
		name: "Beaver Hills 01209",
		gif: "img/tvclicker/drama-90210.gif",
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
	},{
		name: "Saved by the Bulls",
		gif: "img/tvclicker/drama-saved-by-the-bell.gif"
	},{
		name: "Next Files",
		gif: "img/tvclicker/drama-x-files.gif"
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
	staff: 0,
	check: function() {
		if (this.staff > Game.staff.length) {
			return true;
		}
		this.staff = Game.staff.length;
		return false;
	},
},{
	id: 8,
	name: "",
	desc: "",
	check: function() {
		return false;
	},
},{
	id: 9,
	name: "",
	desc: "",
	check: function() {
		return false;
	},
},{
	id: 10,
	name: "",
	desc: "",
	check: function() {
		return false;
	},
},{
	id: 11,
	name: "",
	desc: "",
	check: function() {
		return false;
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
	Game.cheevos = [];
	Game.refreshHires();
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
	Game.staff.push(Game.hires[evt.data.hire]);
	Game.hires.splice(evt.data.hire, 1);
	Game.updateHires();
	Game.updateStaff();
	Game.updateBudget();
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

// display
refreshHires: function() {
	this.hires = [];
	var iHire = 3;
	while (iHire--) {
		this.hires.push({
			name: getrandomname(),
			job: Math.floor(Math.random() * this.jobs.length),
			salary: Math.floor(Math.random() * 10) + 1,
			skill: Math.floor(Math.random() * 10) + 1,
		});
	}
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
			'<td>' + skill + '</td>' + '<td>$' +
			(this.jobs[staff.job].salary * staff.salary) + '</td>' +
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
		hires += '<div class="alert alert-info">' +
			'<strong>' + hire.name + '</strong> (' +
			this.jobs[hire.job].name + ', ' + skill + '), $' +
			(this.jobs[hire.job].salary * hire.salary) +
			'<br/><a class="btn btn-success" href="#" id="hire-' +
			+ iHire + '-hire">Hire</a>' +
			'<a class="btn btn-danger" href="#" id="hire-' +
			+ iHire + '-dismiss">Dismiss</a>' +
			'</div>';
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
	$(".stat-viewers").text(this.viewers);
	$(".stat-cash").text("$" + this.cash);
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
		}
	}
	var iStaff = this.staff.length;
	while (iStaff--) {
		staff += this.staff[iStaff].salary * this.jobs[this.staff[iStaff].job].salary;
	}
	$(".budget-viewers").text(viewers);
	$(".budget-shows").text("$-" + shows);
	$(".budget-staff").text("$-" + staff);
	$(".budget-revenue").text("$" + revenue);
	$(".budget-total").text("$" + (0 - shows - staff + revenue));
},
updateSchedule: function() {
	var iDayPart = this.dayParts.length;
	while (iDayPart--) {
		var iDay = this.days.length;
		while (iDay--) {
			var sch = "sch-" + this.days[iDay].abbr + "-" +
				this.dayParts[iDayPart].abbr;
			
			var show = this.shows[this.schedule[iDayPart][iDay]];
			var html = '<div class="btn-group">' +
				'<a class="btn ' + show.cssClass +
				'" data-toggle="dropdown" ' +
				'href="#">' + show.name + '</a>' +
				'<a class="btn dropdown-toggle" ' +
				'data-toggle="dropdown" href="#">' +
				'<span class="caret"></span></a>' +
				'<ul class="dropdown-menu">'
			var iShow = this.shows.length;
			while (iShow--) {
				html += '<li><a href="#" id="' +
					sch + '-' + iShow + '">' +
					this.shows[iShow].name + '</a></li>';
				$("#" + sch + "-" + iShow).click({
					day: iDay,
					dayPart: iDayPart,
					show: iShow,
				}, Game.setSchedule);
			}
			html += '</ul>';
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
			Game.updateHires();
			if (++Game.day >= Game.days.length) {
				// advance week
				Game.day = 0;
				// pay salaries
				var iStaff = this.staff.length;
				while (iStaff--) {
					Game.cash -= this.staff[iStaff].salary * this.jobs[this.staff[iStaff].job].salary;
				}
			}
		}

		var show = Game.shows[Game.schedule[Game.dayPart][Game.day]];
		var day = Game.days[Game.day];
		var dayPart = Game.dayParts[Game.dayPart];
		// get new viewers
		var viewers = (show.viewers * day.viewers * dayPart.viewers);
		// generate cash
		var cash = (show.cash * day.cash * dayPart.cash);
		var iStaff = this.staff.length;
		while (iStaff--) {
			cash *= (1 + this.staff[iStaff].skill / 10) * this.jobs[this.staff[iStaff].job].cash;
			viewers *= (1 + this.staff[iStaff].skill / 10) * this.jobs[this.staff[iStaff].job].viewers;
		}
		Game.viewers += Math.floor(viewers);
		Game.cash += Math.floor(cash);

		// subtract costs
		Game.cash -= show.cost;

		if (Game.viewers < 0) {
			Game.viewers = 0;
		}
		if (Game.cash < 0) {
			Game.cash = 0;
		}

		// save to cookie
		Game.save();
		Game.updateStats();
		Game.updateShow();
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
