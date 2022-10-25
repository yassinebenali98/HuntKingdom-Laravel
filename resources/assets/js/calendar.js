//________ FullCalendar
document.addEventListener('DOMContentLoaded', function() {
	var containerEl = document.getElementById('external-events-list');
	new FullCalendar.Draggable(containerEl, {
	  itemSelector: '.fc-event',
	  eventData: function(eventEl) {
		return {
		  title: eventEl.innerText.trim(),
		  title: eventEl.innerText,
		  className: eventEl.className + ' overflow-hidden '
		}
	  }
	});
	var calendarEl = document.getElementById('calendar');
	
	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		  },
	   navLinks: true, // can click day/week names to navigate views
	  businessHours: true, // display business hours
	  editable: true,
	  selectable: true,
	  selectMirror: true,
	  droppable: true, // this allows things to be dropped onto the calendar
		  	
	  select: function(arg) {
		var title = prompt('Event Title:');
		if (title) {
		  calendar.addEvent({
			title: title,
			start: arg.start,
			end: arg.end,
			allDay: arg.allDay
		  })
		}
		calendar.unselect()
	  },
	  eventClick: function(arg) {
		if (confirm('Are you sure you want to delete this event?')) {
		  arg.event.remove()
		}
	  },

	  editable: true,
		eventSources: [sptCalendarEvents, sptBirthdayEvents, sptHolidayEvents, sptOtherEvents,],
		
	});
	calendar.render();
});	

// sample calendar events data
'use strict'
var curYear = moment().format('YYYY');
var curMonth = moment().format('MM');
// Calendar Event Source
var sptCalendarEvents = {
	id: 1,
	events: [{
		id: '1',
		start: curYear + '-' + curMonth + '-02',
		end: curYear + '-' + curMonth + '-03',
		title: 'Spruko Meetup',
		backgroundColor: 'rgba(241, 56, 139, 0.7)',
		borderColor: '#f1388b',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '2',
		start: curYear + '-' + curMonth + '-17',
		end: curYear + '-' + curMonth + '-17',
		title: 'Design Review',
		backgroundColor: 'rgba(68, 86, 195, 0.7)',
		borderColor: '#4d65d9',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '3',
		start: curYear + '-' + curMonth + '-13',
		end: curYear + '-' + curMonth + '-13',
		title: 'Lifestyle Conference',
		backgroundColor: 'rgba(241, 56, 139, 0.7)',
		borderColor: '#f1388b',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '4',
		start: curYear + '-' + curMonth + '-21',
		end: curYear + '-' + curMonth + '-21',
		title: 'Team Weekly Brownbag',
		backgroundColor: 'rgba(3, 115, 242, 0.7)',
		borderColor: '#0373f2',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '5',
		start: curYear + '-' + curMonth + '-04T10:00:00',
		end: curYear + '-' + curMonth + '-06T15:00:00',
		title: 'Music Festival',
		backgroundColor: 'rgba(253, 96, 116, 0.7)',
		borderColor: '#fd6074',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '6',
		start: curYear + '-' + curMonth + '-23T13:00:00',
		end: curYear + '-' + curMonth + '-25T18:30:00',
		title: 'Attend Lea\'s Wedding',
		backgroundColor: 'rgba(253, 96, 116, 0.7)',
		borderColor: '#fd6074',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}]
};
// Birthday Events Source
var sptBirthdayEvents = {
	id: 2,
	backgroundColor: 'rgba(25, 177, 89, 0.7)',
	borderColor: '#19b159',
	textColor: '#fff',
	events: [{
		id: '7',
		start: curYear + '-' + curMonth + '-04',
		end: curYear + '-' + curMonth + '-04',
		title: 'Harcates Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '8',
		start: curYear + '-' + curMonth + '-28',
		end: curYear + '-' + curMonth + '-28',
		title: 'Jinnysin\'s Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '9',
		start: curYear + '-' + curMonth + '-31',
		end: curYear + '-' + curMonth + '-31',
		title: 'Lee shin\'s Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}]
};
var sptHolidayEvents = {
	id: 3,
	backgroundColor: 'rgba(1, 184, 255, 0.7)',
	borderColor: '#01b8ff',
	textColor: '#fff',
	events: [{
		id: '10',
		start: curYear + '-' + curMonth + '-05',
		end: curYear + '-' + curMonth + '-08',
		title: 'Festival Day'
	}, {
		id: '11',
		start: curYear + '-' + curMonth + '-18',
		end: curYear + '-' + curMonth + '-19',
		title: 'Memorial Day'
	}, {
		id: '12',
		start: curYear + '-' + curMonth + '-25',
		end: curYear + '-' + curMonth + '-26',
		title: 'Diwali'
	}]
};
var sptOtherEvents = {
	id: 4,
	backgroundColor: 'rgba(255, 155, 33, 0.7)',
	borderColor: '#ff9b21',
	textColor: '#fff',
	events: [{
		id: '13',
		start: curYear + '-' + curMonth + '-07',
		end: curYear + '-' + curMonth + '-09',
		title: 'My Rest Day'
	}, {
		id: '13',
		start: curYear + '-' + curMonth + '-29',
		end: curYear + '-' + curMonth + '-31',
		title: 'My Rest Day'
	}]
};