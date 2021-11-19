const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
	host : "smtp.ethereal.email",
	port : 587,
	secure : false,
	auth : {
		user : "s3tmzpw4yonqzspb@ethereal.email",
		pass : "ZpnuvZyHGqt9Jy37Gu"
	}
});

const schedule = (user,interview) => {
	transporter.sendMail({
		from: 'ib.recruiter@gmail.com',
		to: user.email,
		subject: `Invitation : ${user.name} || Interview Round @ ${interview.date.toString()} ${interview.startTime.toString()} ${interview.endTime.toString()}(IST) (${user.email})`,
		html: `<b>Hi ${user.name}, <br/><br/> Greetings !!!<br/>Kindly make yourself for the interview.<br/> Venue : Google Meet <br/> Date : ${interview.date}<br/> Time : ${interview.startTime.toString()} - ${interview.endTime.toString()}. </b>`
	}, (err, _) => {
		if (err) {
			return {error: err};
		}
		return {statusCode: 1, success: true};
	});
}
const updateSchedule = (user,date,startTime,endTime) =>{
	transporter.sendMail({
		from : 'ib.recruiter@gmail.com',
		to : user.email,
		subject : `Invitation(Revised) : ${user.name} || Interview Round @ ${date.toString()} ${startTime.toString()} ${endTime.toString()}(IST) (${user.email})`,
		html: `<b>Hi ${user.name}, <br/><br/> Greetings !!!<br/>Kindly make yourself for the resheduleed interview.<br/> Venue : Google Meet <br/> Date : ${date}<br/> Time : ${startTime.toString()} - ${endTime.toString()}. </b>`
	},(err,_)=>{
		if(err){
			return {error : err};
		}
		return {statusCode : 1,success : true};
	});
}
const deleteSchedule = (user,interview) =>{
	transporter.sendMail({
		from : 'ib.recruiter@gmail.com',
		to : user.email,
		subject: `Interview Scheduled at ${interview.date.toString()} ${interview.startTime.toString()} ${interview.endTime.toString()}(IST) with (${user.email}) is cancelled.`,
		html: `<b>Hi ${user.name}, <br/><br/> Sorry for the inconvience !!!<br/>Your Interview is cancelled which was scheduled At <br/> Venue : Google Meet <br/> Date : ${interview.date}<br/> Time : ${interview.startTime.toString()} - ${interview.endTime.toString()}. </b>`
	},(err,_)=>{
		if(err){
			return {error : err};
		}
		return {statusCode : 1,success : true};
	});
}

module.exports = {
	schedule,
	updateSchedule,
	deleteSchedule
}
