<#import "./macros/macro.ftl" as mc />
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>${title}</title>
</head>
<body>
	${message}

	<hr/>

	<@mc.test a=baseUrl + "not pop" />

</body>
</html>