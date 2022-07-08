export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Home</title>
</head>
<body>
	<div id="app">${content}</div>
</body>
<script src="/static/client.js" type="application/javascript"></script>
</html>`;