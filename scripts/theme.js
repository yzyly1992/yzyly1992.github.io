(function() {
	try {
		// Checks for the color scheme of the device.
		// In this case it checks for anything that is not light theme.
		const hasDarkPreference = window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (hasDarkPreference) {
			document.body.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		}
	} catch (err) {}
})();