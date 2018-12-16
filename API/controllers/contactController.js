
const mail = require('./../handlers/mail');

exports.sendMail = async (req, res) => {
	var email = await mail.send({
		user: {
			name: req.body.name,
			phone: req.body.phone,
			email: req.body.email,
			comments: req.body.comments
		}
	})

	res.json("Success");
}

exports.quoteMail = async (req, res) => {

	var email = await mail.sendQuoteMail({
		user: {
			name: req.body.name,
			phone: req.body.phone,
			email: req.body.email,
			comments: req.body.comments,
			direction: req.body.direction,
			service: req.body.service,
			hours: req.body.hours,
			adicionals: req.body.adicionals
		}
	})

	res.json("Success");
}
