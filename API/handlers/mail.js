const nodemailer = require('nodemailer');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'juanpamv3@gmail.com',
        pass: 'Abril#2018'
    }
});

exports.send = async (options) => {
    const mailOptions = {
        from: 'Photobooth Costa Rica <noreply@juanpawd.com>',
        to: 'juanpamv3@gmail.com',
        subject: 'Mensaje Enviado desde Photobooth.com',
        html:  `Nombre: ${options.user.name},<br />
        Email: ${options.user.email},<br />
        Teléfono: ${options.user.phone},<br />
        Mensaje: ${options.user.comments},<br />`,
        text: "text"
    };
    const sendMail = promisify(transport.sendMail, transport);
    return sendMail(mailOptions);
}

exports.sendQuoteMail = async (options) => {
    const mailOptions = {
        from: 'Photobooth Costa Rica <noreply@juanpawd.com>',
        to: 'juanpamv3@gmail.com, jpmv3@hotmail.com',
        subject: 'Mensaje Enviado desde Photobooth.com',
        html:  `Nombre: ${options.user.name},<br />
        Email: ${options.user.email},<br />
        Teléfono: ${options.user.phone},<br />
        Dirección: ${options.user.phone},<br />
        Mensaje: ${options.user.comments},<br />
        Servicio: ${options.user.service},<br />
        Horas de servicio: ${options.user.hours},<br />
        Adicionales: ${options.user.adicionals},<br />`,
        text: "text"
    };
    const sendMail = promisify(transport.sendMail, transport);
    return sendMail(mailOptions);
}