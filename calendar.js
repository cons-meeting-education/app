const authList = [
	{
		calendarId: "ug8sbhrg244mo46m83ut0p0itk@group.calendar.google.com",
		clientId:
			"410059492567-gl8cuas6u8kjv726vu6a5of86qi3bnsd.apps.googleusercontent.com",
		clientSecret: "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",
		refreshToken:
			"1//04OW-zWV15yuuCgYIARAAGAQSNwF-L9IrrgvnP_GeYrb5v7jiBRak2UTEHH762ZhNStarzi_dbJo3iyskX5vMuhpTyccS_oXUz6I",
	},
	{
		calendarId: "6ijajflusv2fu5j0ku9hqqs25g@group.calendar.google.com",
		clientId:
			"684116729825-9o3dv73q5qvtprpurp2mrv7bb86d75re.apps.googleusercontent.com",
		clientSecret: "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",
		refreshToken:
			"1//04qW2xtd_bU0YCgYIARAAGAQSNwF-L9IrNeAvjgTHWZqxQGBm6gBKEGLB8XHBIVjyUKzjkVGRPAJhTTmnuDDEVPAa4zjo0Kj3aTs",
	},
];

// Init Google Calendar API
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const currentAuthIndex = 1;
const oAuth2Client = new OAuth2(
	authList[currentAuthIndex].clientId,
	authList[currentAuthIndex].clientSecret
);

oAuth2Client.setCredentials({
	refresh_token: authList[currentAuthIndex].refreshToken,
});

module.exports.calendar = google.calendar({
	version: "v3",
	auth: oAuth2Client,
});
module.exports.calendarId = authList[currentAuthIndex].calendarId;
